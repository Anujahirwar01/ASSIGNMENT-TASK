import React, { useState, useRef, useEffect } from 'react';
import { FaBell, FaCommentDots, FaUser, FaCog, FaSignOutAlt, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';


const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const notificationRef = useRef(null);
  const messageRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (messageRef.current && !messageRef.current.contains(event.target)) {
        setShowMessages(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Sample data for notifications
  const notifications = [
    {
      id: 1,
      type: 'task',
      title: 'Task completed',
      description: '[task_name] marked as completed..',
      time: '10 mins ago',
      avatar: 'https://plus.unsplash.com/premium_photo-1752236571299-2984719c281d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="35" r="15" fill="%23666"/%3E%3Cpath d="M20 80 Q20 65 35 65 h30 Q80 65 80 80" fill="%23666"/%3E%3C/svg%3E'
    },
    {
      id: 2,
      type: 'meeting',
      title: 'Meeting Created',
      description: 'New meeting [meeting_title] is created for [date_time]',
      time: '5 mins ago',
      icon: 'calendar'
    },
    {
      id: 3,
      type: 'action',
      title: 'Action Item Added',
      description: '[action_item_name] is added in meeting [meeting_title]',
      time: '22 May 2025',
      icon: 'calendar'
    },
    {
      id: 4,
      type: 'task',
      title: 'Task assigned',
      description: '[task_name] has been assigned to [user_name].',
      time: '2 hours ago',
      avatar: 'https://plus.unsplash.com/premium_photo-1752236571299-2984719c281d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="35" r="15" fill="%23666"/%3E%3Cpath d="M20 80 Q20 65 35 65 h30 Q80 65 80 80" fill="%23666"/%3E%3C/svg%3E'
    }
  ];

  // Sample data for messages
  const messages = [
    {
      id: 1,
      title: 'New Message',
      description: 'You have a new messages from [user_name]',
      time: '10 mins ago',
      avatar: 'https://plus.unsplash.com/premium_photo-1752236571299-2984719c281d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="35" r="15" fill="%23666"/%3E%3Cpath d="M20 80 Q20 65 35 65 h30 Q80 65 80 80" fill="%23666"/%3E%3C/svg%3E'
    },
    {
      id: 2,
      title: 'New Message',
      description: 'You have a new messages from [user_name]',
      time: '10 mins ago',
      avatar: 'https://plus.unsplash.com/premium_photo-1752236571299-2984719c281d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="35" r="15" fill="%23666"/%3E%3Cpath d="M20 80 Q20 65 35 65 h30 Q80 65 80 80" fill="%23666"/%3E%3C/svg%3E'
    },
    {
      id: 3,
      title: 'New Message',
      description: 'You have a new messages from [user_name]',
      time: '10 mins ago',
      avatar: 'https://plus.unsplash.com/premium_photo-1752236571299-2984719c281d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="35" r="15" fill="%23666"/%3E%3Cpath d="M20 80 Q20 65 35 65 h30 Q80 65 80 80" fill="%23666"/%3E%3C/svg%3E'
    },
    {
      id: 4,
      title: 'New Message',
      description: 'You have a new messages from [user_name]',
      time: '10 mins ago',
      avatar: 'https://plus.unsplash.com/premium_photo-1752236571299-2984719c281d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="35" r="15" fill="%23666"/%3E%3Cpath d="M20 80 Q20 65 35 65 h30 Q80 65 80 80" fill="%23666"/%3E%3C/svg%3E'
    }
  ];

  return (
    <header className="bg-white text-gray-800 p-4 shadow-md flex items-center justify-between flex-shrink-0 z-10">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="bg-gray-800 text-white rounded-lg p-2 flex items-center">
            <span className="font-bold text-lg">ADAM EXPORTS</span>
          </div>
        </div>
        <button className="text-gray-500 ml-40 hover:text-gray-800 focus:outline-none">
          <IoMenu size={24} />
        </button>
      </div>
      
      <div className="flex-grow mx-4">
        <div className="relative w-1/2 left-15">
          <input
            type="text"
            placeholder="Search anything here..."
            className="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4 relative">
        {/* Messages Dropdown */}
        <div className="relative mr-10" ref={messageRef}>
    <button 
      className="text-gray-400 hover:text-gray-800 focus:outline-none"
      onClick={() => {
        setShowMessages(!showMessages);
        setShowNotifications(false);
        setShowProfile(false);
      }}
    >
      <FaCommentDots size={20} />
    </button>
    <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      10
    </div>
    
    {showMessages && (
      <div className="absolute right-0 mt-2 w-100 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Chat</h3>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">5 new</span>
        </div>
        {/* The main changes are in this div and its children */}
        <div>
          {messages.map((message) => (
            <div key={message.id} className="p-3 border-b border-gray-100 hover:bg-gray-50 flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <img 
                  src={message.avatar} 
                  alt="User" 
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="text-sm mr-46 font-medium text-gray-800">{message.title}</h4>
                  <p className="text-sm text-gray-600 ">
                    {message.description.split(/(\[.*?\])/).map((part, index) =>
                      part.startsWith('[') && part.endsWith(']') ? (
                        <span key={index} className="text-blue-500">{part}</span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                  <span className="text-xs mr-52 text-gray-500">{message.time}</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <FaTimes size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className="p-4">
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
            View All
          </button>
        </div>
      </div>
    )}
</div>

        {/* Notifications Dropdown */}
        <div className="relative mr-10" ref={notificationRef}>
    <button 
      className="text-gray-400 hover:text-gray-800 focus:outline-none"
      onClick={() => {
        setShowNotifications(!showNotifications);
        setShowMessages(false);
        setShowProfile(false);
      }}
    >
      <FaBell size={20} />
    </button>
    <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      10
    </div>
    
    {showNotifications && (
      <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">5 new</span>
        </div>
        <div>
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 flex items-start justify-between">
              <div className="flex items-center space-x-3">
                {notification.avatar ? (
                  <img 
                    src={notification.avatar} 
                    alt="User" 
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <FaCalendarAlt className="text-gray-600 text-lg" />
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-gray-800">{notification.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {notification.description.split(/(\[.*?\])/).map((part, index) =>
                      part.startsWith('[') && part.endsWith(']') ? (
                        <span key={index} className="text-blue-500">{part}</span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <FaTimes size={16} />
              </button>
            </div>
          ))}
        </div>
        <div className="p-4">
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
            View All
          </button>
        </div>
      </div>
    )}
</div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <div 
            className="flex items-center mr-7 space-x-3 cursor-pointer"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
              setShowMessages(false);
            }}
          >
           
            <div className="w-10 h-10 rounded-full bg-gray-400 overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_photo-1752236571299-2984719c281d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='15' fill='%23666'/%3E%3Cpath d='M20 80 Q20 65 35 65 h30 Q80 65 80 80' fill='%23666'/%3E%3C/svg%3E" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
             <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-gray-800">Mohd Saleem</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
          </div>
          
          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="py-2">
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
                  <FaUser className="text-gray-500" />
                  <span>Profile</span>
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
                  <FaCog className="text-gray-500" />
                  <span>Settings</span>
                </button>
                <hr className="my-2" />
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
                  <FaSignOutAlt className="text-gray-500" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;