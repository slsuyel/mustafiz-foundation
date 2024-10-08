import Slider from 'react-slick';

const data = [
  {
    name: 'Fernanda',
    country: 'Japan',
    text1:
      'It’s been so horrible, reading the news and wondering where family members are. ',
    text2:
      'At 27 years old, Fernanda Levin was forced to leave behind her parents, siblings, and home',
  },
  {
    name: 'Ahmed',
    country: 'Syria',
    text1:
      'The war forced us to flee our beloved homeland, and now we are living with uncertainty every day.',
    text2:
      'Ahmed, a father of three, escaped the violence with his family and is now rebuilding their lives in a new country.',
  },
  {
    name: 'Maria',
    country: 'Venezuela',
    text1:
      'I never imagined I would have to leave my home, but the situation became unbearable.',
    text2: 'Maria left Venezuela in search of a safer life for her children.',
  },
];

const Stories = () => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <div className=" py-1 my-5 md:text-2xl text-start slicccc---str  border-black border-l-2 px-1 md:px-4 ">
          <div className="">
            <p className=" block">{data[i].name}</p>
            <p className="font-semibold block">{data[i].country}</p>
          </div>
        </div>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-yellow-300 py-5 md:py-14 mx-auto">
      <div className="w-full md:w-10/12 mx-auto">
        <div className="py-5 md:py-10">
          <h1 className="font-bold text-4xl text-blue-950 mb-7 p-3 border-l-4 h-fit border-yellow-400">
            Refugee stories from around the world
          </h1>
          <p className='px-4 md:px-0 pb-4 md:pb-0'>
            In their own words, people share when and why they had to flee—and
            what life is like now.
          </p>

          <div className="w-[80%] sm:w-[75%] lg:w-[60%] mx-auto">
            <Slider {...settings} className="stories mx-auto">
              {data.map((d, index) => (
                <div
                  key={index}
                  className="sm:p-3 md:p-6 rounded-lg relative mb-12"
                >
                  <div className="flex items-start md:space-x-4">
                    <div className="flex gap-7 flex-wrap sm:flex-nowrap">
                      <div className="bg-white p-4 md:p-10 rounded-sm">
                        <p className=" italic text-base md:text-xl md:py-5">
                          <i
                            className="fa-solid fa-quote-left mb-0 text-5xl text-orange"
                            aria-hidden="true"
                          ></i>{' '}
                          {d.text1}{' '}
                        </p>
                        <div className="flex justify-between sm:px-5 flex-wrap md:flex-nowrap">
                          <div className="mt-1 md:mt-0 sm:ms-10">
                            <p className="text-gray-600">{d.text2}</p>
                            <p className="mt-4 font-semibold text-lg text-gray-800">
                              {d.name}
                            </p>
                            <p>{d.country}</p>
                          </div>

                          <img
                            src="https://www.rescue.org/sites/default/files/styles/square_1x1_200px_wide/public/2022-11/pic_3.png?itok=iX2VpiRf"
                            alt={d.name}
                            className="size-32 sm:w-40 sm:h-40 object-cover   "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
