import { useQuery } from "@tanstack/react-query";
import { useAddCart } from "../../context/ShopingContext";
import { getProductDetails } from "../../services/apiProducts";

export function useProductDetails() {
  const { addCart } = useAddCart();
  const { productDetails, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductDetails(addCart),
  });
  return { productDetails, isLoading };
}
