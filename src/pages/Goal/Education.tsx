const Education = () => {
  return (
    <div className="container mx-auto my-10">
      <div className=" px-4 py-8 grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Education"
          className="w-full h-auto object-cover rounded-lg shadow-md mb-8"
        />
        <div className=" p-6 rounded-lg ">
          <h1 className="font-bold text-5xl text-blue-950 mb-4">Education</h1>
          <p className=" text-gray-700 leading-relaxed text-xl">
            Education is the power and pillar of success, and we will strive to
            provide quality and meaningful education to young children with
            access to quality early childhood development, care, and pre-primary
            education. Creating quality learning spaces in formal schools and
            informal education settings, such as community-based education and
            accelerated learning programs for children who have missed years of
            schooling or missing moral, ethical, and religious education. We
            will provide teaching and learning materials, so teachers and
            facilitators are equipped to teach meaningful lessons which will
            help the students to ensure success here and hereafter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
