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
} from "react-native";
import { supabase } from "../lib/supabase";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export default function Producteur({ route, navigation }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [seller, setSeller] = useState(null);
  const [datePickups, setDatePickups] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const daysOfWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const [sellerProducts, setSellerProducts] = useState([]);
  const { sellerId } = route.params;

  useEffect(() => {
    fetchSeller(sellerId);
    fetchProductsBySeller(sellerId);
  }, [sellerId]);

  async function fetchSeller(sellerId) {
    const { data, error } = await supabase
      .from("sellers")
      .select(
        "profile_img, region, seller_name, shop_description, shop_image, date_pickups"
      )
      .eq("id", sellerId);

    if (error) {
      console.error("Erreur lors de la récupération du vendeur :", error);
      return;
    }

    setSeller(data[0]);
    setDatePickups(data[0].date_pickups);
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

    console.log("Produits du vendeur récupérés :", data);

    setSellerProducts(data);
    console.log("Produits du vendeur :", sellerProducts);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={{ uri: seller?.profile_img }}
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

        <ScrollView
          style={{
            paddingTop: screenHeight / 2.5,
          }}
        >
          <View
            style={{
              marginBottom: screenHeight * 0.5,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: "#1B4D3E",
            }}
          >
            <View style={{ padding: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../assets/img/france.png")}
                    style={{ width: 20, height: 12 }}
                  />
                  <Text style={{ color: "#fff", paddingLeft: 5 }}>
                    {seller?.region}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={3.5}
                    starSize={12}
                    fullStarColor={"gold"}
                  />
                  <Text style={{ color: "#AAAAAA", paddingLeft: 5 }}>
                    0 avis
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Image
                  source={{ uri: seller?.profile_img }}
                  style={{ height: 50, width: 50, borderRadius: 9999 }}
                />
                <Text
                  style={{ color: "#A4DF75", paddingLeft: 5, fontSize: 15 }}
                >
                  {seller?.seller_name}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#4EA04C",

                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              <Text style={{ color: "#fff", padding: 20 }}>
                Jours de livraison
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                {datePickups.map((isDeliveryDay, index) => {
                  if (isDeliveryDay) {
                    return (
                      <View
                        key={index}
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: 40,
                          margin: 5,
                          alignItems: "center",
                          padding: 10,
                          width: "25%",
                        }}
                      >
                        <Text style={{ textAlign: "center" }}>
                          {daysOfWeek[index]}
                        </Text>
                      </View>
                    );
                  }
                  return null;
                })}
              </View>

              <View
                style={{
                  backgroundColor: "#fff",

                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}
              >
                <View style={{ padding: 20 }}>
                  <RenderHTML
                    contentWidth={screenWidth}
                    source={{ html: seller?.shop_description || "" }}
                  />
                </View>
                <View>
                  <Text>Nos produits</Text>
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
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
