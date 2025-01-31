import { useState } from "react";
import FormLabel from "../../ui/FormLabel";
import Input from "../../ui/Input";
import { useAddProduct } from "./useAddProduct";
import Button from "../../ui/Button";

function ProductForm() {
  const { addProduct } = useAddProduct();
  const [preview, setPreview] = useState("");
  console.log(preview);
  function handelCreateProduct(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    addProduct(formData);
  }
  return (
    <form onSubmit={handelCreateProduct} className="flex flex-col  gap-4 ">
      <FormLabel label="Name Product">
        <Input type="text" name="name" id="name" />
      </FormLabel>
      <FormLabel label="Price">
        <Input type="text" name="price" id="price" />
      </FormLabel>
      <FormLabel label="Description">
        <textarea
          name="description"
          id="description"
          className="outline-none w-1/2 text-black border-2 border-black/30 rounded-sm"
        ></textarea>
      </FormLabel>
      <label
        htmlFor="file"
        className="w-full border-2 border-black/30 border-dotted h-28 rounded-sm flex items-center justify-center cursor-pointer text-2xl"
      >
        {preview ? (
          <img src={preview} className="w-full object-cover h-full" />
        ) : (
          <p>+</p>
        )}
      </label>
      <input
        type="file"
        id="file"
        name="file"
        className="hidden"
        onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
      />
      <Button type="submit">create product</Button>
    </form>
  );
}

export default ProductForm;
