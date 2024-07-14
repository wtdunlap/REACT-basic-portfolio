import { useState, useEffect } from "react";

import manageLocal from "../utils/manageLocal";

function Header() {
    const [index, setIndex] = useState(0);
    const [whichOne, setWhichOne] = useState("");

    // Updates based on index, sets document title to whatever the index is currently set to.
    //
    // This doesn't really do much but it's kind of cool
    useEffect(() => {
        if (index === 0) {
            document.title = "Portfolio";
        }
        if (index === 1) {
            document.title = "Github";
            setWhichOne("Github");
        }
        if (index === 2) {
            document.title = "LinkedIn";
            setWhichOne("Linkedin");
        }
        if (index === 3) {
            document.title = "Contact Me";
            setWhichOne("Contact");
        }
        if (index === 4) {
            document.title = "Projects";
            setWhichOne("Project");
        }
        if (index === 5) {
            document.title = "Home";
            setWhichOne("Home");
        }
        if (index === 6) {
            document.title = "About Me";
            setWhichOne("About");
        }
    }, [index]);

    return (
        <div className="p-2">
            <div className="justify-center flex flex-row p-2 space-x-3">
                <button
                    onMouseEnter={() => setIndex(1)}
                    onClick={() => {
                        manageLocal("Github");
                        setWhichOne("Github");
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    GitHub
                </button>
                <button
                    onMouseEnter={() => setIndex(2)}
                    onClick={() => {
                        manageLocal("Linkedin");
                        setWhichOne("Linkedin");
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    LinkedIn
                </button>
                <button
                    onMouseEnter={() => setIndex(3)}
                    onClick={() => {
                        manageLocal("Contact");
                        setWhichOne("Contact");
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
                        manageLocal("Project");
                        setWhichOne("Project");
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    Projects
                </button>
                <button
                    onMouseEnter={() => setIndex(5)}
                    onClick={() => {
                        manageLocal("Home");
                        setWhichOne("Home");
                    }}
                    type="button"
                    className="p-2 border rounded bg-gray-500 hover:bg-pink-500"
                >
                    Home
                </button>
                <button
                    onMouseEnter={() => setIndex(6)}
                    onClick={() => {
                        manageLocal("About");
                        setWhichOne("About");
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
