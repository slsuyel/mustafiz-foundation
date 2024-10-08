import img from '/IMG-20240908-WA0004.jpg';
const WhoWeAre = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-10 grid md:grid-cols-2 gap-2  px-4">
        <div className=" p">
          <h1 className="font-bold text-2xl xl:text-5xl text-blue-950">
            Who We Are
          </h1>

          <div className="my-10">
            <p className="mb-10">
              Since its inception MFI has been synonymous with life changing
              discoveries and societal development know-how, reinventing us and
              our community along the way. The history of MFI is a history of
              social and economical breakthrough. But more than that, it’s a
              narrative of transformation of the society. From the very
              beginning MFI has changed and evolved, so that we can keep finding
              essential innovation to solve the most challenging problems and
              help people live better, healthier lives. MFI launches a new idea,
              with a new purpose. Our mission is to empower the world with
              essential innovations to thrive our community, our people which is
              matter most.
            </p>
            <p>
              Having this vision we are committed to stand with distressed
              people, particularly with helpless children around the globe. We
              will be continuing our campaign and working adamantly with
              dedication to build better citizens for the better world. It is
              fortunate that various social organizations are working to support
              crisis in various aspects like vulnerable minorities and civilians
              in wartime, refugees, and children in need. But we do not see much
              work as needed to build a better generation for a better world.
            </p>
          </div>
        </div>
        <div className="my-10">
          <img src={img} alt="" className="w-fit" />
        </div>
      </div>

      <div className="bg-orange p-5 md:py-20  ">
        <p className=" text-xl md:text-2xl font-semibold w-[90%] md:w-3/5 mx-auto text-center text-white">
          Mustafiz Foundation is the Citizen Development and Social Engineering
          project having a campaign “Better Citizen for a Better Nation, We the
          People, do the best.”
        </p>
      </div>

      <div className=" px-4">
        <h1 className="font-bold text-2xl xl:text-5xl text-blue-950 text-center my-10">
          What is out goal
        </h1>

        <p className="my-7">
          While various social organizations work to address crises affecting
          vulnerable minorities, wartime civilians, refugees, and children in
          need, we recognize that more needs to be done. Our goal is to fill
          these gaps with focused, impactful efforts that drive meaningful
          change and offer hope to those who need it most.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
