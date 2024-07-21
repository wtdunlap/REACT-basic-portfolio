const Home = () => {
    return (
        <div id="home" className="flex flex-row justify-center pb-4">
            <div className="flex flex-col rounded-lg border-black bg-white text-center">
                <img
                    className="border-pink-700 border-b-4 rounded-tr-lg rounded-tl-lg"
                    src="https://placehold.co/450x175"
                />
                <h2 className="text-lg font-bold">Home card goes here</h2>
                <p className="pb-4 mx-4">
                    Welcome home! This is my portfolio. You can find ways to
                    contact me, previous projects, and general information about
                    me, all in one convenient spot.
                </p>
            </div>
        </div>
    );
};

export default Home;
