import { useState } from "react";
import { useEditProduct } from "./useEditProduct";
import FormLabel from "../../ui/FormLabel";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function EditProductForm({ p, onClose }) {
  const { editProduct } = useEditProduct();
  const [name, setName] = useState(p?.name);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(p?.price);
  const [file, setFile] = useState("");
  function handelEditProduct(e) {
    e.preventDefault();
    console.log("test");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("file", file);

    editProduct({ id: p?._id, formData });
  }
  return (
    <form onSubmit={handelEditProduct} className="flex flex-col p-2  gap-6">
      <FormLabel label="Name Product">
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormLabel>
      <FormLabel label="Name Product">
        <Input
          type="text"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormLabel>
      <FormLabel label="Description">
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="outline-none w-1/2 text-black border-2 border-black/30 rounded-sm"
        ></textarea>
      </FormLabel>
      <input
        type="file"
        name="file"
        className="p-2"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <div className="flex gap-4">
        <Button type="reset" onClick={onClose}>
          Cansel
        </Button>
        <Button type="submit">Edit Product</Button>
      </div>
    </form>
  );
}

export default EditProductForm;
