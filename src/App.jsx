import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="flex justify-top content-center flex-col sm:flex-row">
            <div className="flex flex-col p-4">
                <Nav />
            </div>
            <div className="flex justify-top content-center flex-col pt-4 sm:pr-4 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-2/4 2xl:w-1/4">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
