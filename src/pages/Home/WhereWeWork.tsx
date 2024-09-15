import img1 from '/IMG-20240908-WA0005.jpg';
import img2 from '/IMG-20240908-WA0006.jpg';
import img3 from '/IMG-20240908-WA0006.jpg';

const WhereWeWork = () => {
  return (
    <div className="my-20 container mx-auto px-4 ">
      <h1 className="font-bold text-2xl xl:text-5xl text-blue-950 mb-7 p-3 text-center">
        Where We Work
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2  items-center bg-orange">
        {/* USA Section */}
        <div className="text-center  space-y-4  text-white">
          <div className=" flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/800px-Flag_of_the_United_States.png"
              alt="USA"
              className="mx-auto md:mx-0 text-center pt-4 w-[50px]"
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">USA</p>
            <p>New York, Buffalo, Dallas, Texas and San Diego (California)</p>
            <p>
              Mustafiz Foundation Inc (MFI) is committed to strive supporting
              refugees, asylees, victims of human trafficking, survivors of
              torture, and other immigrants to rebuild their lives. Our promise
              is to work with government bodies, civil society actors, and local
              volunteers to help refugees and immigrants integrate and
              contribute to our communities.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={img1}
            alt="Mustafiz Foundation USA"
            className=" shadow-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center bg-orange">
        {/* USA Section */}

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={img2}
            alt="Mustafiz Foundation USA"
            className=" shadow-lg"
          />
        </div>

        <div className="text-center   text-white">
          <div className=" flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/800px-Flag_of_the_United_States.png"
              alt="USA"
              className="mx-auto md:mx-0 text-center pt-4 w-[50px]"
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">USA</p>
            <p>New York, Buffalo, Dallas, Texas and San Diego (California)</p>
            <p>
              We offers a broad range of programs including, adult education
              classes, youth programs covering ages 7 to 35, employment
              assistance, asset building resources, community health response
              programs, and immigration services. We are here to rebuild the
              life of vulnerable people so that they can see the light and focus
              what is important for their lives, their community and for the
              rest of the world.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  items-center bg-orange">
        {/* USA Section */}
        <div className="text-center  space-y-4  text-white">
          <div className=" flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2560px-Flag_of_Bangladesh.svg.png"
              alt="USA"
              className="mx-auto md:mx-0 text-center pt-4 w-[50px]"
            />
          </div>
          <div className="px-4">
            <p className="font-semibold text-lg">Bangladesh</p>
            <p>Rohingya Crisis</p>
            <p>
              More than one million Rohingya have fled violence in Myanmar’s
              Rakhine State to Cox’s Bazar, in Bangladesh. They need food,
              shelter, healthcare support, protection for Women and Children,
              particularly vulnerable women are facing human trafficking, they
              need emergency support to save their lives, resettle them as
              refugee.They are struggling to survive with their families and
              deeply worried for their future and eagerly expecting help and
              support to secure their lives and family. We are standing with
              them and will continue our effort until resettle their lives.
              Please stand with us.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={img3}
            alt="Mustafiz Foundation USA"
            className=" shadow-lg"
          />
        </div>
      </div>

      <div>
        <img
          src={
            'https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt=""
          className="w-full"
        />

        <div className="mt-10">
          <p className="mb-7">
            Bangladesh is one of the most densely populated countries in the
            world. December 16, 1971 marked the end of the Bangladesh Liberation
            War, a short-lived conflict between India and Pakistan that
            established the People’s Republic of Bangladesh from the territory
            of the former province of East Pakistan. The province East Pakistan
            was created during independence from the British Empire in 1947. At
            that time, the South Asian subcontinent was partitioned into two
            countries: India (including lands with a Hindu majority) and
            Pakistan (lands with a Muslim majority). The people and territory of
            East Bengal became East Pakistan.{' '}
          </p>

          <p className="mb-7">
            East and West Pakistan were geographically, culturally, and
            ideologically distant and distinct. An independence movement for
            East Pakistan grew up based on Bengal ethnic concerns, the right to
            use the Bengali language, and a desire for local political control
            and self-rule. Estimates of the death toll vary, stretching from
            hundreds of thousands to some 3 million. Furthermore, the Pakistani
            army used rape as a weapon of war. At least 200,000 women were
            assaulted and some 25,000 children resulted from those attacks. From
            being one of the poorest nations at birth in 1971. Bangladesh has a
            strong track record of growth and development, even in times of
            elevated global uncertainty. A robust demographic dividend, strong
            ready-made garment (RMG) exports, resilient remittance inflows, and
            stable macroeconomic conditions have supported rapid economic growth
            over the past two decades. A strong recovery from the COVID-19
            pandemic continued in FY22, although a recent surge in commodity
            prices has presented new headwinds.
          </p>

          <p className="mb-7">
            Bangladesh reached lower-middle income status in 2015. It is on
            track to graduate from the UN’s Least Developed Countries (LDC) list
            in 2026. Poverty declined from 43.5 percent in 1991 to 14.3 percent
            in 2016, based on the international poverty line of $1.90 a day
            (using 2011 Purchasing Power Parity exchange rate). Moreover, human
            development outcomes improved along many dimensions. Bangladesh,
            like many other countries, faces global economic challenges. Rising
            commodity prices and a surge in imports in the second half of FY22
            resulted in widening Balance of Payments (BoP) deficit and
            accelerating inflation. Foreign exchange reserves declined as a
            result, reaching US$ 38.9 billion by the end of August 2022. Real
            GDP growth is expected to slow in FY23 as import suppression
            measures disrupt economic activity.
          </p>

          <p className="mb-7">
            In recent years Bangladesh has made great strides to achieve poverty
            reduction, sustainable economic growth, and continued human
            development. However, the country still faces many challenges.
            Twenty percent of the population (around 34 million people) still
            lives below the poverty line. Most of Bangladesh sits just 10 meters
            above sea level, making the country extremely vulnerable to the
            climate crisis. Storm surges and flooding caused by extreme weather
            regularly affect large areas of Bangladesh and coastal areas in
            particular. In the time of crisis Bangladeshi people need food,
            drinking water, health services, shelter, financial support for
            education for the kids and youth to continue their education to
            build their future and help their community. Mustafiz Foundation Inc
            (MFI) has been helping to face those challenges and is committed to
            stand with them so that they can participate and contribute to the
            local economy and support their family and community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhereWeWork;
