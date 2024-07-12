const Contact = () => {
    return (
        <div className="flex flex-row justify-center pb-4">
            <div className="flex flex-col w-2/4 rounded-lg border-black bg-white text-center">
                <img
                    className="border-pink-700 border-b-4 rounded-tr-lg rounded-tl-lg"
                    src="https://placehold.co/450x175"
                />
                <h2 className="text-lg font-bold">Contact Me</h2>
                <p className="pb-4 mx-4">
                    This is where you go when you need to email me something
                    about something.
                </p>
                <a>wtdunlap@gmail.com</a>
            </div>
        </div>
    );
};

export default Contact;
