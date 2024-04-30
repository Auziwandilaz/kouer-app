import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StarRating from "react-native-star-rating";
import {
  Image,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Footer } from "./footer";
import { Picker } from "@react-native-picker/picker";
import { supabase } from "../lib/supabase";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export default function Panier({ navigation }) {
  const [cart, setCart] = useState([]);

  const [productsVisible, setProductsVisible] = useState({});

  // Modification de l'état lors du clic sur le bouton
  const toggleProductsVisible = (sellerId2) => {
    setProductsVisible({
      ...productsVisible,
      [sellerId2]: !productsVisible[sellerId2],
    });
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.product.product_unit_price * item.quantity;
  }, 0);
  useEffect(() => {
    const fetchCart = async () => {
      const cartString = await AsyncStorage.getItem("cart");
      console.log("Cart from AsyncStorage:", cartString);
      const cartItems = cartString ? JSON.parse(cartString) : [];
      const cartWithDetails = await Promise.all(
        cartItems.map(async (item) => {
          const { data: product, error: productError } = await supabase
            .from("products")
            .select(
              "title, p_images, product_unit_price, unit_type, starting_quantity"
            )
            .eq("id", item.productId)
            .single();
          const { data: seller, error: sellerError } = await supabase
            .from("sellers")
            .select("profile_img, seller_name")
            .eq("id", item.sellerId2)
            .single();
          if (productError) {
            console.error("Error fetching product:", productError);
          }
          if (sellerError) {
            console.error("Error fetching seller:", sellerError);
          }
          return {
            ...item,
            product,
            seller,
          };
        })
      );
      setCart(cartWithDetails);
      console.log("Cart with details:", cartWithDetails);
    };

    fetchCart();
  }, []);

  const handleQuantityChange = (sellerId2, productId, value) => {
    console.log(
      "Changing quantity for product",
      productId,
      "from seller",
      sellerId2,
      "to",
      value
    );
    const newCart = [...cart];
    const itemIndex = newCart.findIndex(
      (item) => item.sellerId2 === sellerId2 && item.productId === productId
    );
    if (itemIndex === -1) {
      console.error(
        `No product with ID ${productId} from seller ${sellerId2} in the cart.`
      );
      return;
    }
    newCart[itemIndex].quantity = Number(value);
    setCart(newCart);
    AsyncStorage.setItem("cart", JSON.stringify(newCart));
    console.log("New cart:", newCart);
  };

  const groupedCart = cart.reduce((groups, item) => {
    const key = item.sellerId2;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});

  const totalPriceseller = Object.keys(groupedCart).reduce(
    (totals, sellerId2) => {
      totals[sellerId2] = groupedCart[sellerId2].reduce((total, item) => {
        return total + item.product.product_unit_price * item.quantity;
      }, 0);
      return totals;
    },
    {}
  );

  const handleRemoveItem = (sellerId2, productId) => {
    const newCart = cart.filter(
      (item) => item.sellerId2 !== sellerId2 || item.productId !== productId
    );
    setCart(newCart);
    AsyncStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#ADE283", "#4EA04C"]}
        start={{ x: 0, y: -0.75 }}
        end={{ x: 0, y: 1 }}
        style={{
          alignItems: "flex-start",
          backgroundColor: "#4EA04C",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          height: screenHeight * 0.15,
          justifyContent: "center",
          paddingHorizontal: "5%",
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.accountInfo}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../assets/img/back.png")}
              style={styles.accountImage}
            ></Image>
          </TouchableOpacity>
          <View style={styles.accountInfo}>
            <Image
              source={require("../assets/img/panier_white.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ color: "#fff", fontSize: 20 }}>Mon panier</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={{ padding: 10, height: screenHeight }}>
        {cart.length === 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../assets/img/empty_panier.png")}
              style={{ width: 100, height: 100 }}
            />
            <Text
              style={{
                fontSize: 20,
                color: "#505050",
                textAlign: "center",
                padding: 10,
              }}
            >
              Vous n’avez pas d’article dans votre panier
            </Text>
          </View>
        ) : (
          <View>
            <ScrollView>
              <View style={{ marginBottom: screenHeight * 0.3 }}>
                {Object.values(
                  cart.reduce((groups, item) => {
                    const key = item.sellerId2;
                    if (!groups[key]) {
                      groups[key] = [];
                    }
                    groups[key].push(item);
                    return groups;
                  }, {})
                ).map((group, index) => (
                  <View key={index} style={styles.card}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={{ uri: group[0].seller.profile_img }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                      />
                      <Text
                        style={{
                          marginHorizontal: 10,
                          fontSize: 15,
                          color: "#505050",
                        }}
                      >
                        {group[0].seller.seller_name}
                      </Text>

                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            toggleProductsVisible(group[0].sellerId2)
                          }
                        >
                          <Text style={{ textAlign: "right" }}>
                            {productsVisible[group[0].sellerId2]
                              ? "Réduire"
                              : "Afficher"}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {group.map(
                      (item, itemIndex) =>
                        productsVisible[item.sellerId2] && (
                          <View key={itemIndex} style={styles.item}>
                            <View style={{ flexDirection: "row" }}>
                              <Image
                                source={{ uri: item.product.p_images[0] }}
                                style={{
                                  width: 80,
                                  height: 80,
                                  borderRadius: 10,
                                }}
                              />
                              <Text
                                style={{
                                  flexShrink: 1,
                                  color: "#505050",
                                  margin: 10,
                                }}
                                ellipsizeMode="tail"
                              >
                                {item.product.title}
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingVertical: 10,
                              }}
                            >
                              <View
                                style={{
                                  width: 100,
                                  backgroundColor: "#E3E3E3",
                                  height: 30,
                                  borderRadius: 5,
                                  justifyContent: "center",
                                }}
                              >
                                <Picker
                                  selectedValue={item.quantity}
                                  onValueChange={(value) =>
                                    handleQuantityChange(
                                      item.sellerId2,
                                      item.productId,
                                      value
                                    )
                                  }
                                >
                                  {[...Array(40).keys()].map((value) => (
                                    <Picker.Item
                                      key={value + 1}
                                      label={String(value + 1)}
                                      value={value + 1}
                                    />
                                  ))}
                                </Picker>
                              </View>
                              <View>
                                <View>
                                  <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={3 /*product.rating*/}
                                    starSize={12}
                                    fullStarColor={"gold"}
                                  />
                                  <Text>4 avis</Text>
                                </View>
                                <View
                                  style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}
                                >
                                  <Text
                                    style={{ color: "#4EA04C", fontSize: 20 }}
                                  >
                                    {item.product.product_unit_price}€
                                  </Text>
                                  <Text
                                    style={{
                                      marginHorizontal: 10,
                                      color: "#AAAAAA",
                                      fontSize: 12,
                                    }}
                                  >
                                    /{item.product.starting_quantity}
                                    {item.product.unit_type}
                                  </Text>
                                </View>
                              </View>
                            </View>
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "flex-end",
                              }}
                            >
                              <TouchableOpacity style={{ marginEnd: 10 }}>
                                <Text
                                  style={{
                                    color: "#1B4D3E",
                                    textDecorationLine: "underline",
                                  }}
                                >
                                  Mettre de côté
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() =>
                                  handleRemoveItem(
                                    item.sellerId2,
                                    item.productId
                                  )
                                }
                              >
                                <Text
                                  style={{
                                    color: "#1B4D3E",
                                    textDecorationLine: "underline",
                                  }}
                                >
                                  Supprimer
                                </Text>
                              </TouchableOpacity>
                            </View>

                            <View
                              style={{
                                height: 2,
                                backgroundColor: "#ddd",
                                marginVertical: 10,
                              }}
                            />
                          </View>
                        )
                    )}
                    <View>
                      <Text>
                        {"TOTAL : " +
                          totalPriceseller[group[0].sellerId2] +
                          " €"}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 100,
          backgroundColor: "#fff",
          padding: 10,
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
        }}
      >
        {/* Afficher le prix total */}
        <Text style={{ color: "#505050", fontSize: 15, paddingVertical: 5 }}>
          Total : {totalPrice} €
        </Text>

        {/* Bouton pour passer la commande */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Livraison")}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#EEBA00",
            padding: 10,
            borderRadius: 999,
            width: "80%",
          }}
        >
          <Text style={{ color: "#505050", fontSize: 15 }}>
            Passer la commande
          </Text>
          <Image source={require("../assets/img/fleche_cart.png")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: screenHeight * 0.1,
    width: "100%",
    paddingTop: screenHeight * 0.03,
  },
  backButton: {
    padding: 10,
  },
  accountInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  card: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
});
