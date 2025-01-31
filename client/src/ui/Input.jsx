function Input({ type, name, style, id }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`outline-none w-1/2 text-black border-2 border-black/30 rounded-sm p-2 ${style}`}
    />
  );
}

export default Input;
