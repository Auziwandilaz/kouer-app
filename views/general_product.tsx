import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Footer from "./footer";
import { SearchProvider, Search_bar } from "./search_bar";
import { useRoute } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import { LinearGradient } from "expo-linear-gradient";
interface RouteParams {
  searchValue: string;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  p_images: string;
}

export default function GeneralProduct({ navigation }) {
  const route = useRoute();
  const params = route.params as RouteParams;
  const { searchValue } = params;

  const [products, setProducts] = useState<Product[]>([]);

  function searchProducts(searchValue: string): Promise<Product[]> {
    return supabase
      .from("products")
      .select("*")
      .ilike("title", `%${searchValue}%`)
      .or(`description.ilike.%${searchValue}%`)
      .then((response) => {
        if (response.error) {
          console.error(
            "Erreur lors de la recherche de produits :",
            response.error.message
          );
          return [];
        }

        return response.data;
      }) as Promise<Product[]>;
  }

  useEffect(() => {
    searchProducts(searchValue).then(setProducts);
  }, [searchValue]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: screenHeight * 1 }}>
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
          <View>
            <Text style={{ color: "#fff", fontSize: 20 }}>Recherche</Text>
          </View>
        </LinearGradient>
        <SearchProvider>
          <Search_bar navigation={navigation} />
        </SearchProvider>
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          <View
            style={{
              marginBottom: screenHeight * 0.05,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: "#FFFFFF ",
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    paddingVertical: 10,
                    flexWrap: "wrap",
                  }}
                >
                  {products.length === 0 ? (
                    <Text>Aucun produit trouvé</Text>
                  ) : (
                    products.map((product) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            console.log("ID du produit :", product.id);
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
                                  <Text style={{ color: "#4EA04C" }}>
                                    {product.price}€
                                  </Text>
                                  <View
                                    style={{
                                      flexDirection: "row",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      width: screenWidth * 0.3,
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
                    })
                  )}
                </View>
                <View
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    flexDirection: "row",
                  }}
                ></View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
