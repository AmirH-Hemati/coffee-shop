function Input({ type, name, style, id, onChange, value, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      className={`outline-none w-full md:w-1/2 bg-white text-black border-2 border-black/30 rounded-sm p-2 ${style}`}
    />
  );
}

export default Input;
