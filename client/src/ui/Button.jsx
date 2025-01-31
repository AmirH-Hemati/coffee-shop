function Button({ children, onClick }) {
  return (
    <button
      className=" w-1/4 font-semibold text-sm bg-[#00512c] p-3 text-white rounded-sm cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
