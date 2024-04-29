import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "../lib/supabase";
export async function favorie(productId, sellerId) {
  // Récupérer les produits favoris existants
  const existingProducts = await AsyncStorage.getItem("favoriteProducts");

  let favoriteProducts = [];
  if (existingProducts) {
    try {
      const parsedProducts = JSON.parse(existingProducts);
      if (Array.isArray(parsedProducts)) {
        favoriteProducts = parsedProducts;
      }
    } catch (error) {
      console.error(
        "Erreur lors de la conversion des produits favoris en tableau :",
        error
      );
    }
  }

  // Ajouter le nouveau produit aux favoris
  if (Array.isArray(favoriteProducts)) {
    favoriteProducts.push({ productId, sellerId });
  } else {
    console.error("favoriteProducts n'est pas un tableau");
  }

  // Stocker les produits favoris
  await AsyncStorage.setItem(
    "favoriteProducts",
    JSON.stringify(favoriteProducts)
  );
}

export async function fetchProductAndSellerInfo() {
  // Récupérer les produits favoris du stockage local
  const favoriteProductsString = await AsyncStorage.getItem("favoriteProducts");

  let favoriteProducts = [];
  if (favoriteProductsString) {
    try {
      const parsedProducts = JSON.parse(favoriteProductsString);
      if (Array.isArray(parsedProducts)) {
        favoriteProducts = parsedProducts;
      }
    } catch (error) {
      console.error(
        "Erreur lors de la conversion des produits favoris en tableau :",
        error
      );
      return;
    }
  }

  // Récupérer les informations de chaque produit favori
  const productAndSellerInfo = [];
  for (const { productId, sellerId } of favoriteProducts) {
    // Récupérer les informations du produit
    const { data: productData, error: productError } = await supabase
      .from("products")
      .select(
        "title,price,p_images,product_unit_price,starting_quantity,unit_type, id"
      )
      .eq("id", productId);

    if (productError) {
      console.error(
        "Erreur lors de la récupération des informations du produit :",
        productError
      );
      continue;
    }

    // Récupérer les informations du vendeur
    const { data: sellerData, error: sellerError } = await supabase
      .from("sellers")
      .select("profile_img,region,seller_name, id")
      .eq("id", sellerId);

    if (sellerError) {
      console.error(
        "Erreur lors de la récupération des informations du vendeur :",
        sellerError
      );
      continue;
    }

    productAndSellerInfo.push({ productData, sellerData });
    console.log("productAndSellerInfo", productData);
  }

  return productAndSellerInfo;
}
