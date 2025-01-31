function FormData({ label, children }) {
  return (
    <div className="flex justify-between ">
      <label htmlFor={children?.props?.id} className="text-lg">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormData;
