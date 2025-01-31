function FormData({ label, children }) {
  return (
    <div className="flex justify-between border-b-2 border-black/10 py-6 ">
      <label htmlFor={children?.props?.id} className="text-lg">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormData;
