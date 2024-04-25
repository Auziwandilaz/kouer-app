import React, { useState, useEffect, useRef } from "react";
import StarRating from "react-native-star-rating";
import RenderHTML from "react-native-render-html";
import Footer from "./footer";
import { htmlToText } from "html-to-text";
import IconSearch from "../components/svg/icon_search";
import { LinearGradient } from "expo-linear-gradient";
import { SearchProvider, Search_bar } from "./search_bar";

import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  TextInput,
  Button,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "../lib/supabase";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Produit({ navigation, route }) {
  const { productId } = route.params;

  const [product, setProduct] = useState(null);

  const [seller, setSeller] = useState(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const [sellerProducts, setSellerProducts] = useState([]);

  const text = htmlToText(product?.description || "");

  const truncatedText = text.slice(0, 200);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const addToCart = async (productId, sellerId2) => {
    console.log(
      `addToCart called with productId: ${productId} and sellerId: ${sellerId2}`
    ); // Log to check function call

    let cartString = await AsyncStorage.getItem("cart");
    let cart = cartString ? JSON.parse(cartString) : [];

    const itemIndex = cart.findIndex(
      (item) => item.productId === productId && item.sellerId2 === sellerId2
    );

    if (itemIndex !== -1) {
      // Item already in cart, increase quantity
      cart[itemIndex].quantity += 1;
    } else {
      // Item not in cart, add new item
      const item = { productId, sellerId2, quantity: 1 };
      cart.push(item);
    }

    await AsyncStorage.setItem("cart", JSON.stringify(cart));

    console.log(`Cart updated: ${JSON.stringify(cart)}`); // Log to check cart update
  };

  console.log(`productId: ${productId}, sellerId: ${seller?.id}`); // Log to check values

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  useEffect(() => {
    if (product && product.seller_id) {
      fetchSeller(product.seller_id);
      console.log("product.seller_id", product.seller_id);
    }
  }, [product]);

  async function fetchProduct(productId) {
    const { data, error } = await supabase
      .from("products")
      .select(
        "p_images, title, price, description, product_unit_price, unit_type, seller_id"
      )
      .eq("id", productId);

    if (error) {
      console.error("Erreur lors de la récupération du produit :", error);
      return;
    }

    setProduct(data[0]);
  }

  async function fetchSeller(sellerId) {
    const { data, error } = await supabase
      .from("sellers")
      .select("profile_img, region, seller_name")
      .eq("id", sellerId);

    if (error) {
      console.error("Erreur lors de la récupération du vendeur :", error);
      return;
    }

    setSeller(data[0]);
  }
  async function fetchProductsBySeller(sellerId) {
    const { data, error } = await supabase
      .from("products")
      .select("id, title, price, unit_type, p_images")
      .eq("seller_id", sellerId);

    if (error) {
      console.error(
        "Erreur lors de la récupération des produits du vendeur :",
        error
      );
      return;
    }

    setSellerProducts(data);
  }

  useEffect(() => {
    if (product && product.seller_id) {
      fetchSeller(product.seller_id);
      fetchProductsBySeller(product.seller_id);
      console.log("product.seller_id", product.seller_id);
    }
  }, [product]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/**remplacer l'image par un slider vertical manuel */}
      <Image
        source={{ uri: product?.p_images[0] }}
        style={{
          width: screenWidth,
          height: screenHeight * 0.4,
          position: "absolute",
          top: 0,
        }}
      />
      <View style={{ height: screenHeight * 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              position: "absolute",
              top: 50,
              left: 20,
              zIndex: 3,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/img/back.png")}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                setIsSearchOpen(!isSearchOpen);
              }}
              style={{
                position: "absolute",
                top: 50,
                right: 20,
                zIndex: 2,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <LinearGradient
                colors={["#ADE283", "#4EA04C"]}
                style={{
                  alignItems: "center",
                  backgroundColor: "#4EA04C",
                  borderRadius: 999,
                  height: 50,
                  width: 50,
                  borderWidth: 4,
                  borderColor: "#fff",
                  justifyContent: "center",
                  paddingHorizontal: "5%",
                }}
              >
                <IconSearch style={{ width: 25, height: 25 }} />
              </LinearGradient>
            </TouchableOpacity>
            {isSearchOpen && (
              <View
                style={{
                  position: "absolute",
                  top: 80,

                  width: screenWidth * 0.8,
                  zIndex: 3,
                }}
              >
                <SearchProvider>
                  <Search_bar navigation={navigation} />
                </SearchProvider>
              </View>
            )}
          </View>
        </View>

        <View></View>
        <ScrollView
          style={{
            paddingTop: screenHeight / 2.5,
          }}
        >
          <View style={{ marginBottom: screenHeight * 0.5 }}>
            <View
              style={{
                backgroundColor: "#316447",
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
              }}
            >
              <View style={{ padding: 20 }}>
                <Text style={{ color: "#A4DF75", fontSize: 20 }}>
                  {product?.title}
                </Text>
                <View
                  style={{
                    height: 20,
                    width: screenWidth * 0.2,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {/* ajouter ici la vue des notes et du nbr d avis */}
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={3 /*product.rating*/}
                    starSize={12}
                    fullStarColor={"gold"}
                  />

                  <Text style={{ color: "#D9D9D9", marginLeft: 5 }}>
                    23 avis
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "white", fontSize: 25 }}>
                    {product?.product_unit_price}€
                  </Text>
                  <Text
                    style={{ fontSize: 14, color: "#D9D9D9", marginLeft: 5 }}
                  >
                    /{product?.unit_type}
                  </Text>
                </View>

                <Text>{product?.p_producter}</Text>
              </View>
            </View>
            <View style={{ backgroundColor: "#fff" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Producteur", {
                    sellerId: product.seller_id,
                  });
                }}
                style={{
                  margin: 10,
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                {seller && (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={{ uri: seller.profile_img }}
                      style={{ height: 60, width: 60, borderRadius: 10 }}
                    />
                    <View style={{ flexDirection: "column", paddingLeft: 10 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          padding: 5,
                        }}
                      >
                        <Image
                          source={require("../assets/img/france.png")}
                          style={{ width: 20, height: 12 }}
                        />
                        <Text>{seller.region}</Text>
                      </View>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {seller.seller_name}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 1,
                        backgroundColor: "black",
                        marginVertical: 10,
                      }}
                    />
                  </View>
                )}
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text>12</Text>
                      <Text>Commandes effectuée</Text>
                    </View>
                    <View>{/**avis ici */}</View>
                  </View>
                  <View>
                    <Text>Test</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  margin: 10,
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Text>Description</Text>
                <Animated.View
                  style={[{ borderBottomWidth: 1, borderBottomColor: "black" }]}
                >
                  {isExpanded ? (
                    <RenderHTML
                      source={{ html: product?.description || "" }}
                      contentWidth={screenWidth}
                    />
                  ) : (
                    <Text numberOfLines={5}>{truncatedText}</Text>
                  )}
                </Animated.View>

                <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                  <Text>{isExpanded ? "Réduire" : "En lire plus"}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  flexDirection: "row",
                  paddingVertical: 10,
                }}
              >
                {sellerProducts.slice(0, 10).map((product) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Produit", {
                          productId: product.id,
                        });
                      }}
                      key={product.id}
                      style={{
                        borderRadius: 10,
                        width: screenWidth * 0.4,
                        height: screenHeight * 0.3,
                        borderColor: "#000000",
                        borderWidth: 1, //a remplacer par elevation
                        marginRight: 10,
                        marginBottom: 10,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        <View
                          style={{
                            borderRadius: 10,
                            height: 100,
                            width: "100%",
                          }}
                        >
                          <Image
                            source={{ uri: product.p_images[0] }}
                            style={{
                              height: "100%",
                              width: "100%",
                              borderRadius: 8,
                            }}
                          />
                          <Image
                            source={require("../assets/img/top_left_card.png")}
                            style={{
                              width: 30,
                              height: 30,
                              position: "absolute",
                            }}
                          />
                        </View>
                        <View
                          style={{
                            paddingHorizontal: 10,
                          }}
                        >
                          <Text
                            numberOfLines={3}
                            ellipsizeMode="tail"
                            style={{ height: screenHeight * 0.08 }}
                          >
                            {product.title}
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <View style={{}}>
                            <View
                              style={{
                                padding: 10,
                                position: "absolute",
                                top: 0,
                                marginBottom: 10,
                              }}
                            >
                              <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: "#4EA04C" }}>
                                  {product.price}€
                                </Text>
                                <Text
                                  style={{
                                    fontSize: 14,
                                    color: "#505050",
                                    marginLeft: 5,
                                  }}
                                >
                                  /{product?.unit_type}
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  width: screenWidth * 0.34,
                                }}
                              >
                                <View>
                                  <View
                                    style={{
                                      flexDirection: "row",
                                    }}
                                  >
                                    <Image
                                      source={require("../assets/img/stars.png")}
                                      style={{
                                        width: screenWidth * 0.03,
                                        height: screenHeight * 0.015,
                                      }}
                                    />
                                    <Image
                                      source={require("../assets/img/stars.png")}
                                      style={{
                                        width: screenWidth * 0.03,
                                        height: screenHeight * 0.015,
                                      }}
                                    />
                                    <Image
                                      source={require("../assets/img/stars.png")}
                                      style={{
                                        width: screenWidth * 0.03,
                                        height: screenHeight * 0.015,
                                      }}
                                    />
                                    <Image
                                      source={require("../assets/img/stars.png")}
                                      style={{
                                        width: screenWidth * 0.03,
                                        height: screenHeight * 0.015,
                                      }}
                                    />
                                  </View>
                                  <View>
                                    <Text
                                      style={{
                                        fontSize: 9,
                                        color: "#AAAAAA",
                                      }}
                                    >
                                      39 avis
                                    </Text>
                                  </View>
                                </View>

                                <View>
                                  <Image
                                    source={require("../assets/img/shop.png")}
                                    style={{
                                      width: 30,
                                      height: 30,
                                    }}
                                  />
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity>
                  <Text>Aller sur la page du producteur</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: screenHeight * 0.1,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
          onPress={() => {
            if (product) {
              addToCart(productId, product.seller_id);
            } else {
              console.log("Product is not loaded yet");
            }
          }}
        >
          <LinearGradient
            colors={["#FFE352", "#EEBA00"]}
            start={{ x: -0.1, y: -0.1 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: screenWidth * 0.9,
              paddingVertical: screenHeight * 0.01,
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              zIndex: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#505050",
                marginLeft: 20,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Ajouter au panier
            </Text>
            <Image
              source={require("../assets/img/cart.png")}
              style={{ height: 40, width: 40, marginRight: 10 }}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
