import { Heart } from "iconsax-react";
import { useFavorite } from "../context/FavoriteContext";

function AddToFavorite({ product }) {
  const { addToFavorites } = useFavorite();
  return (
    <Heart size={32} color="black" onClick={() => addToFavorites(product)} />
  );
}

export default AddToFavorite;
