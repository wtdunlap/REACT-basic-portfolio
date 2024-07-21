
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Github from "./components/Github.jsx";
import Linkedin from "./components/Linkedin.jsx";
import Project from "./components/Project.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "home",
                element: <Home />,
                index: true,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "github",
                element: <Github />,
            },
            {
                path: "linkedin",
                element: <Linkedin />,
            },
            {
                path: "project",
                element: <Project />,
            },
        ],
    },
    {
        path: "*",
        element: <Error />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
        <RouterProvider router={router} fallbackElement={<Error />}/>
);
