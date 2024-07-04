import React from "react";

const Header = () => {
    return (
        <div className="p-2">
            <div className="justify-center flex flex-row p-2 space-x-3">
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">GitHub</div>
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">LinkedIn</div>
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">Contact Me</div>
            </div>
            <div className="justify-center flex flex-row p-2 space-x-3">
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">Projects</div>
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">Home</div>
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">About Me</div>
            </div>
        </div>
    );
};

export default Header;
