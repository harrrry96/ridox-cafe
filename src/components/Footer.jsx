import {
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#140107] text-white border-t border-[#3b0615] overflow-hidden">

      {/* TOP FOOTER */}
      <div
        className="
        flex justify-between items-center
        px-4 md:px-10 py-6
        gap-4
        "
      >

        {/* LEFT */}
        <div className="w-1/3">

          <h2
            className="
            text-[#ffcc70]
            text-lg sm:text-2xl md:text-5xl
            font-bold font-serif
            flex items-center gap-2 md:gap-4
            mb-3
            "
          >
            <FaClock />
            Opening Hours
          </h2>

          <div
            className="
            text-[11px] sm:text-lg md:text-3xl
            text-gray-200
            space-y-2
            "
          >

            <div className="flex justify-between max-w-[420px]">
              <span>Mon - Fri</span>
              <span>9AM - 11PM</span>
            </div>

            <div className="flex justify-between max-w-[420px]">
              <span>Sat - Sun</span>
              <span>10AM - 12PM</span>
            </div>

          </div>

        </div>

        {/* CENTER */}
        <div className="w-1/3 text-center">

          <h1
            className="
            text-[#f7dede]
            text-3xl sm:text-5xl md:text-8xl
            font-bold font-serif
            "
          >
            Ridox Cafe
          </h1>

        </div>

        {/* RIGHT */}
        <div className="w-1/3 flex flex-col items-end">

          <h2
            className="
            text-[#ffcc70]
            text-lg sm:text-2xl md:text-5xl
            font-bold font-serif
            mb-3
            "
          >
            Contact Us
          </h2>

          <div
            className="
            text-[11px] sm:text-lg md:text-3xl
            text-gray-200
            space-y-2
            "
          >

            <div className="flex items-center gap-2 md:gap-4 justify-end">
              <FaMapMarkerAlt className="text-[#ffcc70]" />
              <p>Lucknow</p>
            </div>

            <div className="flex items-center gap-2 md:gap-4 justify-end">
              <FaPhoneAlt className="text-[#ffcc70]" />
              <p>7518710079</p>
            </div>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center gap-2 md:gap-4
              justify-end
              hover:text-[#ffcc70]
              duration-300
              "
            >
              <FaInstagram className="text-[#ffcc70]" />
              <p></p>
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div
        className="
        border-t border-[#3b0615]
        py-3 px-2
        text-center
        text-gray-400
        text-[10px] sm:text-sm md:text-lg
        "
      >

        © 2026 Ridox Cafe. All Rights Reserved.

        <span className="mx-2 text-[#ffcc70]">|</span>

        Developed By{" "}

        <a
          href="https://webamankhan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
          text-[#ffcc70]
          hover:text-white
          duration-300
          font-semibold
          "
        >
          Mohammad Aman Khan
        </a>

      </div>

    </footer>
  );
}

export default Footer;