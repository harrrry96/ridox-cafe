import { useState } from "react";
import menuItems from "../data/menuData";

function Menu() {

  const [items, setItems] = useState(menuItems);

  const filterItem = (category) => {

    if (category === "All") {
      setItems(menuItems);
      return;
    }

    const updatedItems = menuItems.filter(
      (curElem) => curElem.category === category
    );

    setItems(updatedItems);

  };

  return (

    <section
      id="menu"
      className="bg-[#22020d] py-20 px-6 md:px-12 text-white"
    >

      {/* Heading */}

      <div className="text-center mb-12">

        <p className="text-[#ffcc70] text-lg italic mb-2">

          Delicious Taste

        </p>

        <div className="w-20 h-[2px] bg-[#ffcc70] mx-auto mb-4"></div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#f8dada] font-serif">

          Our Special Menu

        </h1>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {items.map((item) => (

          <div
            key={item.id}
            className="bg-[#3b0615] border border-[#6a2335] rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 duration-500 w-full"
          >

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover hover:scale-110 duration-500"
              />

            </div>

            {/* Content */}

            <div className="p-5">

              <p className="text-[#ffcc70] text-sm mb-2">

                {item.category}

              </p>

              <h2 className="text-2xl font-bold font-serif mb-3 text-[#fff5f5]">

                {item.name}

              </h2>

              <div className="w-20 h-[1px] bg-[#ffcc70] mb-4"></div>

              <h3 className="text-2xl text-[#ffcc70] font-bold">

                {item.price}

              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>

  )

}

export default Menu