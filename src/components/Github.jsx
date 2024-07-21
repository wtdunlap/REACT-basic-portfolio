const Github = () => {
    return (
        <div id="github" className="flex flex-row justify-center pb-4">
            <div className="flex flex-col rounded-lg border-black bg-white text-center">
                <img
                    className="border-pink-700 border-b-4 rounded-tr-lg rounded-tl-lg"
                    src="https://placehold.co/450x175"
                />
                <h2 className="text-lg font-bold">GitHub card goes here</h2>
                <p className="pb-4 mx-4">
                    A collection of all my work can be found on my GitHub profile. You can find repositories with my work at <a href="https://github.com/wtdunlap">github.com/wtdunlap</a>.
                </p>
            </div>
        </div>
    );
};

export default Github;