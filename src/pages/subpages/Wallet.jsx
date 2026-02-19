import Navbar from "../../components/navbar";
import Modal from "../../components/modal";
import SelectForm from "../../components/select";

import { ArrowLeft, CloseCircle, PlusCircle } from "griddy-icons";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Wallet() {
  const [OpenModal, setOpenModal] = useState(false);
  const [TypeModal, setTypeModal] = useState("");

  const nav = useNavigate();

  const [type, setType] = useState(null);
  const [provider, setProvider] = useState(null);
  const [Fullname, setFullname] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [Amount, setAmount] = useState(0);

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

    const formInput = {
      fullname: Fullname,
      card_number: cardNumber,
      balance: Amount,
      type,
      provider,
      is_active: true,
      is_default: existingAccount ? true : false,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("accounts", JSON.stringify(formInput));

    toast.success("Wallet Added Succesfully");
    setOpenModal(false);
    setTypeModal("");
    setType(null);
    setProvider(null);
    setFullname("");
    setCardNumber(0);
    setAmount(0);
  };
  return (
    <>
      <Navbar
        title="My Wallet"
        hidden={true}
        position={"left"}
        icons={
          <ArrowLeft
            className="absolute left-2.5"
            size={32}
            onClick={() => nav(-1)}
          />
        }
      />
      <main>
        <section
          className="w-full flex items-center justify-between p-5 rounded-2xl bg-primary text-secondary h-24"
          onClick={() => {
            setOpenModal(true);
            setTypeModal("add_wallet");
          }}
        >
          <h1>Add New Wallet</h1>
          <PlusCircle size={24} />
        </section>
      </main>
      <Modal
        styles={`fixed top-0 left-0 bg-primary/50 p-5 w-full inset-0 z-50 ${OpenModal && TypeModal === "add_wallet" ? "scale-100 animation-modal-in" : "animation-modal-out scale-0"}`}
        isOpen={!OpenModal}
      >
        <form
          className="w-full relative p-5 bg-slate-300 h-full rounded-2xl overflow-y-scroll"
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
    </>
  );
}
