import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct as editProductAPI } from "../../services/apiProducts";
import { toast } from "react-toastify";

export function useEditProduct() {
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();
  const { mutate: editProduct, isLoading } = useMutation({
    mutationFn: ({ id, formData }) => editProductAPI({ id, formData, token }),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("succseessfully updated product");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { editProduct, isLoading };
}
