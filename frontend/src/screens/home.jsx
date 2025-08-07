import React from "react";
import Navbar from "../layouts/navbar";
import Header from "../layouts/header";
import MainContent from "../layouts/MainContent"; 

const Home = () => {
    return (
        <div className="fixed inset-0 flex flex-col bg-gray-100 overflow-auto">
             {/* Header Here*/}
            <Header/>
            
            <div className="flex flex-1">
                {/* Navbar Here*/}
                <Navbar/>
                
                {/* Main Content Here  */}
                <MainContent />
            </div>
        </div>
    );
};

export default Home;