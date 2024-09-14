const Why = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl text-blue-950 mb-7 p-3 ">
        Why Mustafiz Foundation
      </h1>

      <div className="grid md:grid-cols-2 items-center justify-center">
        <div>
          <img
            src="https://www.rescue.org/sites/default/files/styles/square_1x1_400px_wide/public/quote/19322/story-image/yeramimalek_selfievideo_2021.11.05_16x9_thumbnail.jpg?itok=ZV7kh1i0"
            alt=""
          />
        </div>

        <div className="border">
          <div className="">
            <p>
              <i
                className="fa-solid fa-quote-left text-5xl text-orange me-5"
                aria-hidden="true"
              ></i>
              I support the IRC because I believe everyone should have an
              opportunity to seek a better future for themselves. My family had
              that opportunity and I’m so very grateful for it.
            </p>
            <h3 className="text-3xl font-semibold">Rami Malek</h3>
            <h4 className="text-xl">Actor and IRC Ambassador</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
