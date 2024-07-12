import { useState, useEffect } from "react";
function Header() {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        if (index === 0) {
            document.title = "Portfolio"
        }
        if (index === 1) {
            document.title = "Github";
        }
        if (index === 2) {
            document.title = "LinkedIn";
        }
        if (index === 3) {
            document.title = "Contact Me";
        }
        if (index === 4) {
            document.title = "Projects";
        }
        if (index === 5) {
            document.title = "Home";
        }
        if (index === 6) {
            document.title = "About Me";
        }
    }, [index]);

    return (
        <div className="p-2">
            <div className="justify-center flex flex-row p-2 space-x-3">
                <button
                    onMouseEnter={() => setIndex(1)}
                    onClick={() => {
                        console.log(index);
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    GitHub
                </button>
                <button
                    onMouseEnter={() => setIndex(2)}
                    onClick={() => {
                        console.log(index);
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    LinkedIn
                </button>
                <button
                    onMouseEnter={() => setIndex(3)}
                    onClick={() => {
                        console.log(index);
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    Contact Me
                </button>
            </div>
            <div className="justify-center flex flex-row p-2 space-x-3">
                <button
                    onMouseEnter={() => setIndex(4)}
                    onClick={() => {
                        console.log(index);
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    Projects
                </button>
                <button
                    onMouseEnter={() => setIndex(5)}
                    onClick={() => {
                        console.log(index);
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    Home
                </button>
                <button
                    onMouseEnter={() => setIndex(6)}
                    onClick={() => {
                        console.log(index);
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    About Me
                </button>
            </div>
        </div>
    );
}

export default Header;
