import React from 'react';
import profile from "../../assets/profile.png";

const Carfounder = () => {
  const users = [
    { 
      name: 'Karl Benz', 
      followers: '9.91k',
      achievementType: 'primary',
      image: profile
    },
    { 
      name: 'Henry Ford', 
      followers: '9.12k',
      achievementType: 'secondary',
      image: profile
    },
    { 
      name: 'Gottlieb Daimler', 
      followers: '1.95k',
      achievementType: 'bronze',
      image: profile
    },
    { 
      name: 'Wilhelm Maybach', 
      followers: '9.70k',
      achievementType: 'primary',
      image: profile
    },
    { 
      name: 'Enzo Ferrari', 
      followers: '10k',
      achievementType: 'secondary',
      image: profile
    },
  ];

  const getAchievementStyles = (type) => {
    switch(type) {
      case 'primary':
        return 'bg-blue-100 text-blue-600';
      case 'secondary':
        return 'bg-cyan-100 text-cyan-600';
      case 'bronze':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white border rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-6">Top Car Founders</h3>
      <div className="space-y-6">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{user.name}</span>
                <span className="text-gray-500 text-sm">{user.followers}</span>
              </div>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getAchievementStyles(user.achievementType)}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"   className="lucide lucide-trophy">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carfounder;
