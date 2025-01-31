import { useState } from "react";

function EditProductForm({ p }) {
  const [name, setName] = useState(p?.name);
  const [price, setPrice] = useState(p?.price);
  const [file, setFile] = useState(p?.name);
  function handelEditProduct(e) {
    e.preventDefault();
    console.log("test");
  }
  return (
    <form onSubmit={handelEditProduct} className="flex flex-col p-2 ">
      <input
        type="text"
        placeholder="enter name product ..."
        name="name"
        className="p-2 "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter price"
        name="price"
        className="p-2 "
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="file" name="file" className="p-2 " />
      <button
        type="submit"
        className="bg-red-500 text-white p-2 cursor-pointer"
      >
        edit product
      </button>
    </form>
  );
}

export default EditProductForm;
