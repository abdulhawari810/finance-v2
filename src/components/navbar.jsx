import { getIcons } from "../utils/icons" 
import { NavLink } from "react-router-dom"

export default function Navbar({title, icons, position, hidden}){
  
  const Dashboard = getIcons("dashboard")
  const Transaction = getIcons("transaction")
  const Analytics = getIcons("analytics")
  const Settings = getIcons("settings")
  return(
    <>
      <nav className="flex items-center justify-between bg-primary fixed top-0
      left-0 w-full h-20 px-2.5 z-50">
        <h1 className="font-b text-slate-300 text-2xl">{title}</h1>
      </nav>
      <section className="flex items-center justify-center py-5 px-2.5 w-full fixed
      bottom-0 left-0 z-50">
       <section className="w-full h-20 bg-primary rounded-full p-5 flex
       items-center justify-between gap-2.5">
         <NavLink className={({isActive}) => isActive ? `text-slate-300 flex
         flex-col items-center justify-center gap-2 font-bold text-sm` :
         `text-secondary flex flex-col items-center justify-center gap-2
         text-sm`} to={"/"}>
           <Dashboard/>
           <span>Dashboard</span>
         </NavLink>
         <NavLink className={({isActive}) => isActive ? `text-slate-300 flex
         flex-col items-center justify-center gap-2 font-bold text-sm` :
         `text-secondary flex flex-col items-center justify-center gap-2
         text-sm`} to={"/Transaction"}>
           <Transaction/>
           <span>Transaction</span>
         </NavLink>
         <NavLink className={({isActive}) => isActive ? `text-slate-300 flex
         flex-col items-center justify-center gap-2 font-bold text-sm` :
         `text-secondary flex flex-col items-center justify-center gap-2
         text-sm`} to={"/Analytics"}>
           <Analytics/>
           <span>Analytics</span>
         </NavLink>
         <NavLink className={({isActive}) => isActive ? `text-slate-300 flex
         flex-col items-center justify-center gap-2 font-bold text-sm` : `text-secondary
         flex flex-col items-center justify-center gap-2 text-sm`}
         to={"/Settings"}>
           <Settings/>
           <span>Settings</span>
         </NavLink>
       </section>
      </section>
    </>
    )
}