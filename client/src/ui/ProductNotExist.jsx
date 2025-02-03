function ProductNotExist({ message }) {
  return (
    <div
      style={{ backgroundImage: `url("/background.png")` }}
      className="bg-no-repeat bg-cover bg-center h-full flex  justify-center items-center font-montserrat text-lg md:text-2xl text-white "
    >
      <p className="flex flex-col justify-center">
        <span>There are no favorite products.</span>
        <span className="text-gray-100 text-base md:text-lg">{message}</span>
      </p>
    </div>
  );
}

export default ProductNotExist;

