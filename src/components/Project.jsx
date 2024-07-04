import React from "react";

const Card = () => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col w-2/4 rounded-lg border-black bg-white text-center">
                <img
                    className="border-pink-700 border-b-4 rounded-tr-lg rounded-tl-lg"
                    src={"https://placehold.co/450x175"}
                />
                <p>{"Fill text from DB per project"}</p>
            </div>
        </div>
    );
};

export default Card;
