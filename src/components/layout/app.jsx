import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex-1 overflow-scroll w-full inset-0 px-2.5 pt-25">
        <Outlet />
      </div>
    </>
  );
}
