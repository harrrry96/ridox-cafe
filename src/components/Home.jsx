import { motion } from "framer-motion";

function Home() {

  return (

    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop')",
      }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 h-full flex items-center px-6 md:px-24">

        <div>

          <p className="text-[#ffcc70] text-2xl italic mb-5">
            Luxury Coffee Experience
          </p>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight text-white">

            Welcome To <br />

            <span className="text-[#ffcc70]">
              Ridox Cafe
            </span>

          </h1>

          <p className="text-lg md:text-3xl text-gray-200 mt-8 mb-10">

            Delicious Food • Premium Coffee • Perfect Ambience

          </p>

          {/* BUTTONS */}

          <div className="flex gap-5 mt-6 flex-wrap">

            <a
              href="/RidoxMenu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#4b0d1e] to-[#7a1835] border border-[#ffcc70] text-white px-8 py-4 rounded-full text-lg font-semibold tracking-wide shadow-[0_0_20px_rgba(255,204,112,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,204,112,0.5)] hover:from-[#6e102c] hover:to-[#9b1b30] duration-300"
            >
              Explore Menu
            </a>

            <a
              href="/BucketList.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#4b0d1e] to-[#7a1835] border border-[#ffcc70] text-white px-8 py-4 rounded-full text-lg font-semibold tracking-wide shadow-[0_0_20px_rgba(255,204,112,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,204,112,0.5)] hover:from-[#6e102c] hover:to-[#9b1b30] duration-300"
            >
              Buffet List
            </a>

          </div>

        </div>

      </div>

    </motion.section>

  )

}

export default Home;