import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getProductDetails as getProductDetaailsAPI } from "../../services/apiProducts";

export function useProductDetails() {
  const queryClient = useQueryClient();
  const {
    mutate: getProductDetails,
    data: products,
    isLoading,
  } = useMutation({
    mutationFn: (addCart) => getProductDetaailsAPI(addCart),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { getProductDetails, products, isLoading };
}
