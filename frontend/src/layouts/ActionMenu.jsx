// ActionMenu.jsx
import React, { useState } from 'react';
import { BsThreeDots, BsEye, BsPencil, BsGraphUp, BsXSquare } from 'react-icons/bs';

const ActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { icon: <BsEye />, text: 'View' },
    { icon: <BsPencil />, text: 'Edit' },
    { icon: <BsGraphUp />, text: 'Activity Log' },
    { icon: <BsXSquare className="text-red-500" />, text: 'Delete', isDestructive: true },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-600 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
      >
        <BsThreeDots size={20} />
      </button>

      {isOpen && (
        <div
          className="absolute right-18 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-gray-100 ring-opacity-5 focus:outline-none"
          role="menu"
        >
          <div className="py-1" role="none">
            {menuItems.map((item) => (
              <a
                key={item.text}
                href="#"
                className={`flex items-center px-4 py-2 text-sm ${
                  item.isDestructive ? 'text-red-700' : 'text-gray-700'
                } hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
              >
                <span className="mr-3">{item.icon}</span>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;