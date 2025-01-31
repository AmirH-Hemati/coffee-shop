import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProduct as removeProductAPI } from "../../services/apiProducts";
import { toast } from "react-toastify";

export function useRemoveProduct() {
  const queryClient = useQueryClient();
  const { mutate: removeProduct, isLoading } = useMutation({
    mutationFn: (id) => removeProductAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      toast.success("product succssussfully deleted");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { isLoading, removeProduct };
}
