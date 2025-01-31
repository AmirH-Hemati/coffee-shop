import ProductForm from "../featurs/admin/ProductForm";
import Modal from "../ui/Modal";

function AddProduct() {
  return (
    <>
      <ProductForm />
      <Modal>
        <Modal.Open openies="test">
          <button>open modal</button>
        </Modal.Open>
        <Modal.Window name="test">
          <p>salam helow team</p>
        </Modal.Window>
      </Modal>
    </>
  );
}

export default AddProduct;
