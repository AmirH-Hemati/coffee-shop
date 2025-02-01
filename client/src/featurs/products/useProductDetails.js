import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductDetails } from "../../services/apiProducts";

export function useProductDetails() {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading } = useMutation({
    mutationFn: (addCart) => getProductDetails(addCart),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { mutate, data, isLoading };
}
