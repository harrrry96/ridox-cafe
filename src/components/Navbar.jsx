import logo from "../assets/ridox-logo.png";

function Navbar() {

  return (

    <nav className="bg-[#4b0d1e]/80 backdrop-blur-md fixed w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 shadow-2xl border-b border-[#ffcc70]/20">

      {/* LEFT SIDE */}

      <div className="flex items-center gap-4">

        <img
          src={logo}
          alt="Ridox Cafe Logo"
          className="w-14 h-14 object-contain rounded-full border-2 border-[#ffcc70] shadow-lg"
        />

        <h1 className="text-3xl md:text-5xl font-bold text-[#f5d0d0] tracking-wide">

          Ridox Cafe

        </h1>

      </div>

      {/* RIGHT SIDE */}

      <ul className="hidden md:flex gap-10 text-xl font-semibold text-white">

        <a href="#home">
          <li className="hover:text-[#ffcc70] duration-300 cursor-pointer">
            Home
          </li>
        </a>

        <a href="#about">
          <li className="hover:text-[#ffcc70] duration-300 cursor-pointer">
            About
          </li>
        </a>

      </ul>

    </nav>

  )

}

export default Navbar;