const Linkedin = () => {
  return (
      <div id="linkedin" className="flex flex-row justify-center pb-4 fixed-width">
          <div className="flex flex-col rounded-lg border-black bg-white text-center">
              <img
                  className="border-pink-700 border-b-4 rounded-tr-lg rounded-tl-lg"
                  src="https://placehold.co/450x175"
              />
              <h2 className="text-lg font-bold">LinkedIn</h2>
              <p className="pb-4 mx-4">
                  You can find more of my professional social life as well as work and education history at <a href="https://www.linkedin.com/in/wesley-d-a70341272/">wtdunlap</a>
              </p>
          </div>
      </div>
  );
};

export default Linkedin