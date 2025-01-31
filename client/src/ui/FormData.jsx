function FormData({ label, children }) {
  return (
    <div className="grid grid-cols-3">
      <label htmlFor="" className="text-lg">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormData;
