import { Edit, Trash } from "iconsax-react";
import { useProducts } from "../featurs/products/useProducts";

function EditProduct() {
  const { products } = useProducts();
  return (
    <li className="bg-white w-full   flex flex-col gap-2 overflow-auto h-2/3 p-2">
      <div className="grid grid-cols-5 w-full bg-red-300 p-2 gap-6">
        <p>image</p>
        <p>name</p>
        <p>price</p>
        <p>price</p>
        <p></p>
      </div>
      {products?.data.map((p) => (
        <div key={p._id} className="grid grid-cols-5 w-full bg-red-300 p-2 gap-6">
          <img src={p.image} alt="" className="w-12 h-12 object-cover" />
          <p className="truncate ">{p.name}</p>
          <p>{p.price}</p>
          <p>{p.price}</p>
          <div className="flex items-center gap-4">
            <Edit size="32" color="#FF8A65" />
            <Trash size="32" color="#FF8A65" />
          </div>
        </div>
      ))}
    </li>
  );
}

export default EditProduct;
