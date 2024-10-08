import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="rounded-sm mx-auto relative bg-[url(https://i.ibb.co.com/jJ5J8M0/1.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[calc(100vh-100px)] lg:items-center lg:px-8">
        <div className="max-w-[600px] text-center md:text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl xl:text-5xl 2xl:text-6xl leading-[140%]">
            Let us find your
            <span className="font-extrabold text-orange mt-1">
              {' '}
              Forever Home.{' '}
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Mustafiz Foundation Inc. (MFI) is dedicated to enhancing community
            health and well-being through inclusive and equitable support and
            development programs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/donate"
              className="block w-full rounded bg-orange transition-all duration-200 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-black sm:w-auto"
            >
              Donate
            </Link>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
