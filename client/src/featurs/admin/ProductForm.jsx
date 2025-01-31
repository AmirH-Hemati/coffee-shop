import FormData from "../../ui/FormData";
import Input from "../../ui/Input";
import { useAddProduct } from "./useAddProduct";

function ProductForm() {
  const { addProduct } = useAddProduct();
  function handelCreateProduct(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    addProduct(formData);
  }
  return (
    <form onSubmit={handelCreateProduct} className="flex flex-col p-2 gap-4 ">
      <FormData label="Name Product">
        <Input type="text" name="name" id="name" />
      </FormData>
      <FormData label="Price">
        <Input type="text" name="price" id="price" />
      </FormData>
      <FormData label="Description">
        <textarea
          name="description"
          id="description"
          className="outline-none w-1/2 text-black border-2 border-black/30 rounded-sm"
        ></textarea>
      </FormData>
      <label
        htmlFor="file"
        className="w-full border-2 border-black/30 border-dotted h-16 rounded-sm flex items-center justify-center cursor-pointer text-2xl"
      >
        +
      </label>
      <input type="file" id="file" name="file" className="hidden" />
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
