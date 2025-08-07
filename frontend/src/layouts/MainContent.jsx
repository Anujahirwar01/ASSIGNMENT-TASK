import React, { useState } from "react";
import { MdAdd, MdArrowUpward, MdArrowDownward} from "react-icons/md";
import { FaFileExport, FaSearch , FaSort   } from "react-icons/fa";
// import { BsThreeDots } from "react-icons/bs";
import ActionItemsTable from "./StatusDropdown";
import ActionMenu from "./ActionMenu";

const meetings = [
    { 
        id: 1, 
        date: "01 May, 2025 at 2pm", 
        status: "Completed", 
        type: "Online", 
        buyer: "Mango Private Limited", 
        brand: "Mango", 
        dept: "Design", 
        title: "Costing Discussion with Zara", 
        meetingDate: "01 May, 2025 at 2pm", 
        participants: "Mohd Saleem +2", 
        participantList: [
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
    { 
        id: 2, 
        date: "02 May, 2025 at 3pm", 
        status: "Upcoming", 
        type: "Offline", 
        buyer: "Cherry Innovations", 
        brand: "Cherry", 
        dept: "Development", 
        title: "UI/UX Review", 
        meetingDate: "02 May, 2025 at 3pm", 
        participants: "Mohd Saleem +2",
        participantList: [
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
    { 
        id: 3, 
        date: "03 May, 2025 at 10am", 
        status: "Follow-up", 
        count: 3, 
        type: "Offline", 
        buyer: "Pineapple Inc.", 
        brand: "Pineapple", 
        dept: "Marketing", 
        title: "Campaign Strategy", 
        meetingDate: "03 May, 2025 at 10am", 
        participants: "Mohd Saleem +2",
        participantList: [
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
    { 
        id: 4, 
        date: "04 May, 2025 at 1pm", 
        status: "Re-scheduled", 
        type: "Offline", 
        buyer: "Peach Corp.", 
        brand: "Peach", 
        dept: "Finance", 
        title: "Budget Review", 
        meetingDate: "04 May, 2025 at 1pm", 
        participants: "Mohd Saleem +2",
        participantList: [
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
    { 
        id: 5, 
        date: "05 May, 2025 at 4pm", 
        status: "Overdue", 
        type: "Online", 
        buyer: "Banana Solutions", 
        brand: "Banana", 
        dept: "Product", 
        title: "Feature Prioritization", 
        meetingDate: "05 May, 2025 at 4pm", 
        participants: "Mohd Saleem +2",
        participantList: [
           { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
    { 
        id: 6, 
        date: "06 May, 2025 at 11am", 
        status: "In Progress", 
        count: 1, 
        type: "Online", 
        buyer: "Coconut Group", 
        brand: "Coconut", 
        dept: "Support", 
        title: "Customer Feedback", 
        meetingDate: "06 May, 2025 at 11am", 
        participants: "Mohd Saleem +2",
        participantList: [
           { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
    { 
        id: 7, 
        date: "07 May, 2025 at 2pm", 
        status: "Ongoing", 
        type: "Online", 
        buyer: "Lemon Technologies", 
        brand: "Lemon", 
        dept: "Sales", 
        title: "Sales Strategy", 
        meetingDate: "07 May, 2025 at 2pm", 
        participants: "Mohd Saleem +2",
        participantList: [
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
    { 
        id: 8, 
        date: "08 May, 2025 at 9am", 
        status: "Completed", 
        type: "Offline", 
        buyer: "Grapefruit LLC", 
        brand: "Grapefruit", 
        dept: "Research", 
        title: "Market Analysis", 
        meetingDate: "08 May, 2025 at 9am", 
        participants: "Mohd Saleem +2",
        participantList: [
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
    { 
        id: 9, 
        date: "09 May, 2025 at 3pm", 
        status: "Draft", 
        type: "Offline", 
        buyer: "Kiwi Systems", 
        brand: "Kiwi", 
        dept: "HR", 
        title: "Employee Engagement", 
        meetingDate: "09 May, 2025 at 3pm", 
        participants: "Mohd Saleem +2",
        participantList: [
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
    { 
        id: 10, 
        date: "10 May, 2025 at 5pm", 
        status: "Archived", 
        type: "Offline", 
        buyer: "Orange Enterprises", 
        brand: "Orange", 
        dept: "Legal", 
        title: "Contract Review", 
        meetingDate: "10 May, 2025 at 5pm", 
        participants: "Mohd Saleem +2",
        participantList: [
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
            { name: "John Smith", role: "Sales" },
            { name: "Mohd Saleem", role: "Buyer" },
            { name: "Emma Wilson", role: "Marketing Lead" },
        ],
        action: "" 
    },
];

const getStatusClass = (status) => {
    switch (status) {
        case "Completed":
            return "bg-green-500 text-white";
        case "Upcoming":
            return "bg-yellow-500 text-white";
        case "Follow-up":
            return "bg-blue-500 text-white";
        case "Re-scheduled":
            return "bg-purple-600 text-white";
        case "Overdue":
            return "bg-red-500 text-white";
        case "In Progress":
            return "bg-orange-500 text-white";
        case "Ongoing":
            return "bg-black text-white";
        case "Draft":
            return "bg-gray-500 text-white";
        case "Archived":
            return "bg-red-200 text-red-600 border border-red-600";
        default:
            return "bg-gray-500 text-white";
    }
};

const getOnlineOfflineClass = (type) => {
    return type === "Online" 
        ? "bg-green-200 text-green-800 border-green-600" 
        : "bg-gray-200 text-gray-800 border-gray-600";
};

// UserList component that appears on hover
const ParticipantUserList = ({ participants, position }) => {
    return (
        <div 
            className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64"
            style={{ 
                top: position.top, 
                left: position.left,
                transform: 'translateY(-50%)'
            }}
        >
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Meeting Participants</h3>
            <div className="space-y-3">
                {participants.map((participant, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white text-sm font-semibold flex items-center justify-center">
                            {participant.name.charAt(0)}
                        </span>
                        <div>
                            <p className="text-sm font-medium text-gray-900">{participant.name}</p>
                            <p className="text-xs text-gray-500">{participant.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MainContent = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [hoveredParticipants, setHoveredParticipants] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

    const handleCheckboxChange = (id) => {
        setSelectedItems(prevSelectedItems =>
            prevSelectedItems.includes(id)
                ? prevSelectedItems.filter(item => item !== id)
                : [...prevSelectedItems, id]
        );
    };

    const handleParticipantsMouseEnter = (meeting, event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setHoverPosition({
            top: rect.top + rect.height / 2,
            left: rect.left - 270 
        });
        setHoveredParticipants(meeting);
    };

    const handleParticipantsMouseLeave = () => {
        setHoveredParticipants(null);
    };

    return (
        <main className="flex-1 p-6 overflow-y-auto bg-gray-120">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mr-5">Buyers Meeting List View</h1>
                    <h3 className="mt-1">
                        <span className="text-purple-500">Buyer Meeting</span> {'>>'} Buyer Meeting List View
                    </h3>
                </div>
                <div className="flex space-x-4">
                    <button className="flex items-center text-white bg-purple-400 rounded-sm px-7 py-2">
                        <FaFileExport className="mr-2" />
                        Export
                    </button>
                    <button className="flex items-center text-white bg-black rounded-sm px-7 py-2">
                        <MdAdd className="mr-2" />
                        Create New Meeting
                    </button>
                </div>
            </div>
            <div className="p-4 bg-white rounded-md border border-gray-300 ">
                <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-purple-200 text-purple-800 rounded-md">
                        <span>All</span>
                        <span className="text-sm px-2 bg-purple-700 text-white rounded-full">100</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-md">
                        <span>Draft</span>
                        <span className="text-sm px-2 bg-gray-500 text-white rounded-full">50</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-md">
                        <span>Archive</span>
                        <span className="text-sm px-2 bg-gray-500 text-white rounded-full">75</span>
                    </button>
                </div>
            </div>
            <div className="p-4 bg-white mt-1 rounded-t-lg border border-gray-300">
                <div className="flex items-center space-x-4">
                    {/* Search Input */}
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search anything here..."
                            className="w-full pl-10 pr-4 py-2 border text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    {/* Filter Dropdowns */}
                    <div className="flex space-x-4">
                        <select className="px-4 py-2 border rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Buyer Name</option>
                        </select>
                        <select className="px-4 py-2 border rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Brand</option>
                        </select>
                        <select className="px-4 py-2 border rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Dept</option>
                        </select>
                        <select className="px-4 py-2 border rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Meeting Type</option>
                        </select>
                        <select className="px-4 py-2 border rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Participants</option>
                        </select>
                        <select className="px-4 py-2 border rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Meeting Date</option>
                        </select>
                        <select className="px-4 py-2 border rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Status</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* The new div for the table */}
            <div className="border border-t-0 border-gray-300 bg-white shadow-sm overflow-x-auto scrollbar-hide">
                <table className="min-w-full divide-y mb-40 divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                            </th>
                            <th className="px-10 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                    Date & Time <FaSort className="ml-1" />
                                </div>
                            </th>
                            <th className="px-11 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                    Status <FaSort className="ml-1" />
                                </div>
                            </th>
                            <th className="px-8 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center ">
                                    Type <MdArrowUpward className="ml-1 text-purple-800 bg-red-100 rounded-sm " />
                                </div>
                            </th>
                            <th className="px-11 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                    Buyer Name <MdArrowDownward className="ml-1 text-purple-800 bg-red-100 rounded-sm " />
                                </div>
                            </th>
                            <th className="px-12 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                    Brand <MdArrowDownward className="ml-1 text-purple-800 bg-red-100 rounded-sm " />
                                </div>
                            </th>
                            <th className="px-10 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                    Dept. <MdArrowDownward className="ml-1 text-purple-800 bg-red-100 rounded-sm " />
                                </div>
                            </th>
                            <th className="px-22 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                    Title <FaSort className="ml-1" />
                                </div>
                            </th>
                            <th className="px-8 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                    Meeting Date <FaSort className="ml-1" />
                                </div>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                    Participants <FaSort className="ml-1" />
                                </div>
                            </th>
                            <th className="px-3 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider sticky right-0 bg-gray-50 z-10 shadow-lg">
                                <div className="flex items-center">
                                    Action
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {meetings.map(meeting => (
                            <tr key={meeting.id} className={`${selectedItems.includes(meeting.id) ? 'bg-purple-100' : 'hover:bg-gray-50'}`}>
                                <td className="px-6 py-4 whitespace-nowrap ">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(meeting.id)}
                                        onChange={() => handleCheckboxChange(meeting.id)}
                                        className="form-checkbox h-4 w-4 text-purple-600 focus:ring-purple-600 rounded-sm"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {meeting.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap relative">
                                    <div className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium cursor-pointer group">
                                        <span className={`inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium ${getStatusClass(meeting.status)}`}>
                                            {meeting.status}
                                            {meeting.count && (
                                                <span className="ml-1 font-bold text-xs">({meeting.count})</span>
                                            )}
                                        </span>

                                        {/*  Hover component */}
                                        {(meeting.status === "In Progress" || meeting.status === "Follow-up") && (
                                            <div className="absolute top-10 mt-2 left-0 z-50 hidden group-hover:block">
                                                <div
                                                    className="border border-t-0 border-gray-300 bg-white shadow-sm overflow-x-auto scrollbar-hide"
                                                    style={{ width: '1000px' }}
                                                >
                                                    <ActionItemsTable />
                                                </div>  
                                            </div>
                                        )}
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 inline-flex text-xs border leading-5 font-semibold rounded-md ${getOnlineOfflineClass(meeting.type)}`}>
                                        {meeting.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap underline text-sm text-black-900 font-medium">
                                    {meeting.buyer}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black-900 underline font-medium">
                                    {meeting.brand}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black-900 underline font-medium">
                                    {meeting.dept}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black-900 underline font-medium">
                                    {meeting.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {meeting.meetingDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div 
                                        className="flex items-center cursor-pointer"
                                        onMouseEnter={(e) => handleParticipantsMouseEnter(meeting, e)}
                                        onMouseLeave={handleParticipantsMouseLeave}
                                    >
                                        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500 text-white font-semibold flex items-center justify-center">
                                            M
                                        </span>
                                        <div className="ml-3">
                                            <button className="text-sm font-medium text-gray-900 hover:text-blue-600">{meeting.participants}</button>
                                            <p className="text-xs text-gray-500">Buyer, Sales</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium sticky right-0 bg-white z-10 shadow-lg">
                                    <ActionMenu  className="overflow-hidden "/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/*  UserList when hovering over participants */}
            {hoveredParticipants && (
                <ParticipantUserList 
                    participants={hoveredParticipants.participantList}
                    position={hoverPosition}
                />
            )}

            <div className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm border border-gray-300">
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                    <span>Items Per Page</span>
                    <select className="px-2 py-1 border rounded-md">
                        <option>50</option>
                    </select>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-600 text-sm">1-50 of 100</span>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">&lt;</button>
                        <button className="px-3 py-1 border rounded-md bg-purple-500 text-white hover:bg-purple-600">1</button>
                        <button className="px-3 py-1  rounded-md bg-gray-300 text-gray-500 hover:bg-gray-100">2</button>
                        <button className="px-3 py-1  rounded-md text-gray-500 hover:bg-gray-100">3</button>
                        <button className="px-3 py-1  rounded-md text-gray-500 hover:bg-gray-100">4</button>
                        <button className="px-3 py-1  rounded-md text-gray-500 hover:bg-gray-100">...</button>
                        <button className="px-3 py-1  rounded-md text-gray-500 hover:bg-gray-100">10</button>
                        <button className="px-3 py-1  rounded-md text-gray-500 hover:bg-gray-100">11</button>
                        <button className="px-3 py-1  rounded-md text-gray-500 hover:bg-gray-100">12</button>
                        <button className="px-3 py-1  rounded-md text-gray-500 hover:bg-gray-100">&gt;</button>
                    </div>
                </div>
            </div>
            {selectedItems.length > 0 && (
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 p-4 bg-gray-800 text-white rounded-md shadow-lg">
                    {selectedItems.length} items selected
                </div>
            )}
        </main>
    );
};

export default MainContent;