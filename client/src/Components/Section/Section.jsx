import React from "react";
import sectiontype from "./section";

function Section() {
  return (
    <div>
      <p className="sm:text-center sm:mt-6 font-extrabold text-nowrap text-2xl text-gray-700">
        FEATURED THEMES
      </p>
      <div className="sm:grid sm:grid-cols-3 m-2 gap-2 mt-5 md:grid md:grid-cols-6 text-center">
        {sectiontype.map((item, index) => {
          return (
            <div key={index}>
              <img className="" src={item.image} alt="" />
              <p className="">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section;
