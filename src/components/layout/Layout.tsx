import { Outlet } from "react-router-dom"
import Sidebar from './Sidebar'

export default function Layout() {
    return (
    <div className="min-h-screen bg-[#f2f2f0] dark:bg-[#1a1d21] flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}