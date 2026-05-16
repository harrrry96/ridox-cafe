import {
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="bg-[#140107] text-white border-t border-[#3b0615]">

      {/* Main Footer */}

      <div className="grid md:grid-cols-3">

        {/* Left - Opening Hours */}

        <div className="px-8 py-8">

          <h2 className="text-3xl md:text-5*4 font-bold text-[#ffcc70] mb-6 font-serif flex items-center gap-1">

            <FaClock />

            Opening Hours

          </h2>

          <div className="space-y-4 text-gray-300 text-xl max-w-[280px]">

            <p className="flex justify-between">

              <span>Mon - Fri</span>

              <span>9AM - 11PM</span>

            </p>

            <p className="flex justify-between">

              <span>Sat - Sun</span>

              <span>10AM - 12PM</span>

            </p>

          </div>

        </div>

        {/* Center - Logo */}

        <div className="flex items-center justify-center py-8">

          <h1 className="text-5xl md:text-5x4 font-bold text-[#f8dada] font-serif text-center">

            Redox Cafe

          </h1>

        </div>

        {/* Right - Contact */}

        <div className="px-8 py-8 flex flex-col items-end">

          <h2 className="text-3xl md:text-4x5 font-bold text-[#ffcc70] mb-6 font-serif text-right w-full">

            Contact Info

          </h2>

          <div className="space-y-5 text-gray-300 text-xl w-full flex flex-col items-end">

            <div className="flex items-center gap-4">

              <FaMapMarkerAlt className="text-[#ffcc70]" />

              <p>Lucknow, Uttar Pradesh</p>

            </div>

           <div className="flex items-center gap-4">

              <FaPhoneAlt className="text-[#ffcc70]" />

              <p>+91 9876543210</p>

            </div>

            <div className="flex items-center gap-4">

              <FaEnvelope className="text-[#ffcc70]" />

              <p>redoxcafe@gmail.com</p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-[#3b0615] py-4 text-center text-gray-400 text-sm md:text-base">

        © 2026 Redox Cafe. All Rights Reserved.
        <span className="mx-3 text-[#ffcc70]">|</span>
        Developed By <span className="text-[#ffcc70]">Mohammad Aman Khan</span>

      </div>

    </footer>

  )

}

export default Footer