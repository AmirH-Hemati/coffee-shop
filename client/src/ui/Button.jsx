function Button({ children, onClick, type }) {
  return (
    <button
      type={type}
      className=" w-1/4 font-semibold text-sm bg-[#00512c] p-3 text-white rounded-sm cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
