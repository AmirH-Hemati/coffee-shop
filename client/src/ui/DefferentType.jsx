import { useState } from "react";

function DefferentType({ items, title }) {
  const [type, setType] = useState(items[0]);
  return (
    <div className="bg-white space-y-2 text-sm md:text-md ">
      <p className="font-semibold text-lg ">{title} </p>
      <div className="flex justify-between text-xs md:text-sm font-semibold ">
        {items?.map((item) => (
          <p
            key={item}
            onClick={() => setType(item)}
            className={`px-2 py-1 w-20  md:w-24 flex justify-center cursor-pointer  ${
              type == item && "bg-[#00512C] text-center text-white rounded-3xl"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default DefferentType;
