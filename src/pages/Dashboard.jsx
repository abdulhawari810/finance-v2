import Navbar from "../components/navbar";
import Card from "../components/card";
import Modal from "../components/modal";
import SelectForm from "../components/select";
import SelectDatePicker from "../components/datepicker";

import { getIcons, ProviderIcons } from "../utils/icons";
import {
  Bank,
  ChevronLeft,
  ChevronRightSmall,
  CloseCircle,
  MoreHorizontal,
} from "griddy-icons";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { NavLink } from "react-router-dom";
import Header from "../components/header";
import { useState } from "react";

export default function Dashboard() {
  const Wallet = getIcons("wallet");
  const ArrowUp = getIcons("arrowup");
  const ArrowDown = getIcons("arrowdown");
  const Expense = getIcons("expense");
  const Income = getIcons("income");
  const Transfer = getIcons("transfer");

  const [OpenModal, setOpenModal] = useState(false);
  const [ModalType, setModalType] = useState("");
  const [OpenSubModal, setOpenSubModal] = useState(false);
  const [ActiveMenu, setActiveMenu] = useState(null);
  const [category, setCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  console.log(OpenModal);

  const data = [
    { month: "Jan", income: 2500000 },
    { month: "Feb", income: 3200000 },
    { month: "Mar", income: 2800000 },
    { month: "Apr", income: 4000000 },
    { month: "Mei", income: 3500000 },
    { month: "Jun", income: 4200000 },
  ];

  const dataCategory = [
    {
      value: "gaji",
      label: "Salary",
    },
    {
      value: "piutang",
      label: "Piutang",
    },
    {
      value: "kendaraan",
      label: "Kendaraan",
    },
    {
      value: "cicilan",
      label: "Cicilan",
    },
  ];

  const banks = [
    { id: 1, name: "BRI", owner: "Abdul", number: "15151515" },
    { id: 2, name: "BCA", owner: "Budi", number: "99999999" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className=" pb-27.5">
      <Navbar title={"Dashboard"} />
      <Card
        styles={`flex flex-col bg-primary w-full h-auto gap-5 rounded-xl
      text-slate-300! p-5`}
      >
        <section className="flex items-center gap-2">
          <Wallet color="text-secondary" />
          <h1 className="font-b text-lg">Balance</h1>
        </section>
        <section className="flex items-center gap-5 font-bold text-2xl">
          Rp 5.000.000
        </section>
        <section className="grid grid-cols-3">
          <button
            className="w-full flex items-center justify-center flex-col
          gap-2"
            onClick={() => {
              setOpenModal(true);
              setModalType("income");
            }}
          >
            <ArrowDown color="text-secondary" />
            <span>Masuk</span>
          </button>
          <button
            className="w-full flex items-center justify-center flex-col
          gap-2"
            onClick={() => {
              setOpenModal(true);
              setModalType("expense");
            }}
          >
            <ArrowUp color="text-secondary" />
            <span>Keluar</span>
          </button>
          <button
            className="w-full flex items-center justify-center flex-col
          gap-2"
            onClick={() => {
              setOpenModal(true);
              setModalType("transfer");
            }}
          >
            <Transfer color="text-secondary" />
            <span>Transfer</span>
          </button>
        </section>
      </Card>
      <section className="grid grid-cols-2 gap-5 my-5">
        <Card
          styles="flex flex-col justify-center items-center gap-2 bg-primary
      rounded-xl text-slate-300! w-full h-[100px]"
        >
          <section className="flex items-center gap-2">
            <Expense color="text-secondary" className="rotate-180" />
            <span>Cash In</span>
          </section>
          <span>Rp 5.000.000</span>
        </Card>
        <Card
          styles="flex flex-col justify-center items-center gap-2 bg-primary
      rounded-xl text-slate-300! w-full h-[100px]"
        >
          <section className="flex items-center gap-2">
            <Expense color="text-secondary" />
            <span>Cash Out</span>
          </section>
          <span>Rp 5.000.000</span>
        </Card>
      </section>

      <section className="w-full flex mb-2.5 items-center justify-between">
        <h1 className="text-lg font-bold">Transaction History</h1>
        <NavLink className="flex items-center justify-center text-md">
          <span>Seemore</span>
          <ChevronRightSmall className="" size={24} />
        </NavLink>
      </section>

      <section className="flex items-center justify-between flex-col overflow-x-scroll overflow-y-hidden snap-mandatory bg-primary rounded-2xl mb-5 w-full">
        <Card
          styles={
            "w-full shrink-0 snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
      </section>

      <div
        className="w-full h-80 bg-white rounded-2xl shadow outline-none!
      focus:outline-none! focus:ring-0! p-4"
      >
        <h2 className="text-lg font-semibold mb-4">Monthly Income</h2>

        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value) =>
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(value)
              }
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Modal
        styles={`w-full inset-0 flex flex-col bg-slate-300 fixed top-0 left-0 z-100 ${OpenModal && ModalType === "income" ? "animation-modal-in scale-100" : "animation-modal-out scale-0"}`}
        isOpen={OpenModal}
      >
        <Header
          styles="w-full shrink-0 sticky top-0 z-30 left-0 flex h-20 bg-primary text-slate-100 px-2.5 items-center justify-center relative"
          title={"Money Income"}
          icons={
            <ChevronLeft
              size={24}
              className="absolute left-2.5"
              onClick={() => {
                setModalType("");
                setOpenModal(false);
              }}
            />
          }
        />
        <section className="flex-1 py-5 overflow-y-scroll">
          <form className="flex flex-col px-2.5" onSubmit={handleSubmit}>
            <Card
              styles={
                "flex w-full flex items-center justify-between bg-primary text-slate-100 p-5 rounded-2xl"
              }
            >
              <div className="flex items-center gap-4">
                <Bank size={32} />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">Bank BRI</h1>
                  <span className="text-md">Abdul Hawari</span>
                  <span className="text-md">15151515</span>
                </div>
              </div>
              <button
                className="flex items-center justify-center"
                onClick={() => setOpenSubModal(!OpenSubModal)}
              >
                <span>Change</span>
              </button>
            </Card>

            <SelectForm
              title="Select Category"
              options={dataCategory}
              value={category}
              onChange={setCategory}
            />

            <div className="mt-5 grid items-center grid-cols-2">
              <h1 className="font-b text-lg w-full">Select Date</h1>
              <SelectDatePicker
                value={selectedDate}
                onChange={setSelectedDate}
              />
            </div>

            <div className="flex flex-col relative justify-center items-center mt-5">
              <textarea
                className="w-full p-5 peer outline text-lg font-bold outline-slate-800 rounded-2xl h-35"
                placeholder=" "
                id="note"
              ></textarea>
              <label
                htmlFor="note"
                className="absolute text-slate-700 peer-focus:text-primary peer-not-placeholder-shown:text-primary text-lg font-bold left-5 top-5 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:bg-slate-300 px-2 peer-not-placeholder-shown:text-sm peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:bg-slate-300 peer-focus:text-sm"
              >
                Note
              </label>
            </div>

            <div className="flex w-full mt-5 items-center justify-center relative">
              <input
                type="number"
                placeholder="Nominal"
                className="outline rounded-2xl text-2xl font-bold outline-slate-900 w-full text-center h-50 px-5"
              />
            </div>
            <button
              type="submit"
              className="w-full text-slate-100 font-b text-xl h-20 bg-primary rounded-xl mt-5"
            >
              <h1>Add Income</h1>
            </button>
          </form>
        </section>
      </Modal>

      <Modal
        styles={`w-full inset-0 flex flex-col bg-secondary fixed top-0 left-0 z-100 ${OpenModal && ModalType === "expense" ? "animation-modal-in scale-100" : "animation-modal-out scale-0"}`}
        isOpen={OpenModal}
      >
        <Header
          styles="w-full shrink-0 sticky top-0 z-30 left-0 flex h-20 bg-primary text-secondary px-2.5 items-center justify-center relative"
          title={"Cash Out"}
          icons={
            <ChevronLeft
              size={24}
              className="absolute left-2.5"
              onClick={() => {
                setModalType("");
                setOpenModal(false);
              }}
            />
          }
        />
        <section className="flex-1 w-full h-screen py-5 overflow-scroll">
          <form className="flex flex-col px-2.5">
            <Card
              styles={
                "flex w-full flex items-center justify-between bg-primary text-secondary p-5 rounded-2xl"
              }
            >
              <div className="flex items-center gap-4">
                <Bank size={32} />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">Bank BRI</h1>
                  <span className="text-md">Abdul Hawari</span>
                  <span className="text-md">15151515</span>
                </div>
              </div>
              <button className="flex items-center justify-center">
                <span>Change</span>
              </button>
            </Card>

            <div class="flex flex-col gap-1 mt-5 w-full">
              <label
                for="category"
                class="text-xs font-semibold text-primary uppercase tracking-wide"
              >
                Category
              </label>

              <select
                id="category"
                class="w-full outline outline-slate-700 rounded-2xl px-4 py-3 text-sm
            focus:outline-primary focus:ring-2 focus:ring-primary/30
           transition-all duration-200"
              >
                <option value="">Select category</option>

                <option value="salary">Salary</option>
                <option value="bonus">Bonus</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 mt-5 w-full">
              <label
                htmlFor="date"
                className="text-xs font-semibold peer-focus:text-primary peer-not-placeholder-shown:text-primary text-slate-700 uppercase tracking-wide"
              >
                Date
              </label>

              <input
                type="date"
                id="date"
                className="w-full peer outline outline-slate-700 rounded-2xl px-4 py-3 text-sm
               focus:outline-primary focus:ring-2 focus:ring-primary/30
               transition-all duration-200"
              />
            </div>

            <div className="flex flex-col relative justify-center items-center mt-5">
              <textarea
                className="w-full p-5 peer outline text-lg font-bold outline-slate-800 rounded-2xl h-35"
                placeholder=" "
                id="note"
              ></textarea>
              <label
                htmlFor="note"
                className="absolute text-slate-700 peer-focus:text-primary peer-not-placeholder-shown:text-primary text-lg font-bold left-5 top-5 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:bg-secondary px-2 peer-not-placeholder-shown:text-sm peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:bg-secondary peer-focus:text-sm"
              >
                Note
              </label>
            </div>

            <div className="flex w-full mt-5 items-center justify-center relative">
              <input
                type="number"
                placeholder="Nominal"
                className="outline rounded-2xl text-2xl font-bold outline-slate-900 w-full text-center h-50 px-5"
              />
            </div>
            <button
              type="submit"
              className="w-full text-secondary font-bold text-lg h-15 bg-primary rounded-lg mt-5"
            >
              <h1>Add Expense</h1>
            </button>
          </form>
        </section>
      </Modal>

      <Modal
        styles={`w-full inset-0 flex flex-col bg-secondary fixed top-0 left-0 z-100 ${OpenModal && ModalType === "transfer" ? "animation-modal-in scale-100" : "animation-modal-out scale-0"}`}
        isOpen={OpenModal}
      >
        <Header
          styles="w-full shrink-0 sticky top-0 z-30 left-0 flex h-20 bg-primary text-secondary px-2.5 items-center justify-center relative"
          title={"Transfer"}
          icons={
            <ChevronLeft
              size={24}
              className="absolute left-2.5"
              onClick={() => {
                setModalType("");
                setOpenModal(false);
              }}
            />
          }
        />
        <section className="flex-1 w-full h-screen py-5 overflow-scroll">
          <form className="flex flex-col px-2.5">
            <h1 className="font-bold text-2xl text-primary">From</h1>
            <Card
              styles={
                "flex w-full flex items-center justify-between bg-primary text-secondary p-5 rounded-2xl"
              }
            >
              <div className="flex items-center gap-4">
                <Bank size={32} />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">Bank BRI</h1>
                  <span className="text-md">Abdul Hawari</span>
                  <span className="text-md">15151515</span>
                </div>
              </div>
              <button className="flex items-center justify-center">
                <span>Change</span>
              </button>
            </Card>

            <h1 className="font-bold text-2xl text-primary mt-5">To</h1>
            <Card
              styles={
                "flex w-full flex items-center justify-between bg-primary text-secondary p-5 rounded-2xl"
              }
            >
              <div className="flex items-center gap-4">
                <Bank size={32} />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">Bank BRI</h1>
                  <span className="text-md">Abdul Hawari</span>
                  <span className="text-md">15151515</span>
                </div>
              </div>
              <button className="flex items-center justify-center">
                <span>Change</span>
              </button>
            </Card>

            <div className="flex flex-col relative justify-center items-center mt-5">
              <textarea
                className="w-full p-5 peer outline text-lg font-bold outline-slate-800 rounded-2xl h-35"
                placeholder=" "
                id="note"
              ></textarea>
              <label
                htmlFor="note"
                className="absolute text-slate-700 peer-focus:text-primary peer-not-placeholder-shown:text-primary text-lg font-bold left-5 top-5 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:bg-secondary px-2 peer-not-placeholder-shown:text-sm peer-focus:top-0 peer-focus:-translate-y-3 peer-focus:bg-secondary peer-focus:text-sm"
              >
                Note
              </label>
            </div>

            <div className="flex w-full mt-5 items-center justify-center relative">
              <input
                type="number"
                placeholder="Nominal"
                className="outline rounded-2xl text-2xl font-bold outline-slate-900 w-full text-center h-50 px-5"
              />
            </div>
            <button
              type="submit"
              className="w-full text-secondary font-bold text-lg h-15 bg-primary rounded-lg mt-5"
            >
              <h1>Transfer</h1>
            </button>
          </form>
        </section>
      </Modal>

      <Modal
        styles={`fixed z-200 top-0 left-0 w-full inset-0 bg-primary/80 flex items-center justify-center p-2.5 text-primary ${OpenSubModal ? "scale-100 animation-modal-in" : "scale-o animation-modal-out"}`}
      >
        <button
          type="button"
          className="w-12.5 h-12.5 flex items-center justify-center rounded-lg absolute top-2.5 right-0 text-white"
          onClick={() => setOpenSubModal(false)}
        >
          <CloseCircle size={32} />
        </button>
        <section className="w-full rounded-xl bg-slate-300 p-5 gap-y-6 shadow-2xl flex flex-col">
          {banks.map((bank) => {
            return (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                  <img
                    src={ProviderIcons["bri"]}
                    alt="BRI"
                    className="w-12.5 h-12.5 object-cover rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h1>{bank.name}</h1>
                    <h4>{bank.owner}</h4>
                    <h4>{bank.number}</h4>
                  </div>
                </div>
                <div
                  className="grouping relative"
                  onClick={() =>
                    setActiveMenu(ActiveMenu === bank.id ? null : bank.id)
                  }
                >
                  <div
                    className={`${ActiveMenu === bank.id ? "bg-primary text-slate-100" : "bg-transparent text-primary"} p-2.5 rounded-lg flex items-center justify-center`}
                  >
                    <MoreHorizontal size={24} />
                  </div>

                  <div
                    className={`absolute -translate-x-50 w-50 p-2.5 rounded-2xl bg-slate-100 drop-shadow-2xl ${ActiveMenu === bank.id ? "scale-100 animation-bounce" : "scale-0"}`}
                  >
                    <button
                      type="button"
                      className="w-full h-12 bg-primary text-white text-lg rounded-lg"
                    >
                      Jadikan Default
                    </button>
                    <button type="button" className="w-full h-12 text-lg">
                      Jadikan Default
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </Modal>
    </main>
  );
}
