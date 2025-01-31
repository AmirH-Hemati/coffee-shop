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
    <form onSubmit={handelCreateProduct} className="flex flex-col p-2 ">
      <FormData label="Name Product">
        <Input type="text" name="name" />
      </FormData>
      <FormData label="Price">
        <Input type="text" name="price" />
      </FormData>

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
