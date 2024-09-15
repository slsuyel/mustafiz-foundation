const Health = () => {
  return (
    <div className="container mx-auto my-10">
      <div className=" px-4 py-8 md:grid grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1601841197690-6f0838bdb005?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Education"
          className="w-full h-auto object-cover rounded-lg shadow-md mb-8"
        />
        <div className=" p-6 rounded-lg ">
          <h1 className="font-bold text-2xl xl:text-5xl text-blue-950 mb-4">
            Health
          </h1>
          <p className=" text-gray-700 leading-relaxed text-xl">
            Sound health is the precondition of success, prosperity and wealth.
            On the contrary, poor health can undermine people success and
            potential. We have been devotedly working to enhance people’s good
            health particularly for the people in rural area who are in
            miserable condition for lack of treatment, knowledge about healthy
            life style and poverty. Empowering community health worker to
            deliver treatment, educate healthy life style and provide financial
            support to bring changes to the community is the project in our
            priority list. In addition, we have also focused on developing and
            enhancing transformative strategies for treating malnourished
            children, particularly in rural and underdeveloped areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Health;
