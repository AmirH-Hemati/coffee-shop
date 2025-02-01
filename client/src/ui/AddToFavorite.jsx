import { Heart } from "iconsax-react";
import { useFavorite } from "../context/FavoriteContext";

function AddToFavorite({ product }) {
  const { addToFavorites, favorites } = useFavorite();
  return (
    <Heart
      size={32}
      color="red"
      variant={favorites.find((f) => f.id == product?.id) ? "Bold" : null}
      onClick={() => addToFavorites(product)}
    />
  );
}

export default AddToFavorite;
