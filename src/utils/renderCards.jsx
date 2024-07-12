import Github from "../components/Github";
import Linkedin from "../components/Linkedin";
import Contact from "../components/Contact";
import About from "../components/About";
import Home from "../components/Home";
import Project from "../components/Project";

export default function manageCards(childrenArray) {
    childrenArray = ["github", "github", "linkedin", "about", "home"];
    let i = 0;
    while (i < 6) {
        localStorage.setItem(i, JSON.stringify(childrenArray[i]));
        i++;
    }

    childrenArray.map((current, index) => {
        if (!current) {
            console.log("Something clicked but it was a zero");
            return;
        }
        if (current === "Github") {
            console.log("Github added");
            return <Github key={index} />;
        }
        if (current === "Linkedin") {
            console.log("Linkedin added");
            return <Linkedin key={index} />;
        }
        if (current === "Contact") {
            console.log("Contact added");
            return <Contact key={index} />;
        }
        if (current === "About") {
            console.log("About added");
            return <About key={index} />;
        }
        if (current === "Home") {
            console.log("Home added");
            return <Home key={index} />;
        }
        if (current === "Project") {
            console.log("Project added");
            return <Project key={index} />;
        }
    });
}
