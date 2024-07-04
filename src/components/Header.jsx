import React from "react";

const Header = () => {
    return (
        <div className="p-2">
            <div className="justify-center flex flex-row p-2 space-x-3">
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">First Button</div>
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">Second Button</div>
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">Third Button</div>
            </div>
            <div className="justify-center flex flex-row p-2 space-x-3">
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">Three Per Line</div>
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">Fifth Button</div>
                <div className="p-2 border rounded bg-gray-500 hover:bg-pink-500">Sixth Button</div>
            </div>
        </div>
    );
};

export default Header;
