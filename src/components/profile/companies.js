import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const Company = ({ name, location, status }) => (
  <div className="bg-white shadow-lg border rounded-xl p-4 h-auto flex flex-col md:flex-row items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="bg-gray-200 rounded-full flex items-center justify-center">
        <img
          src={logo}
          alt="Company Logo"
          className="w-14 h-14 object-contain"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h3 className="text-base text-black">{name}</h3>
        <div className="flex items-center justify-start">
          <FaMapMarkerAlt className="text-gray-500" />
          <span className="text-sm text-gray-600 truncate max-w-[200px]">{location}</span>
        </div>
      </div>
    </div>
    <div>
      <div
        className={`py-1 px-4 rounded-full text-sm font-semibold ${
          status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
        }`}
      >
        {status === 'active' ? 'Active' : 'Deactive'}
      </div>
    </div>
  </div>
);

export default function Companies() {
  const companies = [
    { name: 'Tesla', location: 'United States', status: 'active' },
    { name: 'Ford', location: 'Canada', status: 'active' },
    { name: 'Toyota', location: 'United Kingdom', status: 'inactive' },
    { name: 'Honda', location: 'United States', status: 'active' },
    { name: 'BMW', location: 'Canada', status: 'active' },
    { name: 'Mercedes-Benz', location: 'United Kingdom', status: 'inactive' },
    { name: 'Audi', location: 'United States', status: 'active' },
    { name: 'Chevrolet', location: 'Canada', status: 'active' },
    { name: 'Nissan', location: 'United Kingdom', status: 'inactive' },
    { name: 'Subaru', location: 'United States', status: 'active' },
    { name: 'Volkswagen', location: 'Canada', status: 'active' },
    { name: 'Hyundai', location: 'United Kingdom', status: 'inactive' },
    { name: 'Kia', location: 'United States', status: 'active' },
    { name: 'Porsche', location: 'Canada', status: 'active' },
    { name: 'Jaguar', location: 'United Kingdom', status: 'inactive' },
    { name: 'Land Rover', location: 'United States', status: 'active' },
    { name: 'Ferrari', location: 'Canada', status: 'active' },
    { name: 'Lamborghini', location: 'United Kingdom', status: 'inactive' },
    { name: 'Bugatti', location: 'United States', status: 'active' },
    { name: 'Aston Martin', location: 'Canada', status: 'active' },
  ];

  const totalItems = companies.length;
  const isLastItemTwo = totalItems % 3 === 2;
  const isLastItemOne = totalItems % 3 === 1;

  return (
    <>
      <div className="flex-1 mb-4 md:mb-0">
        <h3 className="text-2xl text-black font-bold mb-2">Companies</h3>
      </div>
      <div className="grid grid-cols-12 gap-6 pt-10">
        {companies.map((company, index) => {
          const isLastRow = index >= totalItems - 3;
          return (
            <div
              key={index}
              className={`col-span-12 md:col-span-4 ${isLastRow && isLastItemTwo ? 'last-row-two' : ''} ${isLastRow && isLastItemOne ? 'last-row-one' : ''}`}
            >
              <Company
                name={company.name}
                location={company.location}
                status={company.status}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
