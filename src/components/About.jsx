function About() {

  return (

    <section
      id="about"
      className="bg-[#140107] text-white py-24 px-6 md:px-12"
    >

      {/* Heading */}

      <div className="text-center mb-16">

        {/* About Heading */}

        <h1 className="text-[#ffcc70] uppercase tracking-[6px] text-4xl md:text-6xl font-bold mb-8">

          About Restaurant

        </h1>

        {/* Welcome */}

        <h2 className="text-4xl md:text-6xl font-bold font-serif text-[#f8dada] mb-6 leading-tight">

          Welcome To Ridox Cafe

        </h2>

        <div className="w-32 h-[2px] bg-[#ffcc70] mx-auto rounded-full"></div>

      </div>

      {/* Content */}

      <div className="max-w-7xl mx-auto text-center">

        {/* Main Title */}

        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-10 text-[#f8dada]">

          A Place Where Taste Meets Luxury

        </h2>

        {/* Paragraphs */}

        <div className="max-w-6xl mx-auto space-y-8">

          <p className="text-gray-300 text-lg md:text-2xl leading-10">

            Ridox Cafe is a premium luxury restaurant designed for people who love elegant ambience, delicious food and unforgettable dining experiences.

            Our cafe combines modern interiors, handcrafted coffee and chef-special dishes to create a relaxing and classy atmosphere.

          </p>

          <p className="text-gray-400 text-base md:text-xl leading-10">

            From freshly brewed premium coffee to mouth-watering pizzas, burgers and desserts — every dish is prepared with passion and perfection.

            Whether you want a peaceful coffee break, family dinner or luxury dining experience, Ridox Cafe is the perfect destination.

          </p>

        </div>

        {/* Feature Boxes */}

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <div className="bg-[#24010d] border border-[#4b0d1e] rounded-3xl p-6 hover:-translate-y-2 duration-500">

            <h1 className="text-2xl font-bold text-[#ffcc70] mb-3">

              Premium

            </h1>

            <p className="text-gray-400 text-sm leading-7">

              Luxury Interior & Ambience

            </p>

          </div>

          <div className="bg-[#24010d] border border-[#4b0d1e] rounded-3xl p-6 hover:-translate-y-2 duration-500">

            <h1 className="text-2xl font-bold text-[#ffcc70] mb-3">

              Fresh

            </h1>

            <p className="text-gray-400 text-sm leading-7">

              Chef Special Fresh Food

            </p>

          </div>

          <div className="bg-[#24010d] border border-[#4b0d1e] rounded-3xl p-6 hover:-translate-y-2 duration-500">

            <h1 className="text-2xl font-bold text-[#ffcc70] mb-3">

              Coffee

            </h1>

            <p className="text-gray-400 text-sm leading-7">

              Handcrafted Premium Coffee

            </p>

          </div>

          <div className="bg-[#24010d] border border-[#4b0d1e] rounded-3xl p-6 hover:-translate-y-2 duration-500">

            <h1 className="text-2xl font-bold text-[#ffcc70] mb-3">

              Experience

            </h1>

            <p className="text-gray-400 text-sm leading-7">

              Relaxing Luxury Dining

            </p>

          </div>

        </div>

      </div>

    </section>

  )

}

export default About