const Project = () => {
    return (
        <div id="project" className="flex flex-row justify-center pb-4">
            <div className="flex flex-col rounded-lg border-black bg-white text-center">
                <img
                    className="border-pink-700 border-b-4 rounded-tr-lg rounded-tl-lg"
                    src="https://placehold.co/450x175"
                />
                <a><h2 className="text-lg font-bold">Projects</h2></a>
                <p className="pb-4 mx-4">
                    Projects go here but will likely need individual cards. Brief description of project. Four to five short sentences. Something like this, but different. Maybe do a grid with popup descriptions. Something cool but easy.
                </p>
            </div>
        </div>
    );
};

export default Project;
