function Input({ type, name, style }) {
  return (
    <input
      type={type}
      name={name}
      className={`outline-none  text-black border-2 border-black/30 rounded-sm p-2 ${style}`}
    />
  );
}

export default Input;
