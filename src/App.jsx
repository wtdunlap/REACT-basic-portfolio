import HTMLReactParser from "html-react-parser";

import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";
import Home from "./components/Home";
import Linkedin from "./components/Linkedin";
import Project from "./components/Project";
import Header from "./components/Header";

import returnElements from "./utils/returnElements";
import manageLocal from "./utils/manageLocal";

function App() {
    function htmlToReact() {
        const html = returnElements(manageLocal("Home"));

        const replace = (domNode) => {
            if (domNode.attribs && domNode.attribs.id === "About") {
                return (
                    <>
                        <About />
                    </>
                );
            }
            if (domNode.attribs && domNode.attribs.id === "Contact") {
                return (
                    <>
                        <Contact />
                    </>
                );
            }
            if (domNode.attribs && domNode.attribs.id === "Github") {
                return (
                    <>
                        <Github />
                    </>
                );
            }
            if (domNode.attribs && domNode.attribs.id === "Home") {
                return (
                    <>
                        <Home />
                    </>
                );
            }
            if (domNode.attribs && domNode.attribs.id === "Linkedin") {
                return (
                    <>
                        <Linkedin />
                    </>
                );
            }
            if (domNode.attribs && domNode.attribs.id === "Project") {
                return (
                    <>
                        <Project />
                    </>
                );
            }
        };

        return HTMLReactParser(html, { replace });
    }

    return (
        <div className="flex justify-top content-center flex-col">
            <Header />
            {htmlToReact()}
        </div>
    )
}

export default App;
