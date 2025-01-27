import React from 'react'
import dashboard_img from "../../assets/dashboard.png";

export default function Welcomecard() {
  return (
    <div className="bg-indigo-100 rounded-2xl p-8 h-full flex flex-col md:flex-row items-center justify-between">
      <div className="flex-1 mb-4 md:mb-0">
        <h3 className="text-3xl text-black font-bold mb-2">
          Welcome back <span className="inline-block">👋</span>
        </h3>
        <p className="text-2xl text-black font-bold mb-2">Jaydon Frankie</p>
        <p className="text-black text-base">
        Jaydon Frankie, this dashboard is all yours explore, manage, and succeed your way.
        </p>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-8/12">
          <img
            src={dashboard_img}
            alt="Dashboard illustration"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
