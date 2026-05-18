import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-24">

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >

          {/* SMALL TEXT */}
          <p className="text-[#ffcc70] text-xl md:text-3xl italic tracking-[4px] mb-6">
            Luxury Coffee Experience
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight">

            Welcome To <br />

            <span className="text-[#ffcc70] drop-shadow-[0_0_20px_rgba(255,204,112,0.5)]">
              Ridox Cafe
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-200 text-lg md:text-2xl mt-8 leading-relaxed max-w-2xl">

            Enjoy handcrafted coffee, delicious cuisine,
            and an unforgettable luxury dining experience
            in the heart of the city.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-10">

            {/* MENU BUTTON */}
            <a
              href="/RidoxMenu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-semibold text-white border border-[#ffcc70]
              bg-gradient-to-r from-[#4b0d1e] to-[#7a1835]
              hover:scale-105 hover:shadow-[0_0_30px_rgba(255,204,112,0.4)]
              duration-300"
            >
              Explore Menu
            </a>

            {/* BUFFET BUTTON */}
            <a
              href="/BucketList.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-semibold text-[#ffcc70]
              border border-[#ffcc70]
              hover:bg-[#ffcc70] hover:text-black
              hover:scale-105 duration-300"
            >
              Buffet List
            </a>

          </div>

        </motion.div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#2b0008] to-transparent"></div>

    </motion.section>
  );
}

export default Home;