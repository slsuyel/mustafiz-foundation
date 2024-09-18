const DonateNow = () => {
  return (
    <div className="container mx-auto my-10  h-screen md:h-[650px] ">
      <div className="px-4 my-8 relative h-fit md:h-[450px] flex justify-center flex-wrap md:flex-nowrap">
        <img
          className="h-full w-full object-cover"
          src="https://d2u0ktu8omkpf6.cloudfront.net/0b2fe9d4cb0cf2e7a9d3663651111985621456b4994fbba6.jpg"
          alt="Bangladesh Flash Flood Emergency"
        />
        <div className="p-5 w-full md:w-2/4 bg-white shadow-md grid-cols-1 md:grid-cols-2 gap-5 relative md:absolute md:-bottom-60 bottom-0">
          <div className="p-3">
            <h6 className="text-2xl font-bold mb-3 text-orange">
              Bangladesh Flash Flood Emergency
            </h6>
            <p>
              Since mid-August 2024, Bangladesh has been devastated by flash
              floods, affecting over 5.82 million people, including 2.36 million
              children. This catastrophic event has caused widespread
              destruction, leaving many without shelter, food, or access to
              clean water and medical care.
            </p>
          </div>
          <div className="p-3">
            <div className="bg-orange px-3 py-5">
              <input
                type="number"
                placeholder="500"
                className="border border-gray-300 p-2 w-full bg-white"
              />
              <button className="px-5 mt-2 py-2 bg-black text-white text-xl hover:bg-yellow-900 rounded-sm">
                Match Gift
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
