import Navbar from "../../components/navbar";
import Modal from "../../components/modal";
import SelectForm from "../../components/select";

import { v4 as uuidv4 } from "uuid";

import { ProviderIcons } from "../../utils/icons";
import { getImagesBank } from "../../utils/image";

import {
  ArrowLeft,
  ChevronLeft,
  CloseCircle,
  MoreHorizontal,
  PlusCircle,
} from "griddy-icons";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Wallet() {
  const [OpenModal, setOpenModal] = useState(false);
  const [TypeModal, setTypeModal] = useState("");

  const [ActiveMenu, setActiveMenu] = useState(null);

  const nav = useNavigate();

  const [type, setType] = useState(null);
  const [provider, setProvider] = useState(null);
  const [Fullname, setFullname] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [Amount, setAmount] = useState(0);

  const [Accounts, setAccounts] = useState(
    JSON.parse(localStorage.getItem("accounts")) || [],
  );

  const typeOptions = [
    { value: "bank", label: "Bank Indonesia" },
    { value: "e-wallet", label: "E-Wallet" },
    { value: "debit", label: "Debit Card" },
  ];

  const providerOptions = {
    bank: [
      { value: "bca", label: "BCA" },
      { value: "bni", label: "BNI" },
      { value: "mandiri", label: "Mandiri" },
    ],
    "e-wallet": [
      { value: "ovo", label: "OVO" },
      { value: "gopay", label: "GoPay" },
      { value: "dana", label: "DANA" },
    ],
    debit: [
      { value: "visa", label: "Visa" },
      { value: "mastercard", label: "Mastercard" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingAccount = JSON.parse(localStorage.getItem("accounts")) || [];

    if (Fullname === "") return toast.error("Fullname is required!");
    if (type === null) return toast.error("Type Bank is required!");
    if (provider === null) return toast.error("Provider Name is required!");
    if (cardNumber === 0) return toast.error("Card Number is required!");

    const existing = existingAccount?.find(
      (item) =>
        item.fullname === Fullname &&
        item.card_number === cardNumber &&
        item.provider.value === provider.value &&
        item.type.value === type.value,
    );

    if (existing) return toast.error("Rekening ini sudah ditambahkan!");

    const isDefault = existingAccount?.length === 0 ? true : false;

    const formInput = {
      id: uuidv4(),
      fullname: Fullname,
      card_number: cardNumber,
      balance: Amount,
      type,
      provider,
      is_active: true,
      is_default: isDefault,
      createdAt: new Date().toISOString(),
    };
    const updateAccounts = [...existingAccount, formInput];
    localStorage.setItem("accounts", JSON.stringify(updateAccounts));
    setAccounts(updateAccounts);
    toast.success("Wallet Added Succesfully");
    setOpenModal(false);
    setTypeModal("");
    setType(null);
    setProvider(null);
    setFullname("");
    setCardNumber(0);
    setAmount(0);
  };

  const handlePaymentDefault = (id) => {
    const existingAccount = JSON.parse(localStorage.getItem("accounts")) || [];

    const updateData = existingAccount?.map((item) => ({
      ...item,
      is_default: item.id === id,
    }));

    localStorage.setItem("accounts", JSON.stringify(updateData));
    setAccounts(updateData);
  };

  const handlePaymentActive = (id) => {
    const existingAccount = JSON.parse(localStorage.getItem("accounts")) || [];

    const updateData = existingAccount?.map((item) =>
      item.id === id
        ? {
            ...item,
            is_active: !item.is_active,
          }
        : item,
    );

    localStorage.setItem("accounts", JSON.stringify(updateData));
    setAccounts(updateData);
  };
  // console.log(Accounts);
  return (
    <main className="w-full h-screen">
      <Navbar
        title="My Wallet"
        hidden={true}
        position={"left"}
        icons={
          <ChevronLeft
            className="absolute left-2.5"
            size={24}
            onClick={() => nav(-1)}
          />
        }
      />
      <main className="flex-1 inset-0 gap-5">
        <section
          className="w-full mb-5 flex items-center justify-between p-5 rounded-2xl bg-primary text-slate-100 h-24"
          onClick={() => {
            setOpenModal(true);
            setTypeModal("add_wallet");
          }}
        >
          <h1 className="text-lg font-b">Add New Wallet</h1>
          <PlusCircle size={24} />
        </section>
        <section className="flex flex-col gap-5">
          {Array.isArray(Accounts) &&
            Accounts.map((item, i) => {
              return (
                <section
                  className="w-full bg-primary rounded-xl text-slate-300 p-4 flex items-center justify-between"
                  key={item.id}
                >
                  <div className="flex items-center gap-6 w-[90%]">
                    <img
                      src={getImagesBank(item.type.value, item.provider.value)}
                      alt="BRI"
                      className="w-12.5 h-12.5 object-cover rounded-xl"
                    />
                    <div className="flex flex-col w-full gap-2">
                      <h1 className="font-b text-lg">
                        {item.provider.label} {item.type.label}
                      </h1>
                      <h4 className="font-m text-md truncate w-[70%]">
                        {item.fullname}
                      </h4>
                      <h4 className="font-m text-md">{item.card_number}</h4>
                    </div>
                  </div>
                  <div
                    className="grouping relative"
                    onClick={() =>
                      setActiveMenu(ActiveMenu === item.id ? null : item.id)
                    }
                  >
                    <div
                      className={`${ActiveMenu === item.id ? "bg-slate-100 text-primary" : "bg-transparent text-slate-100"} p-2.5 rounded-lg flex items-center justify-center`}
                    >
                      <MoreHorizontal size={24} />
                    </div>

                    <div
                      className={`absolute right-0 top-16 w-50 p-2.5 z-50 gap-3 flex flex-col rounded-2xl text-primary/80 bg-slate-100 drop-shadow-2xl ${ActiveMenu === item.id ? "scale-100 animation-bounce" : "scale-0"}`}
                    >
                      <button
                        type="button"
                        className={`w-full h-12 ${item.is_active ? "bg-primary text-white" : "bg-slate-100 text-primary"} text-lg rounded-lg`}
                        onClick={() => handlePaymentActive(item.id)}
                      >
                        {item.is_active ? "Aktif" : "Tidak Aktif"}
                      </button>
                      <button
                        type="button"
                        className={`w-full h-12 text-lg ${item.is_default ? "bg-primary text-white" : "bg-slate-100 text-primary"} rounded-lg`}
                        onClick={() => handlePaymentDefault(item.id)}
                      >
                        Jadikan Default
                      </button>
                    </div>
                  </div>
                </section>
              );
            })}
        </section>
      </main>
      <Modal
        styles={`fixed top-0 left-0 bg-primary/50 p-5 w-full inset-0 z-50 ${OpenModal && TypeModal === "add_wallet" ? "scale-100 animation-modal-in" : "animation-modal-out scale-0"}`}
        isOpen={!OpenModal}
      >
        <form
          className="w-full relative p-5 bg-slate-300 rounded-2xl overflow-y-scroll"
          onSubmit={handleSubmit}
        >
          <h1 className="font-b text-2xl text-center">Add new wallet</h1>
          <CloseCircle
            className="absolute top-5 right-5"
            onClick={() => {
              setOpenModal(false);
              setTypeModal("");
              setType(null);
              setProvider(null);
              setFullname("");
              setCardNumber(0);
              setAmount(0);
            }}
          />
          <div className="relative mt-8 w-full flex items-center justify-center rounded-lg">
            <input
              type="text"
              placeholder=" "
              id="setAmount"
              value={Fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full h-16 outline outline-slate-600 rounded-lg px-5 peer focus:outline-primary not-placeholder-shown:outline-primary text-lg font-m"
            />
            <label
              htmlFor="fullname"
              className="absolute left-5 text-lg font-m peer-focus:text-sm peer-focus:-translate-y-8 peer-focus:bg-slate-300 peer-focus:px-2 peer-focus:left-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:-translate-y-8 peer-not-placeholder-shown:bg-slate-300 peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:left-2"
            >
              Full Name
            </label>
          </div>

          <SelectForm
            title="Select Type"
            options={typeOptions}
            value={type}
            onChange={(selected) => {
              setType(selected);
              setProvider(null); // reset provider saat type berubah
            }}
          />

          <SelectForm
            title="Select Provider Name"
            options={type ? providerOptions[type.value] : []}
            value={provider}
            onChange={setProvider}
            isDisabled={!type}
          />

          <div className="relative mt-8 w-full flex items-center justify-center rounded-lg">
            <input
              type="number"
              placeholder=" "
              value={cardNumber}
              onChange={(e) => setCardNumber(Number(e.target.value))}
              id="card_number"
              className="w-full h-16 outline outline-slate-600 rounded-lg px-5 peer focus:outline-primary not-placeholder-shown:outline-primary text-lg font-m"
            />
            <label
              htmlFor="card_number"
              className="absolute left-5 text-lg font-m peer-focus:text-sm peer-focus:-translate-y-8 peer-focus:bg-slate-300 peer-focus:px-2 peer-focus:left-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:-translate-y-8 peer-not-placeholder-shown:bg-slate-300 peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:left-2"
            >
              Card Number
            </label>
          </div>

          <div className="relative mt-8 w-full flex items-center justify-center rounded-lg">
            <input
              type="number"
              placeholder=" "
              id="balance"
              value={0 + Amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-16 outline outline-slate-600 rounded-lg px-5 peer focus:outline-primary not-placeholder-shown:outline-primary text-lg font-m"
            />
            <label
              htmlFor="balance"
              className="absolute left-5 text-lg font-m peer-focus:text-sm peer-focus:-translate-y-8 peer-focus:bg-slate-300 peer-focus:px-2 peer-focus:left-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:-translate-y-8 peer-not-placeholder-shown:bg-slate-300 peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:left-2"
            >
              Amounnt
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg h-16 flex items-center justify-center text-slate-300  font-bold text-lg mt-5 bg-primary"
          >
            <span>Add Wallet</span>
          </button>
        </form>
      </Modal>
    </main>
  );
}
