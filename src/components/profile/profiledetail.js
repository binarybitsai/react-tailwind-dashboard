import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function ProfileDetail() {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-6">
          <h3 className="text-lg mb-4">About me</h3>
          <div className="space-y-2">
            <p className="text-base text-gray-600">
              Greetings, fellow software enthusiasts! I'm thrilled to see your interest in exploring my profile. I'm Christian Mayo, a 24-year-old software engineer from the United Kingdom. My educational path led me to earn a Bachelor's Degree in Computer Science, specializing in Software Engineering. With this qualification, I'm equipped to dive into the world of coding and development, ready to tackle exciting projects and contribute to cutting-edge technological advancement.
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-6">
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-base text-gray-600">Full Name</p>
              <span className="text-indigo-400">Jaydon Frankie</span>
            </div>
            <div>
              <p className="text-base text-gray-600">Email Address</p>
              <span className="text-indigo-400">jaydonfrankie@gmail.com</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-base text-gray-600">Phone</p>
              <span className="text-indigo-400">+1234567890</span>
            </div>
            <div>
              <p className="text-base text-gray-600">Location</p>
              <span className="text-indigo-400">United States</span>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4">
            <div>
              <p className="text-base text-gray-600">Social Media</p>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href=" https://www.facebook.com/caitlynkerluke" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600 border-2 border-indigo-200 rounded-full px-2 py-2">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/caitlynkerluke" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 border-2 border-pink-200 rounded-full px-2 py-2">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/caitlynkerluke" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600 border-2 border-indigo-200 rounded-full px-2 py-2">
                <FaLinkedinIn />
              </a>
              <a href="https://www.twitter.com/caitlynkerluke" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600 border-2 border-indigo-200 rounded-full px-2 py-2">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
