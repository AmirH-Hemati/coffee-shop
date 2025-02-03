function Button({ children, onClick, type, typeButton, style }) {
  let styles;
  if (typeButton == "small")
    styles =
      "w-16  p-2 rounded-sm font-semibold text-sm cursor-pointer bg-[#00512c]  flex items-center justify-center  text-white";
  else if (typeButton == "large")
    styles =
      "w-1/2 md:w-1/3  font-semibold text-sm bg-[#00512c] py-3 flex items-center justify-center  text-white rounded-sm cursor-pointer";
  else if (typeButton == "circleButton")
    styles =
      "w-6 h-6 rounded-full font-semibold text-sm cursor-pointer bg-[#00512c]  flex items-center justify-center  text-white";
  else if (typeButton == "cansel")
    styles =
      "w-1/2 md:w-1/3  font-semibold text-sm bg-gray-400 py-3 flex items-center justify-center  text-white rounded-sm cursor-pointer";
  return (
    <button type={type} className={`${style} ${styles} `} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
