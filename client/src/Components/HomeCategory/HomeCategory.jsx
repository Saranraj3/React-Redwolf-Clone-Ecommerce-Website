import React from "react";

function HomeCategory(props) {
  return (
    <div className="text-white sm:ml-1 w-[100%] mt-2">
      <img src={props.image} alt="" />
      <h4 className="underline sm:text-xs text-sm">{props.name}</h4>
      <h5 className="text-red-500 text-xs">{props.brand}</h5>
      <p className="text-sm">{props.newprice}</p>
      <del>
        <p className="text-xs">{props.oldprice}</p>
      </del>
    </div>
  );
}

export default HomeCategory;
