import React from "react";

const Card = () => {
    return (
        <div className="flex flex-row justify-center h-screen">
            <div className="flex flex-col w-2/4 rounded border-black bg-white justify-center text-center">
                <img
                    className="border-pink-800 border-b-4 rounded-tr-lg rounded-tl-lg"
                    src="https://placehold.co/450x175"
                />
                <p>Body of card goes here</p>
            </div>
        </div>
    );
};

export default Card;
