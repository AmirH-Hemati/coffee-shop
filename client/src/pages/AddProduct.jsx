import ProductForm from "../featurs/admin/ProductForm";

function AddProduct() {
  return (
    <div className="flex flex-col gap-6 p-8">
    <h1 className="text-2xl font-semibold">Add Product</h1>
      <ProductForm />
    </div>
  );
}

export default AddProduct;
