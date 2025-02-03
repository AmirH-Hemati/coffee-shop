import ProductForm from "../featurs/admin/ProductForm";

function AddProduct() {
  return (
    <div className="flex h-full w-full  flex-col md:gap-6 md:p-8 overflow-auto">
      <h1 className="text-lg md:text-2xl font-semibold">Add Product</h1>
      <ProductForm />
    </div>
  );
}

export default AddProduct;
