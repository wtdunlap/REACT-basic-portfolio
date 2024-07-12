const Github = () => {
    return (
        <div className="flex flex-row justify-center pb-4">
            <div className="flex flex-col w-2/4 rounded-lg border-black bg-white text-center">
                <img
                    className="border-pink-700 border-b-4 rounded-tr-lg rounded-tl-lg"
                    src="https://placehold.co/450x175"
                />
                <h2 className="text-lg font-bold">GitHub card goes here</h2>
                <p className="pb-4 mx-4">
                    You can find repositories with my work at <a src="https://github.com/wtdunlap">GitHub</a>.
                </p>
            </div>
        </div>
    );
};

export default Github;