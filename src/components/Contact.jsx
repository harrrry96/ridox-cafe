function Contact() {

  return (

    <section
      id="contact"
      className="bg-[#2b0f18] text-white py-24 px-6 md:px-16"
    >

      {/* Heading */}

      <div className="text-center mb-20">

        <p className="text-[#ffcc70] text-2xl italic mb-4">
          Get In Touch
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#f5d0d0]">

          Contact Us

        </h1>

      </div>

      {/* Main Grid */}

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div className="bg-[#4b0d1e] p-10 rounded-3xl shadow-2xl">

          <h2 className="text-4xl font-bold text-[#ffcc70] mb-8">

            Visit Redox Cafe

          </h2>

          <div className="space-y-6 text-xl text-gray-300">

            <p>
              📍 Lucknow, Uttar Pradesh
            </p>

            <p>
              ☎ +91 9876543210
            </p>

            <p>
              ✉ redoxcafe@gmail.com
            </p>

            <p>
              ⏰ Open : 9AM - 11PM
            </p>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-[#4b0d1e] p-10 rounded-3xl shadow-2xl">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-5 p-5 rounded-2xl bg-[#2b0f18] outline-none border border-transparent focus:border-[#ffcc70]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-5 p-5 rounded-2xl bg-[#2b0f18] outline-none border border-transparent focus:border-[#ffcc70]"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full mb-5 p-5 rounded-2xl bg-[#2b0f18] outline-none border border-transparent focus:border-[#ffcc70]"
          ></textarea>

          <button className="w-full bg-[#ffcc70] text-black py-5 rounded-2xl text-xl font-bold hover:scale-105 duration-300 hover:bg-[#ffd966]">

            Send Message

          </button>

        </div>

      </div>

    </section>

  )

}

export default Contact