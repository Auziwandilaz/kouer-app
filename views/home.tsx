import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { supabase } from "../lib/supabase";
import StarRating from "react-native-star-rating";
import Footer from "./footer";
import { SearchProvider, Search_bar } from "./search_bar";
import { favorie } from "../components/fav";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export function Home({ navigation, route }) {
  const [searchValue, setSearchValue] = useState("");
  const [topProducts, setTopProducts] = useState([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 15;

  async function fetchTopProducts() {
    const { data, error } = await supabase
      .from("products")
      .select(
        "title,price, p_images, product_unit_price, starting_quantity, id, unit_type, seller_id, seller:seller_id(profile_img,region)"
      )
      .order("ventes", { ascending: false })
      .range(page * itemsPerPage, (page + 1) * itemsPerPage - 1);

    if (error) {
      console.error(
        "Erreur lors de la récupération des produits les plus vendus :",
        error
      );
      return;
    }

    setTopProducts((prevProducts) => [...prevProducts, ...data]);
  }

  useEffect(() => {
    fetchTopProducts().then(() => {});
  }, []);

  async function fetchProductIds() {
    const productNames = [
      "Sorbet Poire 0.5L",
      "Glace aux Oeufs Vanille Bourbon 0.5L",
      "Glace aux Oeufs Chocolat Weiss 0.5L",
      "Sorbet Ananas 1L",
      "Crème Glaçée Pistache 0.5L",
      "Crème Glaçée Caramel Beurre Salé 0.5L",
      "Crème Glaçée Noisette 0.5L",
      "Sorbet Mangue 1L",
      "Glace aux Oeufs Rhum Raisin 0.5L",
      "Crème Glaçée Stracciatella 1L",
      "Sorbet Mandarine 0.5L",
      "Sorbet Fraise Gariguette 0.5L",
      "Glace aux Oeufs Vanille Eclat de Chocolat 1L",
    ];

    const { data, error } = await supabase
      .from("products")
      .select("id, title")
      .in("title", productNames);

    if (error) {
      console.error(
        "Erreur lors de la récupération des ID de produits :",
        error
      );
      return;
    }

    // data est un tableau d'objets, chaque objet contenant l'ID et le titre d'un produit
    console.log("Produits :", data);
    return data;
  }

  useEffect(() => {
    fetchProductIds()
      .then((products) => {
        console.log("Produits :", products);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des ID de produits :",
          error
        );
      });
  }, []);

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
            height: screenHeight * 0.18,
            justifyContent: "center",
            paddingHorizontal: "5%",
          }}
        >
          <View>
            <Image
              source={require("../assets/img/logo_kouer_native.png")}
              resizeMode="contain"
              style={{ height: screenHeight * 0.07, width: screenWidth * 0.25 }}
            />
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Le bon à portée de main
            </Text>
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
                backgroundColor: "#04AFCB",
                width: "100%",
                height: screenHeight * 0.2,
                flexDirection: "row",
                justifyContent: "space-between",

                borderRadius: 20,
                marginTop: 20,
              }}
            >
              <View
                style={{
                  justifyContent: "space-around",
                  width: "50%",
                  padding: 10,
                }}
              >
                <Text
                  style={{ color: "#EEBA00", fontSize: 15, fontWeight: "600" }}
                >
                  Les fêtes de d’hivers avec Kouer !
                </Text>

                <Text
                  style={{ color: "#fff", fontSize: 12, fontWeight: "600" }}
                >
                  Découvrez nos offres d’hivers.
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/img/promo.png")}
                    style={{
                      height: 30,
                      width: 30,
                      marginRight: 10,
                    }}
                  />
                  <Text
                    style={{ color: "#fff", fontSize: 10, fontWeight: "600" }}
                  >
                    Promotion de Noël
                  </Text>
                </View>
              </View>

              <Image
                source={require("../assets/img/img_card_home.png")}
                style={{
                  height: "100%",
                  width: "50%",
                  borderBottomRightRadius: 20,
                }}
              />
            </View>
            {/*produit phare*/}
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: "#FFFFFF",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/img/product_star.png")}
                  style={{ width: 15, height: 15, marginRight: 5 }}
                />
                <Text style={{ color: "#4EA04C", fontSize: 15 }}>
                  Produits phares
                </Text>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 10,
                  }}
                >
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {topProducts.map((product) => (
                      <TouchableOpacity
                        key={product.id}
                        onPress={() =>
                          navigation.navigate("Produit", {
                            productId: product.id,
                          })
                        }
                      >
                        <View
                          key={product.id}
                          style={{
                            borderRadius: 10,
                            width: screenWidth * 0.35,
                            borderColor: "#AAAAAA",
                            borderWidth: 1,

                            marginRight: 10,
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
                                  borderRadius: 10,
                                }}
                              />

                              <Image
                                source={{ uri: product.seller.profile_img }}
                                style={{
                                  width: 30,
                                  height: 30,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  position: "absolute",
                                }}
                              />
                              <TouchableOpacity
                                style={{
                                  width: 34,
                                  height: 31,
                                  position: "absolute",
                                  right: 5,
                                  top: 5,
                                }}
                                onPress={() =>
                                  favorie(product.id, product.seller_id)
                                } // Passez l'objet produit à la fonction favorie
                              >
                                <Image
                                  source={require("../assets/img/like.png")}
                                />
                              </TouchableOpacity>
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                  position: "absolute",
                                  justifyContent: "center",
                                  left: 5,
                                  bottom: 5,
                                }}
                              >
                                <Image
                                  source={require("../assets/img/france.png")}
                                  style={{ width: 20, height: 12 }}
                                />
                                <Text
                                  numberOfLines={1}
                                  style={{
                                    color: "white",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    paddingHorizontal: 5,
                                    fontSize: 12,
                                  }}
                                >
                                  {product.seller.region}
                                </Text>
                              </View>
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
                              <View
                                style={{
                                  flexDirection: "column",
                                  padding: 10,
                                }}
                              >
                                <View style={{ flexDirection: "column" }}>
                                  <View
                                    style={{
                                      flexDirection: "row",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Text style={{ color: "#4EA04C" }}>
                                      {product.price}€
                                    </Text>
                                    <Text
                                      style={{
                                        fontSize: 12,
                                        color: "#AAAAAA",
                                        marginLeft: 5,
                                      }}
                                    >
                                      {product?.starting_quantity}/
                                      {product?.unit_type}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      height: 20,

                                      flexDirection: "column",

                                      justifyContent: "flex-start",
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

                                    <Text
                                      style={{
                                        color: "#AAAAAA",
                                        marginLeft: 5,
                                        fontSize: 12,
                                      }}
                                    >
                                      23 avis
                                    </Text>
                                  </View>
                                </View>
                              </View>

                              <Image
                                source={require("../assets/img/shop.png")}
                                style={{
                                  width: 30,
                                  height: 30,
                                  position: "absolute",
                                  right: 5,
                                  bottom: 5,
                                }}
                              />
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
                <View
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        textDecorationLine: "underline",
                        color: "#1B4D3E",
                        fontSize: 12,
                      }}
                    >
                      Voir tous les produits phares
                    </Text>
                    <Image
                      source={require("../assets/img/right_arrow.png")}
                      style={{
                        height: 10,
                        width: 12.3,
                        marginHorizontal: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            {/*Recommanés pour vous*/}

            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: "#F4F4F4",
              }}
            >
              <Text
                style={{
                  padding: 10,
                  fontSize: 15,
                  fontWeight: "600",
                  color: "#505050",
                }}
              >
                Recommandés pour vous
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {/** a repeter avec le back */}
                <TouchableOpacity
                  onPress={() => navigation.navigate("Produit")}
                  style={{ padding: 5 }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      width: screenWidth * 0.4,
                      borderColor: "#000000",
                      borderWidth: 1, //a remplacer par elevation
                      margin: 10,
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
                          source={require("../assets/img/limonade.png")}
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: 10,
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
                        <Text>Limonade</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            padding: 10,
                          }}
                        >
                          <View style={{ paddingVertical: 10 }}>
                            <Text style={{ color: "#4EA04C" }}>3.70€</Text>
                          </View>

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
                            <Text style={{ fontSize: 9, color: "#AAAAAA" }}>
                              39 avis
                            </Text>
                          </View>
                        </View>

                        <Image
                          source={require("../assets/img/shop.png")}
                          style={{
                            width: 30,
                            height: 30,
                            position: "absolute",
                            right: 5,
                            bottom: 5,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Produit")}
                  style={{ padding: 5 }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      width: screenWidth * 0.4,
                      borderColor: "#000000",
                      borderWidth: 1, //a remplacer par elevation
                      margin: 10,
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
                          source={require("../assets/img/limonade.png")}
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: 10,
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
                        <Text>Limonade</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            padding: 10,
                          }}
                        >
                          <View style={{ paddingVertical: 10 }}>
                            <Text style={{ color: "#4EA04C" }}>3.70€</Text>
                          </View>

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
                            <Text style={{ fontSize: 9, color: "#AAAAAA" }}>
                              39 avis
                            </Text>
                          </View>
                        </View>

                        <Image
                          source={require("../assets/img/shop.png")}
                          style={{
                            width: 30,
                            height: 30,
                            position: "absolute",
                            right: 5,
                            bottom: 5,
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Découvrez*/}
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 10,
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  padding: 10,
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Découvrez
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../assets/img/promotion.png")}
                    style={{
                      height: screenHeight * 0.2,
                      width: screenWidth * 0.4,
                      borderRadius: 10,
                    }}
                  />
                  <Text style={{ color: "#F25C5C" }}>Promotions</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../assets/img/bio.png")}
                    style={{
                      height: screenHeight * 0.2,
                      width: screenWidth * 0.4,
                      borderRadius: 10,
                    }}
                  />
                  <Text style={{ color: "#A4DF75" }}>BIO</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Regions")}
                  style={{ alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/img/region.png")}
                    style={{
                      height: screenHeight * 0.2,
                      width: screenWidth * 0.4,
                      borderRadius: 10,
                    }}
                  />
                  <Text style={{ color: "#EEBA00" }}>Produits régionaux</Text>
                </TouchableOpacity>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../assets/img/saison.png")}
                    style={{
                      height: screenHeight * 0.2,
                      width: screenWidth * 0.4,
                      borderRadius: 10,
                    }}
                  />
                  <Text style={{ color: "#FFA552" }}>En saison</Text>
                </View>
              </View>
            </View>
            {/*meilleur vente*/}
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 10,
                backgroundColor: "#F5F5F5",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  padding: 10,
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Meilleures ventes
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {/** a repeter avec le back */}
                <View
                  style={{
                    borderRadius: 10,
                    width: screenWidth * 0.35,
                    borderColor: "#000000",
                    borderWidth: 1, //a remplacer par elevation
                    margin: 10,
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
                        source={require("../assets/img/limonade.png")}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 10,
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
                      <Text>Limonade</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          padding: 10,
                        }}
                      >
                        <View style={{ paddingVertical: 10 }}>
                          <Text style={{ color: "#4EA04C" }}>3.70€</Text>
                        </View>

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
                          <Text style={{ fontSize: 9, color: "#AAAAAA" }}>
                            39 avis
                          </Text>
                        </View>
                      </View>

                      <Image
                        source={require("../assets/img/shop.png")}
                        style={{
                          width: 30,
                          height: 30,
                          position: "absolute",
                          right: 5,
                          bottom: 5,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderRadius: 10,
                    width: screenWidth * 0.35,
                    borderColor: "#000000",
                    borderWidth: 1, //a remplacer par elevation
                    margin: 10,
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
                        source={require("../assets/img/limonade.png")}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 10,
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
                      <Text>Limonade</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          padding: 10,
                        }}
                      >
                        <View style={{ paddingVertical: 10 }}>
                          <Text style={{ color: "#4EA04C" }}>3.70€</Text>
                        </View>

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
                          <Text style={{ fontSize: 9, color: "#AAAAAA" }}>
                            39 avis
                          </Text>
                        </View>
                      </View>

                      <Image
                        source={require("../assets/img/shop.png")}
                        style={{
                          width: 30,
                          height: 30,
                          position: "absolute",
                          right: 5,
                          bottom: 5,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderRadius: 10,
                    width: screenWidth * 0.35,
                    borderColor: "#000000",
                    borderWidth: 1, //a remplacer par elevation
                    margin: 10,
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
                        source={require("../assets/img/limonade.png")}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 10,
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
                      <Text>Limonade</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          padding: 10,
                        }}
                      >
                        <View style={{ paddingVertical: 10 }}>
                          <Text style={{ color: "#4EA04C" }}>3.70€</Text>
                        </View>

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
                          <Text style={{ fontSize: 9, color: "#AAAAAA" }}>
                            39 avis
                          </Text>
                        </View>
                      </View>

                      <Image
                        source={require("../assets/img/shop.png")}
                        style={{
                          width: 30,
                          height: 30,
                          position: "absolute",
                          right: 5,
                          bottom: 5,
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <LinearGradient
                colors={["#ADE283", "#4EA04C"]}
                start={{ x: 0, y: -0.75 }}
                end={{ x: 0, y: 1 }}
                style={{
                  borderRadius: 9999,
                  width: screenWidth * 0.8,
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    alignItems: "center",
                    margin: 10,
                    padding: 3,

                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff" }}>
                    Toutes les meilleurs ventes
                  </Text>
                </View>
              </LinearGradient>
            </View>
            {/*Les producteurs patenaires */}

            <View
              style={{
                backgroundColor: "#F5F5F5",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#4EA04C",
                  }}
                >
                  Les producteurs partenaires sont notre fierté
                </Text>
                <Text
                  style={{
                    color: "#1B4D3E",
                    paddingVertical: 10,
                  }}
                >
                  Nous faisons entièrement confiance en nos producteurs.
                </Text>
                <Text
                  style={{
                    color: "#1B4D3E",
                    paddingVertical: 10,
                  }}
                >
                  Nous les mettons en avant afin de promouvoir leur travaux
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{
                    padding: 10,
                  }}
                >
                  {/** a repeter avec le back */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "stretch",
                      flex: 0.5,
                      marginRight: 10,
                      width: 185,
                      height: 300,
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        left: 0,
                        top: 0,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          padding: 10,
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Producteur du mois
                      </Text>
                      <Text style={{ color: "white", paddingHorizontal: 10 }}>
                        La ferme de Croissanville
                      </Text>
                    </View>
                    <Image
                      source={require("../assets/img/tracteur.png")}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <View
                        style={{
                          padding: 15,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          <Image source={require("../assets/img/stars.png")} />
                          <Text style={{ color: "white" }}>4.5</Text>
                        </View>
                        <Text style={{ color: "white" }}>3 668 avis</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "stretch",
                      flex: 0.5,
                      marginRight: 10,
                      width: 185,
                      height: 300,
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        left: 0,
                        top: 0,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          padding: 10,
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Producteur du mois
                      </Text>
                      <Text style={{ color: "white", paddingHorizontal: 10 }}>
                        La ferme de Croissanville
                      </Text>
                    </View>
                    <Image
                      source={require("../assets/img/tracteur.png")}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <View
                        style={{
                          padding: 15,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          <Image source={require("../assets/img/stars.png")} />
                          <Text style={{ color: "white" }}>4.5</Text>
                        </View>
                        <Text style={{ color: "white" }}>3 668 avis</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "stretch",
                      flex: 0.5,
                      marginRight: 10,
                      width: 185, // définir une largeur fixe
                      height: 300,
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        left: 0,
                        top: 0,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          padding: 10,
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Producteur du mois
                      </Text>
                      <Text style={{ color: "white", paddingHorizontal: 10 }}>
                        La ferme de Croissanville
                      </Text>
                    </View>
                    <Image
                      source={require("../assets/img/tracteur.png")}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <View
                        style={{
                          padding: 15,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          <Image source={require("../assets/img/stars.png")} />
                          <Text style={{ color: "white" }}>4.5</Text>
                        </View>
                        <Text style={{ color: "white" }}>3 668 avis</Text>
                      </View>
                    </View>
                  </View>
                  {/** stop */}
                </ScrollView>
                <LinearGradient
                  colors={["#ADE283", "#4EA04C"]}
                  start={{ x: 0, y: -0.75 }}
                  end={{ x: 0, y: 1 }}
                  style={{
                    borderRadius: 9999,
                    width: screenWidth * 0.8,
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      alignItems: "center",
                      margin: 10,
                      padding: 3,

                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "#fff" }}>
                      Voir tout nos producteurs
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            </View>
            {/* produit à moins de 5€ */}

            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                padding: 10,
                backgroundColor: "#FFFFFF",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  padding: 10,
                  fontSize: 15,
                  fontWeight: "600",
                }}
              >
                Produits à moins de 5€
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    width: screenWidth * 0.4,
                    borderColor: "#000000",
                    borderWidth: 1, //a remplacer par elevation
                    margin: 10,
                  }}
                ></View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  flexWrap: "wrap",
                }}
              >
                {/** a repeter avec le back */}
                <View
                  style={{
                    borderRadius: 10,
                    width: screenWidth * 0.35,
                    borderColor: "#000000",
                    borderWidth: 1, //a remplacer par elevation
                    marginRight: 10,
                    margin: 10,
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
                        source={require("../assets/img/limonade.png")}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 10,
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
                      <Text>Limonade</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          padding: 10,
                        }}
                      >
                        <View style={{ paddingVertical: 10 }}>
                          <Text style={{ color: "#4EA04C" }}>3.70€</Text>
                        </View>

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
                          <Text style={{ fontSize: 9, color: "#AAAAAA" }}>
                            39 avis
                          </Text>
                        </View>
                      </View>

                      <Image
                        source={require("../assets/img/shop.png")}
                        style={{
                          width: 30,
                          height: 30,
                          position: "absolute",
                          right: 5,
                          bottom: 5,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderRadius: 10,
                    width: screenWidth * 0.35,
                    borderColor: "#000000",
                    borderWidth: 1, //a remplacer par elevation
                    marginRight: 10,
                    margin: 10,
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
                        source={require("../assets/img/limonade.png")}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 10,
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
                      <Text>Limonade</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          padding: 10,
                        }}
                      >
                        <View style={{ paddingVertical: 10 }}>
                          <Text style={{ color: "#4EA04C" }}>3.70€</Text>
                        </View>

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
                          <Text style={{ fontSize: 9, color: "#AAAAAA" }}>
                            39 avis
                          </Text>
                        </View>
                      </View>

                      <Image
                        source={require("../assets/img/shop.png")}
                        style={{
                          width: 30,
                          height: 30,
                          position: "absolute",
                          right: 5,
                          bottom: 5,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderRadius: 10,
                    width: screenWidth * 0.35,
                    borderColor: "#000000",
                    borderWidth: 1, //a remplacer par elevation
                    marginRight: 10,
                    margin: 10,
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
                        source={require("../assets/img/limonade.png")}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 10,
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
                      <Text>Limonade</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          padding: 10,
                        }}
                      >
                        <View style={{ paddingVertical: 10 }}>
                          <Text style={{ color: "#4EA04C" }}>3.70€</Text>
                        </View>

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
                          <Text style={{ fontSize: 9, color: "#AAAAAA" }}>
                            39 avis
                          </Text>
                        </View>
                      </View>

                      <Image
                        source={require("../assets/img/shop.png")}
                        style={{
                          width: 30,
                          height: 30,
                          position: "absolute",
                          right: 5,
                          bottom: 5,
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderRadius: 10,
                    width: screenWidth * 0.35,
                    borderColor: "#000000",
                    borderWidth: 1, //a remplacer par elevation
                    marginRight: 10,
                    margin: 10,
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
                        source={require("../assets/img/limonade.png")}
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 10,
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
                      <Text>Limonade</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          padding: 10,
                        }}
                      >
                        <View style={{ paddingVertical: 10 }}>
                          <Text style={{ color: "#4EA04C" }}>3.70€</Text>
                        </View>

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
                          <Text style={{ fontSize: 9, color: "#AAAAAA" }}>
                            39 avis
                          </Text>
                        </View>
                      </View>

                      <Image
                        source={require("../assets/img/shop.png")}
                        style={{
                          width: 30,
                          height: 30,
                          position: "absolute",
                          right: 5,
                          bottom: 5,
                        }}
                      />
                    </View>
                  </View>
                </View>

                {/** a repeter avec le back */}
                <LinearGradient
                  colors={["#ADE283", "#4EA04C"]}
                  start={{ x: 0, y: -0.75 }}
                  end={{ x: 0, y: 1 }}
                  style={{
                    borderRadius: 9999,
                    width: screenWidth * 0.8,
                    margin: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderRadius: 10,
                      alignItems: "center",
                      margin: 10,
                      padding: 3,

                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "#fff" }}>
                      Tout les produits à moins de 5€
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            </View>
            {/* Nous suivre sur les réseaux */}
            <View
              style={{
                padding: 10,
                backgroundColor: "#F4F4F4",
                paddingBottom: 50,
              }}
            >
              <View
                style={{
                  padding: 10,
                }}
              >
                <Text>Nous suivre sur les réseaux</Text>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.instagram.com/kouerfr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    )
                  }
                >
                  <Image
                    source={require("../assets/img/instagram.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL("https://www.linkedin.com/company/kouer/")
                  }
                >
                  <Image
                    source={require("../assets/img/linkedin.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://www.facebook.com")}
                >
                  <Image
                    source={require("../assets/img/facebook.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://www.example.com")}
                >
                  <Image
                    source={require("../assets/img/twitter.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
