import Github from "../components/Github";
import Linkedin from "../components/Linkedin";
import Contact from "../components/Contact";
import About from "../components/About";
import Home from "../components/Home";
import Project1 from "../components/Project";

import ReactDOM from "react-dom";

function insertCard(index) {
    const location = document.getElementById("portal");

    if (index === 0) {
        console.log("Something clicked but it was a zero");
        return;
    }
    if (index === 1) {
        console.log("Github clicked");
        return;
    }
    if (index === 2) {
        console.log("Linkedin clicked");
        ReactDOM.createPortal(<Linkedin />, location);
        return;
    }
    if (index === 3) {
        console.log("Contact clicked");
        ReactDOM.createPortal(<Contact />, location);
        return;
    }
    if (index === 4) {
        console.log("Project clicked");
        ReactDOM.createPortal(<Project1 />, location);
        return;
    }
    if (index === 5) {
        console.log("Home clicked");
        ReactDOM.createPortal(<Home />, location);
        return;
    }
    if (index === 6) {
        console.log("About clicked");
        ReactDOM.createPortal(<About />, location);
        return;
    }
}

export default insertCard;
