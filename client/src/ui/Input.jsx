function Input({ type, name, style, id, onChange, value }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      className={`outline-none w-1/2 text-black border-2 border-black/30 rounded-sm p-2 ${style}`}
    />
  );
}

export default Input;
