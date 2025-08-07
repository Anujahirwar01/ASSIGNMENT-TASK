import React from 'react';
import {
  FaTachometerAlt, FaTasks, FaCalendarAlt, FaSearch, FaCalculator, FaClipboardList, FaBox, FaUser,
  FaUsers, FaTruck, FaChartLine, FaFileInvoiceDollar, FaFileAlt, FaDatabase, FaCog,
  FaWarehouse, FaRegListAlt, FaExpandAlt, FaChevronRight, FaShoppingBag, FaBell, FaCommentDots
} from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
          { name: 'Dashboard', icon: FaTachometerAlt, active: false },
          { name: 'Tasks', icon: FaTasks, active: false },
          { name: 'Buyer Meeting', icon: FaCalendarAlt, active: true },
          { name: 'Quick Costing', icon: FaCalculator, active: false },
          { name: 'Pre Order Costing', icon: FaCalculator, active: false },
          { name: 'Style Library', icon: FaRegListAlt, active: false },
          { name: 'Requisitions', icon: FaClipboardList, active: false, expandable: true },
          { name: 'Buyer Purchase', icon: FaShoppingBag, active: false, expandable: true },
          { name: 'Inventory', icon: FaWarehouse, active: false, expandable: true },
          { name: 'Sample Development', icon: FaExpandAlt, active: false, expandable: true },
          { name: 'Production', icon: FaBox, active: false, expandable: true },
          { name: 'Master Admin', icon: FaUser, active: false, expandable: true },
          { name: 'Users', icon: FaUsers, active: false, expandable: true },
          { name: 'Suppliers', icon: FaTruck, active: false },
          { name: 'Showroom', icon: FaWarehouse, active: false },
          { name: 'Shipment', icon: FaTruck, active: false },
          { name: 'KPI\'s', icon: FaChartLine, active: false, expandable: true },
          { name: 'E-Invoice / E-Way Bill', icon: FaFileInvoiceDollar, active: false },
          { name: 'Reports', icon: FaFileAlt, active: false },
          { name: 'Master Data', icon: FaDatabase, active: false, expandable: true },
          { name: 'Settings', icon: FaCog, active: false, expandable: true },
      ];
  

  return (
    <nav className="bg-white w-80 shadow-lg flex-shrink-0 ">
                    <div className="p-4">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={item.name}
                                    className={`flex items-center justify-between p-4 rounded-4xl my-2  cursor-pointer transition-colors duration-200 
                                      ${item.active ? 'bg-purple-100 text-purple-500 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <IconComponent size={20} />
                                        <span className="text-sm">{item.name}</span>
                                    </div>
                                    {item.expandable && <FaChevronRight size={12} className="text-gray-400" />}
                                </div>
                            );
                        })}
                    </div>
                </nav>
  );
};

export default Navbar;