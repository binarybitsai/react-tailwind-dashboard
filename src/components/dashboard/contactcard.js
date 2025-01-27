import React from 'react';
import { MdArrowForward } from 'react-icons/md';

export default function Contactcard() {
    const contacts = [
    {
        name: "Melanie Noble",
        email: "luella.ryan33@gmail.com",
        avatar: "🧑"
    },
    {
        name: "Chase Day",
        email: "joana.simonis84@gmail.com",
        avatar: "😎"
    },
    {
        name: "Shawn Manning",
        email: "marjolaine.white94@gmail.com",
        avatar: "🧑"
    }
    ];
  return (
    <div className="bg-gray-100 rounded-2xl p-6 h-full shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold">Company Contacts</h3>
      <button className="text-gray-600 hover:text-gray-800 flex items-center">
        View all <MdArrowForward className="ml-2" />
      </button>
    </div>
    <div className="space-y-4">
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
            {contact.avatar}
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900">{contact.name}</div>
            <div className="text-sm text-gray-500">{contact.email}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
