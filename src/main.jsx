import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/custom.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './components/layout/app.jsx'
import Dashboard from "./pages/Dashboard.jsx"
import Transaction from "./pages/Transaction.jsx"
import Analytics from "./pages/Analytics.jsx"
import Settings from "./pages/Settings.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/Transaction",
        element: <Transaction/>
      },
      {
        path: "/Analytics",
        element: <Analytics/>
      },
      {
        path: "/Settings",
        element: <Settings/>
      },
      ]
  }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
