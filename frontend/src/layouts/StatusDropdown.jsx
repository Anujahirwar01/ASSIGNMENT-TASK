import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaEllipsisV } from 'react-icons/fa';

const statuses = {
  "Pending": "bg-yellow-400 text-black",
  "In Progress": "bg-orange-500 text-white",
  "Completed": "bg-green-500 text-white",
  "Overdue": "bg-red-600 text-white"
};

const statusOptions = Object.keys(statuses);

const ActionItemsTable = () => {
  const [actionMenuIndex, setActionMenuIndex] = useState(null);

  const actionItems = [
    {
      id: 1,
      item: "Share revised costing with the Buyer and get it approved.",
      status: "In Progress",
      dueDate: "01 May, 2025",
      assignedTo: "Mohd Saleem",
      role: "Merchandiser"
    },
    {
      id: 2,
      item: "Send fabric swatches",
      status: "Pending",
      dueDate: "01 May, 2025",
      assignedTo: "Mohd Saleem",
      role: "Merchandiser"
    },
    {
      id: 3,
      item: "Confirm delivery window",
      status: "Completed",
      dueDate: "01 May, 2025",
      assignedTo: "Mohd Saleem",
      role: "Merchandiser"
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md font-sans">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Action Items ({actionItems.length})</h2>
      <div className="">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-2 text-sm font-medium text-gray-500 uppercase">Action Items</th>
              <th className="py-3 px-2 text-sm font-medium text-gray-500 uppercase">Status</th>
              <th className="py-3 px-2 text-sm font-medium text-gray-500 uppercase">Due Date</th>
              <th className="py-3 px-2 text-sm font-medium text-gray-500 uppercase">Assigned to</th>
              <th className="py-3 px-2 text-sm font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {actionItems.map((action, index) => (
              <tr key={action.id} className="border-b text-sm text-gray-700 hover:bg-gray-50">
                <td className="py-4 px-2">{action.item}</td>
                <td className="py-4 px-2">
                  <span className={`px-3 py-1 rounded-md text-xs font-semibold ${statuses[action.status]}`}>
                    {action.status}
                  </span>
                </td>
                <td className="py-4 px-2 whitespace-nowrap">{action.dueDate}</td>
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                      {action.assignedTo[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{action.assignedTo}</div>
                      <div className="text-xs text-gray-500">{action.role}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2 relative">
                  <button
                    className="p-2 text-gray-500 hover:bg-gray-200 rounded-md"
                    onClick={() => setActionMenuIndex(actionMenuIndex === index ? null : index)}
                  >
                    <FaEllipsisV />
                  </button>
                  {actionMenuIndex === index && (
                    <div className="absolute right-4 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                      <button className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 w-full text-left text-gray-700">
                        <FaEdit /> Edit
                      </button>
                      <button className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 w-full text-left text-red-600">
                        <FaTrashAlt /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The image shows this for illustration; here it's presented cleanly below the table */}
      <p className="text-sm font-semibold text-gray-600 mb-0 mt-5">Statuses in dropdown</p>
      <div className="mt-8 ml-110">
        
        <div className="flex flex-col items-start gap-3">
          {statusOptions.map((status, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-md text-xs font-semibold ${statuses[status]}`}
            >
              {status}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionItemsTable;