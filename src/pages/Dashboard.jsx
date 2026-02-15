import Navbar from "../components/navbar"
import Card from "../components/card"
import {getIcons} from "../utils/icons"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard(){
  const Wallet = getIcons("wallet")
  const ArrowUp = getIcons("arrowup")
  const ArrowDown = getIcons("arrowdown")
  const Expense = getIcons("expense")
  const Income = getIcons("income")
  const Transfer = getIcons("transfer")
  
  const data = [
  { month: "Jan", income: 2500000 },
  { month: "Feb", income: 3200000 },
  { month: "Mar", income: 2800000 },
  { month: "Apr", income: 4000000 },
  { month: "Mei", income: 3500000 },
  { month: "Jun", income: 4200000 },
];
  return(
    <main>
      <Navbar title={"Dashboard"}/>
      <Card styles={`flex flex-col bg-primary w-full h-auto gap-5 rounded-xl
      text-slate-300! p-5`}>
        <section className="flex items-center gap-2">
          <Wallet color="text-secondary"/>
          <h1 className="font-b text-lg">Balance</h1>
        </section>
        <section className="flex items-center gap-5 font-bold text-2xl">Rp 5.000.000</section>
        <section className="grid grid-cols-3">
          <button className="w-full flex items-center justify-center flex-col
          gap-2">
            <ArrowDown color="text-secondary"/>
            <span>Masuk</span>
          </button>
          <button className="w-full flex items-center justify-center flex-col
          gap-2">
            <ArrowUp color="text-secondary"/>
            <span>Keluar</span>
          </button>
          <button className="w-full flex items-center justify-center flex-col
          gap-2">
            <Transfer color="text-secondary"/>
            <span>Transfer</span>
          </button>
        </section>
      </Card>
      <section className="grid grid-cols-2 gap-5 my-5">
      <Card styles="flex flex-col justify-center items-center gap-2 bg-primary
      rounded-xl text-slate-300! w-full h-[100px]">
        <section className="flex items-center gap-2">
          <Expense color="text-secondary" className="rotate-180"/>
          <span>Cash In</span>
        </section>
        <span>Rp 5.000.000</span>
      </Card>
      <Card styles="flex flex-col justify-center items-center gap-2 bg-primary
      rounded-xl text-slate-300! w-full h-[100px]">
        <section className="flex items-center gap-2">
          <Expense color="text-secondary"/>
          <span>Cash Out</span>
        </section>
        <span>Rp 5.000.000</span>
      </Card>
      </section>
      
      <div className="w-full h-80 bg-white rounded-2xl shadow outline-none!
      focus:outline-none! focus:ring-0! p-4">
      <h2 className="text-lg font-semibold mb-4">
        Monthly Income
      </h2>

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
    </main>
    )
}