import React, { useState, useEffect } from "react";
import { IoNotifications,  IoClose, IoPerson, IoHome, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import profile_img from "../assets/profile.png";
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { GoScreenFull } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

export default function UserNavbar() {
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationSidebarOpen, setIsNotificationSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotificationSidebar = () => {
    setIsNotificationSidebarOpen(!isNotificationSidebarOpen);
  };
  const [showAll, setShowAll] = useState(false);
  const notifications = [
    {
      name: "Deja Brady",
      action: "sent you a friend request",
      time: "an hour",
      category: "Communication",
      type: "request"
    },
    {
      name: "Marcus Chen",
      action: "liked your post",
      time: "2 hours",
      category: "Social",
      type: "like"
    },
    {
      name: "Sarah Wilson",
      action: "commented on your photo",
      time: "3 hours",
      category: "Social",
      type: "comment"
    },
    {
      name: "Alex Thompson",
      action: "shared your post",
      time: "4 hours",
      category: "Social",
      type: "share"
    }
  ];
  const displayedNotifications = showAll ? notifications : notifications.slice(0, 3);

  const styles = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .notification-sidebar {
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
      scroll-behavior: smooth;
    }

    .notification-sidebar::-webkit-scrollbar {
      width: 0;
    }

    .notification-sidebar::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  `;
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  };
  return (
    <>
      <style>{styles}</style>

      <nav aria-label="Global" className="flex items-center h-16 justify-between px-6 bg-transparent rounded-lg">
        <div className="relative hidden md:block  items-center space-x-2">
          <h3 className="text-2xl text-black">{greeting}, Jaydon Frankie</h3>
        </div>
        <div className="flex items-center ml-auto space-x-2">
          <div className="relative hidden md:block">
            <IoSearch className="absolute left-3 top-3 text-gray-500" />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="relative flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer" onClick={toggleFullScreen}>
            <GoScreenFull className="text-2xl text-black" />
          </div>
          <div className="relative flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer" onClick={toggleNotificationSidebar}>
            <IoNotifications className="text-2xl text-gray-500" />
            <span className="absolute -top-1 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
              4
            </span>
          </div>

          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-300 cursor-pointer" onClick={toggleSidebar}>
            <img src={profile_img} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </nav>

      {/* Profile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        >
          <div
            className="fixed top-0 right-0 h-full w-9/12 md:w-3/12 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between p-4">
              <button
                onClick={toggleSidebar}
                className="text-gray-500 hover:text-gray-800"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>
            <div className="flex flex-col items-center p-4 border-b border-dashed border-indigo-300">
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center">
                <div
                  className="absolute inset-0 w-full h-full rounded-full border border-transparent border-t-indigo-500 border-r-indigo-500"
                  style={{
                    borderWidth: "1px",
                    animation: "spin 3s linear infinite",
                  }}
                ></div>
                <img
                  src={profile_img}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover z-10"
                />
              </div>
              <h3 className="text-lg font-semibold mt-2">John Doe</h3>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
            </div>
            <ul className="p-4 space-y-4">
              <li>
                <Link
                  to=""
                  className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
                >
                  <IoHome className="mr-2 text-lg" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="profile"
                  className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
                >
                  <IoPerson className="mr-2 text-lg" />
                  Profile
                </Link>
              </li>
              <div className="absolute bottom-6 left-6 right-6">
                <button
                  onClick={handleLogout}
                  className="w-full py-2.5 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors text-lg font-medium"
                >
                  Logout
                </button>

              </div>
            </ul>
          </div>
        </div>
      )}

      {/* Notification Sidebar */}
      {isNotificationSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleNotificationSidebar}>
          <div
            className="fixed top-0 right-0 h-full w-10/12 md:w-3/12 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <div className="flex items-center justify-between p-4">
                <button
                  onClick={toggleNotificationSidebar}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <IoClose className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-4 py-2 bg-gray-300">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 p-1 rounded-lg">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-white rounded-md data-[state=active]:py-2"
                  >
                    All
                    <span className="ml-1.5 bg-gray-200 px-1.5 py-0.5 rounded text-xs">22</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="unread"
                    className="data-[state=active]:bg-white rounded-md data-[state=active]:py-2"
                  >
                    Unread
                    <span className="ml-1.5 bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded text-xs">12</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Notification List */}
            <div className="notification-sidebar h-[calc(100vh-120px)]">
              {/* Friend Request */}
              <div className="max-w-xl">
                {displayedNotifications.map((notification, index) => (
                  <div key={index} className="p-4 border-b hover:bg-gray-50">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-1">
                          <span className="font-medium">{notification.name}</span>
                          <span className="text-gray-600">{notification.action}</span>
                        </div>
                        <div className="text-sm text-gray-500 mb-2">{notification.time} · {notification.category}</div>
                        {notification.type === "request" && (
                          <div className="flex gap-2">
                            <button className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-800">
                              Accept
                            </button>
                            <button className="px-4 py-1.5 bg-gray-100 text-gray-900 rounded-full text-sm hover:bg-gray-200">
                              Decline
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    </div>
                  </div>
                ))}

                {!showAll && (
                  <button
                    onClick={() => setShowAll(true)}
                    className="w-full py-2 text-sm text-gray-600 hover:bg-gray-50"
                  >
                    View All
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}