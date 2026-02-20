import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/custom.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/layout/app.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Transaction from "./pages/Transaction.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";
import { registerSW } from "virtual:pwa-register";

registerSW();

// sub pages
import Wallet from "./pages/subpages/Wallet.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/Transaction",
        element: <Transaction />,
      },
      {
        path: "/Analytics",
        element: <Analytics />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
      {
        path: "/Settings/Wallet",
        element: <Wallet />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
