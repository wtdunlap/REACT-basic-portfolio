import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex sticky top-4 flex-col sm:flex-row">
            <div>
                <div className="flex bg-pink-700 justify-center content-center text-center sm:flex-col">
                    <Link
                        className="p-2 m-2 border rounded bg-gray-500 hover:bg-pink-400"
                        to="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="p-2 m-2 border rounded bg-gray-500 hover:bg-pink-400"
                        to="/contact"
                    >
                        Contact
                    </Link>
                    <Link
                        className="p-2 m-2  border rounded bg-gray-500 hover:bg-pink-400"
                        to="/github"
                    >
                        Github
                    </Link>
                </div>
                <div className="flex bg-pink-700 justify-center content-center text-center sm:flex-col">
                    <Link
                        className="p-2 m-2  border rounded bg-gray-500 hover:bg-pink-400"
                        to="/home"
                    >
                        Home
                    </Link>
                    <Link
                        className="p-2 m-2 border rounded bg-gray-500 hover:bg-pink-400"
                        to="/linkedin"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        className="p-2 m-2 border rounded bg-gray-500 hover:bg-pink-400"
                        to="/project"
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
