import React from 'react';
import germany from "../../assets/germany.png";
import england from "../../assets/united-kingdom.png";
import france from "../../assets/france.png";
import korean from "../../assets/south-korea.png";
import usa from "../../assets/united-states.png";

export default function Totalcountries() {
    const countries = [
        { name: 'Germany', logo: germany, production: '4,500,000' },
        { name: 'England', logo: england, production: '1,300,000' },
        { name: 'France', logo: france, production: '1,500,000' },
        { name: 'Korean', logo: korean, production: '3,500,000' },
        { name: 'USA', logo: usa, production: '10,000,000' },
      ]      
  return (
    <div className="chart-container bg-white border rounded-2xl p-6 h-full shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Top Production Countries</h3>
      </div>
      <div>
        {countries.map((country, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src={country.logo} alt={country.name} className="w-10 h-10 mr-4" />
              <span className="font-medium">{country.name}</span>
            </div>
            <span className="font-medium">{country.production}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
