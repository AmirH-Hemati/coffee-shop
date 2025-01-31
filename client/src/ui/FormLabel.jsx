function FormLabel({ label, children }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-black/10 py-6 ">
      <label htmlFor={children?.props?.id} className="flex items-center">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormLabel;
