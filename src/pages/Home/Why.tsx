const Why = () => {
  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="container mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-4xl text-blue-950 mb-7 p-3 border-l-4 h-fit border-yellow-400">
            Why Mustafiz Foundation
          </h1>
        </div>

        <div className="flex mb-14 md:mb-20 justify-center flex-wrap sm:justify-start sm:flex-nowrap">
          <div className="bg-white w-[90%] md:w-5/6  flex items-center">
            <div className="flex px-5 md:px-8 py-6 md:py-10">
              <div className="md:-mt-7">
                <i
                  className="fa-solid fa-quote-left text-xl md:text-7xl text-orange me-5"
                  aria-hidden="true"
                ></i>
              </div>

              <div>
                <p className="text-base md:text-xl w-5/6 mb-5">
                  I support the IRC because I believe everyone should have an
                  opportunity to seek a better future for themselves. My family
                  had that opportunity and I’m so very grateful for it.
                </p>
                <h3 className="text-lg md:text-3xl font-semibold">Rami Malek</h3>
                <h4 className="text-base md:text-xl">Actor and IRC Ambassador</h4>
              </div>
            </div>
          </div>
          <div className="w-[90%] sm:w-auto">
            <img
              className="w-full h-auto object-cover sm:w-[400px] sm:h-[400px]" // Adjust image size and responsiveness
              src="https://www.rescue.org/sites/default/files/styles/square_1x1_400px_wide/public/quote/19322/story-image/yeramimalek_selfievideo_2021.11.05_16x9_thumbnail.jpg?itok=ZV7kh1i0"
              alt="Rami Malek supporting the IRC"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
