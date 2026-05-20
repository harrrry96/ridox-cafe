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
        max-w-[1900px]
        mx-auto
        grid grid-cols-3
        items-start
        gap-3 md:gap-8
        px-3 md:px-10
        py-6
        "
      >

        {/* LEFT */}
        <div>

          <h2
            className="
            text-[#ffcc70]
            text-[14px] sm:text-2xl md:text-4xl
            font-bold font-serif
            flex items-center gap-2 md:gap-3
            mb-3
            whitespace-nowrap
            "
          >
            <FaClock />
            Opening Hours
          </h2>

          <div
            className="
            text-white
            text-[11px] sm:text-lg md:text-2xl
            space-y-2
            "
          >

            <div className="flex justify-between gap-2 md:gap-10">
              <span>Mon - Fri</span>
              <span>9AM - 11PM</span>
            </div>

            <div className="flex justify-between gap-2 md:gap-10">
              <span>Sat - Sun</span>
              <span>10AM - 12PM</span>
            </div>

          </div>

        </div>

       {/* CENTER */}
<div className="flex justify-center items-start pt-130">

  <h1
    className="
    text-[#f7dede]
    text-2xl sm:text-4xl md:text-6xl
    font-bold font-serif
    whitespace-nowrap
    text-center
    "
  >
    Ridox Cafe
  </h1>

</div>
        {/* RIGHT */}
        <div className="text-right">

          <h2
            className="
            text-[#ffcc70]
            text-[14px] sm:text-2xl md:text-4xl
            font-bold font-serif
            mb-3
            whitespace-nowrap
            "
          >
            Contact Us
          </h2>

          <div
            className="
            flex flex-col
            gap-2
            text-white
            text-[11px] sm:text-lg md:text-2xl
            "
          >

            {/* LOCATION */}
            <a
              href="https://maps.google.com/?q=529C/009+Opposite+Jagrani+Hospital+Lucknow"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center
              justify-end
              gap-2
              hover:text-[#ffcc70]
              duration-300
              whitespace-nowrap
              "
            >
              <FaMapMarkerAlt className="text-[#ffcc70]" />
              <span>Lucknow</span>
            </a>

            {/* PHONE */}
            <a
              href="https://wa.me/917518710079"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center
              justify-end
              gap-2
              hover:text-[#ffcc70]
              duration-300
              whitespace-nowrap
              "
            >
              <FaPhoneAlt className="text-[#ffcc70]" />
              <span>7518710079</span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/ridoxcafe06?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center
              justify-end
              gap-2
              hover:text-[#ffcc70]
              duration-300
              whitespace-nowrap
              "
            >
              <FaInstagram className="text-[#ffcc70]" />
              <span>@ridoxcafe06</span>
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER */}
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