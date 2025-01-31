import { Edit, Trash } from "iconsax-react";
import { useProducts } from "../featurs/products/useProducts";
import Modal from "../ui/Modal";
import EditProductForm from "../featurs/products/EditProductForm";
import { useRemoveProduct } from "../featurs/products/useRemoveProduct";

function EditProduct() {
  const { products } = useProducts();
  const { removeProduct } = useRemoveProduct();
  return (
    <div className="p-8 flex flex-col h-full">
      <h1 className=" text-3xl font-semibold">All Products</h1>
      <div className="font-semibold mt-8 grid grid-cols-5 w-full bg-[#F9FAFB]  gap-6 rounded-t-md p-4 border-2 border-black/10">
        <p>image</p>
        <p>name</p>
        <p>price</p>
        <p>price</p>
        <p></p>
      </div>
      <ul className="bg-white w-full   flex flex-col  overflow-auto h-4/5    ">
        {products?.data.map((p) => (
          <li
            key={p._id}
            className="grid grid-cols-5 w-full bg-white  px-4 py-6 gap-6 border-2 border-black/10"
          >
            <img src={p.image} alt="" className="w-20  object-cover" />
            <p className="truncate flex items-center">{p.name}</p>
            <p className="flex items-center">{p.price}</p>
            <p className="flex items-center">{p.price}</p>
            <div className="flex items-center gap-7">
              <Modal>
                <Modal.Open openies="openEditModal">
                  <Edit size="32" color="#00512c" className="cursor-pointer" />
                </Modal.Open>
                <Modal.Window name={`openEditModal`}>
                  <EditProductForm p={p} />
                </Modal.Window>
              </Modal>
              <Trash
                size="32"
                color="#00512c"
                onClick={() => removeProduct(p._id)}
                className="cursor-pointer"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditProduct;
