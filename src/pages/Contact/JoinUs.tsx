const JoinUs = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="mx-4">
        <div className="my-5 mb-10">
          <img
            className="w-full rounded-sm shadow-sm"
            src="https://cdn.pixabay.com/photo/2023/07/07/08/50/sharepoint-training-8112055_1280.jpg"
            alt="Team Collaboration"
          />
        </div>

        <div>
          <h1 className="font-bold text-2xl xl:text-5xl text-blue-950 mb-7 p-3 text-center">
            JOIN OUR TEAM
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className=" grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-lg md:font-semibold"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-lg md:font-semibold"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg md:font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg md:font-semibold"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="cover-letter"
                  className="block text-lg md:font-semibold"
                >
                  Cover Letter
                </label>
                <textarea
                  id="cover-letter"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-lg md:font-semibold">Resume</label>
                <input
                  type="file"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <button className="px-5 py-3 bg-orange text-white text-xl hover:bg-black rounded-sm">
                Submit
              </button>
            </form>
            <div className="bg-yellow-400 p-4 rounded-md">
              <p className=" my-auto  text-xl p-5">
                Mustafiz Foundation Inc. (MFI) is an Equal Opportunity Employer
                and considers all applicants on the basis of merit without
                regard to race, religion, sex, gender identity, sexual
                orientation, ethnicity, national origin, age, marital status, or
                disability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
