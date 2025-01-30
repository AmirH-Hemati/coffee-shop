import { useAddProduct } from "./useAddProduct";

function ProductForm() {

  const { addProduct } = useAddProduct();
  function handelCreateProduct(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    addProduct(formData);
  }
  return (
    <form onSubmit={handelCreateProduct} className="flex flex-col p-2 ">
      <input
        type="text"
        placeholder="enter name product ..."
        name="name"
        className="p-2 "
      />
      <input
        type="text"
        placeholder="enter price"
        name="price"
        className="p-2 "
      />
      <input type="file" name="file" className="p-2 " />
      <button
        type="submit"
        className="bg-red-500 text-white p-2 cursor-pointer"
      >
        {" "}
        create product
      </button>
    </form>
  );
}

export default ProductForm;
