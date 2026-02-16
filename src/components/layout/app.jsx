import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      <div className="flex-1 overflow-scroll w-full inset-0 px-2.5 pt-25">
        <Outlet />
      </div>
    </>
  );
}
