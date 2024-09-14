const Stories = () => {
  return (
    <div className="bg-yellow-200">
      <div className="container mx-auto ">
        <div className="py-10">
          <h1 className="font-bold text-4xl text-blue-950 mb-7 p-3 border-l-4 h-fit border-yellow-400">
            Refugee stories from around the world
          </h1>
          <p>
            In their own words, people share when and why they had to flee—and
            what life is like now.
          </p>

          <div className=" p-6 rounded-lg relative w-3/5 mx-auto">
            <div className="flex items-start space-x-4">
              <img
                src="https://www.rescue.org/sites/default/files/styles/square_1x1_200px_wide/public/2022-11/pic_3.png?itok=iX2VpiRf"
                alt="Fernanda"
                className="w-40 h-40 rounded-lg object-cover border-4 border-orange-500 translate-y-[98%] -translate-x-[-80%]"
              />
              <div className="flex gap-7">
                <div>
                  <i
                    className="fa-solid fa-quote-left text-7xl text-orange mb-0"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="bg-white p-5 pb-20">
                  <p className="pb-10 italic text-xl my-5 mb-15">
                    It’s been so horrible, reading the news and wondering where
                    family members are. All my relatives are in eastern Ukraine
                    and I am afraid of what could happen to them.
                  </p>
                  <div className="ms-10">
                    <p className=" text-gray-600">
                      At 27 years old, Fernanda Levin was forced to leave behind
                      her parents, siblings and home simply so that she could
                      safely be herself.
                    </p>
                    <p className="mt-4 font-semibold text-lg text-gray-800">
                      Meet Fernanda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
