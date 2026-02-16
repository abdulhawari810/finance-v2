import Navbar from "../components/navbar";
import Card from "../components/card";
import { getIcons } from "../utils/icons";
import { idr } from "../utils/currency";

export default function Transaction() {
  const Expense = getIcons("expense");
  return (
    <main className=" pb-27.5">
      <Navbar title="Transaction" />
      <main className="flex flex-col gap-5">
        <div className="flex items-center justify-center relative my-5">
          <div className="w-full h-px bg-primary"></div>
          <h1 className="absolute px-5  bg-secondary font-bold text-xl">
            Today
          </h1>
        </div>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <Card
          styles={
            "w-full shrink-0 bg-primary rounded-2xl snap-center flex items-center justify-between p-5 text-secondary"
          }
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-2.5 bg-red-400/10 rounded-full">
              <Expense className="text-red-400" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-slate-300 font-bold text-lg">Uang Keluar</h1>
              <span className="font-medium">Gajian</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h4 className="font-bold text-red-400">- Rp 20.000</h4>
            <span>20:50</span>
          </div>
        </Card>
        <div className="flex w-full h-20 bg-primary text-secondary rounded-2xl p-5 items-center justify-between">
          <span className="font-bold">22-02-2026</span>
          <div className="flex flex-col items-center justify-center">
            <h1>Total</h1>
            <span className="text-bold">{idr(50000)}</span>
          </div>
        </div>
      </main>
    </main>
  );
}
