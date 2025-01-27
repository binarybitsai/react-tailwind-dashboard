import React, { useState } from 'react';
import { FaUser, FaBuilding } from 'react-icons/fa';
import profile_img from "../assets/profile.png";
import Profiledetail from './profile/profiledetail';
import Companies from './profile/companies';
import Footer from "./footer";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <>
    <div className="p-6">
      <div className="relative overflow-hidden rounded-2xl border shadow-sm">
        <div className="h-36 bg-indigo-100 relative"></div>
        <div className="bg-white px-6">
          <div className="flex items-center gap-6">
            <div className="relative -mt-20">
              <div className="w-24 h-24 rounded-full border-2 border-white bg-gray-100 shadow-lg overflow-hidden">
                <img
                  src={profile_img}
                  alt="Profile"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative -mt-20">
              <h1 className="text-2xl font-semibold text-gray-900">Jaydon Frankie</h1>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
          <div className="flex justify-end">
            <TabButton
              label="Profile"
              icon={<FaUser size={18} />}
              active={activeTab === "Profile"}
              onClick={() => setActiveTab("Profile")}
            />
            <TabButton
              label="Companies"
              icon={<FaBuilding size={18} />}
              active={activeTab === "Companies"}
              onClick={() => setActiveTab("Companies")}
            />
          </div>

          {/* Tab content */}

        </div>
      </div>
      <div className="mt-6">
           
               {activeTab === "Profile" && (
               <Profiledetail/>
            )}
            {activeTab === "Companies" && (
              <div>
               <Companies/>
              </div>
            )}
           
          </div>
    </div>
    <Footer/>
    </>
  );
};

// Tab button component
const TabButton = ({ label, icon, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${active
          ? "border-blue-500 text-blue-500"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Profile;
