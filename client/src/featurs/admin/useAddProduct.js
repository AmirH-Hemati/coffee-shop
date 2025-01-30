import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct as addProductAPI } from "../../services/apiProducts";
import { toast } from "react-toastify";

export function useAddProduct() {
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();
  const { mutate: addProduct, isLoading } = useMutation({
    mutationFn: (formData) => addProductAPI(formData, token),
    onSuccess: (product) => {
      console.log(product);
      queryClient.setQueriesData(["product", product]);
      toast.success("seccssessfully created product");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { addProduct, isLoading };
}
