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

import Header from "../components/header";
import Navbar from "../components/navbar";

import { NavLink, useNavigate } from "react-router-dom";

export default function Settings() {
  const nav = useNavigate();
  return (
    <>
      <Navbar
        title={"Settings"}
        icons={
          <ChevronLeft
            size={24}
            className="absolute left-2.5"
            onClick={() => nav(-1)}
          />
        }
        position={"left"}
        hidden={true}
      />
      <main className="flex-1 overflow-scroll px-2.5 pb-5">
        <section className="flex flex-col mb-5 divide-slate-700 divide-y gap-y-5 bg-primary w-full rounded-2xl p-5 text-slate-300!">
          <NavLink className="flex items-center w-full h-20 justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-secondary/20 text-slate-300! p-2.5 flex items-center justify-center">
                <User size={28} />
              </div>
              <h1 className="font-medium text-xl">Profile</h1>
            </div>
            <ChevronRight size={24} />
          </NavLink>
          <NavLink
            className="flex items-center w-full h-20 justify-between"
            to={"/Settings/Wallet"}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-secondary/20 text-slate-300! p-2.5 flex items-center justify-center">
                <Wallet size={28} />
              </div>
              <h1 className="font-medium text-xl">My Wallet</h1>
            </div>
            <ChevronRight size={24} />
          </NavLink>
          <NavLink className="flex items-center w-full h-20 justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-secondary/20 text-slate-300! p-2.5 flex items-center justify-center">
                <Translate size={28} />
              </div>
              <h1 className="font-medium text-xl">Language</h1>
            </div>
            <ChevronRight size={24} />
          </NavLink>
          <NavLink className="flex items-center w-full h-20 justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-secondary/20 text-slate-300! p-2.5 flex items-center justify-center">
                <SwapVertical size={28} />
              </div>
              <h1 className="font-medium text-xl">Import & Export</h1>
            </div>
            <ChevronRight size={24} />
          </NavLink>
        </section>
        <section className="flex flex-col divide-slate-700 divide-y gap-y-6 bg-primary w-full rounded-2xl p-5 text-slate-300">
          <NavLink className="flex items-center w-full h-20 justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-secondary/20 text-slate-300! p-2.5 flex items-center justify-center">
                <InfoCircle size={28} />
              </div>
              <h1 className="font-medium text-xl">About Us</h1>
            </div>
            <ChevronRight size={24} />
          </NavLink>
          <NavLink className="flex items-center w-full h-20 justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-secondary/20 text-slate-300! p-2.5 flex items-center justify-center">
                <CustomerSupport size={28} />
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
              <h1 className="font-medium text-xl text-red-500">Delete Data</h1>
            </div>
            <ChevronRight size={24} />
          </NavLink>
        </section>
      </main>
    </>
  );
}
