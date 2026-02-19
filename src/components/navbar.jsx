import { getIcons } from "../utils/icons";
import { NavLink } from "react-router-dom";
import Modal from "./modal";
import Header from "./header";
import { useState } from "react";
import {
  ChevronLeft,
  User,
  ChevronRight,
  Wallet,
  Translate,
  SwapVertical,
  InfoCircle,
  CustomerSupport,
  Database,
} from "griddy-icons";

export default function Navbar({ title, icons, position, hidden }) {
  const Dashboard = getIcons("dashboard");
  const Transaction = getIcons("transaction");
  const Analytics = getIcons("analytics");
  const Settings = getIcons("settings");
  const [OpenModal, setOpenModal] = useState(false);
  const [TypeModal, setTypeModal] = useState("");
  return (
    <>
      <nav
        className={`flex items-center text-secondary ${position === "left" ? "justify-center" : "justify-between"} bg-primary fixed top-0
      left-0 w-full h-20 px-2.5 z-50`}
      >
        {icons}
        <h1 className="font-b text-slate-300 text-2xl">{title}</h1>
      </nav>

      {!hidden && (
        <section
          className="flex items-center justify-center py-5 px-2.5 w-full fixed
      bottom-0 left-0 z-50"
        >
          <section
            className="w-full h-20 bg-primary rounded-full p-5 flex
       items-center justify-between gap-2.5"
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-slate-300 flex
         flex-col items-center justify-center gap-2 font-bold text-sm`
                  : `text-secondary flex flex-col items-center justify-center gap-2
         text-sm`
              }
              to={"/"}
            >
              <Dashboard />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-slate-300 flex
         flex-col items-center justify-center gap-2 font-bold text-sm`
                  : `text-secondary flex flex-col items-center justify-center gap-2
         text-sm`
              }
              to={"/Transaction"}
            >
              <Transaction />
              <span>Transaction</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-slate-300 flex
         flex-col items-center justify-center gap-2 font-bold text-sm`
                  : `text-secondary flex flex-col items-center justify-center gap-2
         text-sm`
              }
              to={"/Analytics"}
            >
              <Analytics />
              <span>Analytics</span>
            </NavLink>
            <div
              className={
                OpenModal && TypeModal === "settings"
                  ? `text-slate-300 flex
         flex-col items-center justify-center gap-2 font-bold text-sm`
                  : `text-secondary
         flex flex-col items-center justify-center gap-2 text-sm`
              }
              onClick={() => {
                setOpenModal(true);
                setTypeModal("settings");
              }}
            >
              <Settings />
              <span>Settings</span>
            </div>
          </section>
        </section>
      )}

      <Modal
        styles={`fixed top-0 flex flex-col right-0 w-full inset-0 bg-secondary z-100 ${OpenModal && TypeModal === "settings" ? "animation-drawer-in translate-x-0" : "animation-drawer-out translate-x-[500px]"}`}
        isOpen={OpenModal}
      >
        <Header
          styles="w-full shrink-0 sticky top-0 z-30 left-0 flex h-20 bg-primary text-slate-300 px-2.5 items-center justify-center relative"
          title={"Settings"}
          icons={
            <ChevronLeft
              size={24}
              className="absolute left-2.5"
              onClick={() => {
                setTypeModal("");
                setOpenModal(false);
              }}
            />
          }
        />
        <main className="flex-1 overflow-scroll p-5">
          <section className="flex flex-col mb-5 divide-slate-700 divide-y gap-y-5 bg-primary w-full rounded-2xl p-5 text-secondary">
            <NavLink className="flex items-center w-full h-20 justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary text-primary p-2.5 flex items-center justify-center">
                  <User size={28} className="text-primary" />
                </div>
                <h1 className="font-medium text-xl">Profile</h1>
              </div>
              <ChevronRight size={24} />
            </NavLink>
            <NavLink
              className="flex items-center w-full h-20 justify-between"
              to={"/Wallet"}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary text-primary p-2.5 flex items-center justify-center">
                  <Wallet size={28} className="text-primary" />
                </div>
                <h1 className="font-medium text-xl">My Wallet</h1>
              </div>
              <ChevronRight size={24} />
            </NavLink>
            <NavLink className="flex items-center w-full h-20 justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary text-primary p-2.5 flex items-center justify-center">
                  <Translate size={28} className="text-primary" />
                </div>
                <h1 className="font-medium text-xl">Language</h1>
              </div>
              <ChevronRight size={24} />
            </NavLink>
            <NavLink className="flex items-center w-full h-20 justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary text-primary p-2.5 flex items-center justify-center">
                  <SwapVertical size={28} className="text-primary" />
                </div>
                <h1 className="font-medium text-xl">Import & Export</h1>
              </div>
              <ChevronRight size={24} />
            </NavLink>
          </section>
          <section className="flex flex-col divide-slate-700 divide-y gap-y-6 bg-primary w-full rounded-2xl p-5 text-secondary">
            <NavLink className="flex items-center w-full h-20 justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary text-primary p-2.5 flex items-center justify-center">
                  <InfoCircle size={28} className="text-primary" />
                </div>
                <h1 className="font-medium text-xl">About Us</h1>
              </div>
              <ChevronRight size={24} />
            </NavLink>
            <NavLink className="flex items-center w-full h-20 justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary text-primary p-2.5 flex items-center justify-center">
                  <CustomerSupport size={28} className="text-primary" />
                </div>
                <h1 className="font-medium text-xl">Help Center</h1>
              </div>
              <ChevronRight size={24} />
            </NavLink>
            <NavLink className="flex items-center w-full h-20 justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-500/10 p-2.5 flex items-center justify-center">
                  <Database size={28} className="text-red-500" />
                </div>
                <h1 className="font-medium text-xl text-red-500">
                  Delete Data
                </h1>
              </div>
              <ChevronRight size={24} />
            </NavLink>
          </section>
        </main>
      </Modal>
    </>
  );
}
