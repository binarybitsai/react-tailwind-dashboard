import React from 'react';
import Sidebar from '../components/sidebar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UserNavbar from "../components/usernavbar";

export default function Main() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  return (
    <div className="flex flex-1 absolute inset-0 z-50">
    <Sidebar />
    <div className="flex flex-col h-screen w-full">
      <UserNavbar/>
      <main className="flex-1 overflow-y-auto">
        <Outlet/>
        {isMainPage}
      </main>
    </div>
    </div>
  )
}
