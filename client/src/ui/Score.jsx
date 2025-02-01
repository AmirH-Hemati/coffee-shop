import { Star1 } from "iconsax-react";

function Score({ rateProduct }) {
  return (
    <div className="bg-[#c1925b] text-sm md:text-base font-semibold flex items-center justify-center text-white px-3 py-0.5 gap-1 rounded-2xl ">
      <span>
        <Star1 size="20" color="#fff" variant="Bold" />
      </span>
      <span>{rateProduct}</span>
    </div>
  );
}

export default Score;
