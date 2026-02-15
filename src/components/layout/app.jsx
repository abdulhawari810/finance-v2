import {Outlet} from "react-router-dom"
export default function App(){
  return(
  <>
    <div className="flex-1 px-2.5 pt-[100px] pb-[110px]">
    <Outlet/>
    </div>
  </>
  )
}