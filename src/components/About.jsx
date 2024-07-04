import React from "react";

const About = () => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col w-2/4 rounded-lg border-black bg-white text-center">
                <img
                    className="border-pink-700 border-b-4 rounded-tr-lg rounded-tl-lg"
                    src="https://placehold.co/450x175"
                />
                <p>
                    I am a self driven and highly motivated person that is looking for a forever home. I have had numerous jobs over the years, all from different backgrounds, which has given me a truly unique world view. I am open to full stack web development and all the facets that come with it, making use of MongoDB, Express.js, React.js and Node.js. If you, or someone you know, happens to know of a position that makes use of the various technologies used in any of my portfolio pieces, please let me know via LinkedIn or from my contact me page.
                </p>
            </div>
        </div>
    );
};

export default About;
