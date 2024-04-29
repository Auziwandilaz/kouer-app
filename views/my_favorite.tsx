import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Footer } from "./footer";
import { fetchProductAndSellerInfo } from "../components/fav";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function MyFavorite({ navigation, sellerId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProductAndSellerInfo().then((fetchedData) => {
      const groupedData = fetchedData.reduce((acc, item) => {
        const sellerId = item.sellerData[0]?.id;
        if (!acc[sellerId]) {
          acc[sellerId] = [];
        }
        acc[sellerId].push(item);
        return acc;
      }, {});
      setData(groupedData);
      console.log(groupedData);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              source={require("../assets/img/account_white.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ color: "#fff", fontSize: 20 }}>Mes favoris</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={{}}>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginBottom: screenHeight * 0.3,

              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 20,
                width: screenWidth * 0.95,
                marginBottom: 20,
              }}
            >
              <View>
                {data &&
                  Object.keys(data).map((sellerId) => (
                    <View
                      key={sellerId}
                      style={{
                        marginBottom: 15,
                        backgroundColor: "#fff",
                        borderRadius: 20,
                      }}
                    >
                      {data[sellerId][0]?.sellerData && (
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 10,
                          }}
                        >
                          <Image
                            source={{
                              uri: data[sellerId][0]?.sellerData[0]
                                ?.profile_img,
                            }}
                            style={{
                              width: 70,
                              height: 70,
                              borderRadius: 10,
                            }}
                          />
                          <Text
                            style={{
                              marginLeft: 10,
                              fontSize: 15,
                              color: "#4EA04C",
                            }}
                          >
                            {data[sellerId][0]?.sellerData[0]?.seller_name}
                          </Text>
                        </View>
                      )}

                      <ScrollView
                        horizontal={true}
                        style={{}}
                        showsHorizontalScrollIndicator={false}
                      >
                        {data[sellerId].map((item, index) => {
                          return (
                            <TouchableOpacity
                              key={index}
                              onPress={() =>
                                navigation.navigate("Produit", {
                                  productId: item.productData[0]?.id,
                                })
                              }
                              style={{
                                borderRadius: 10,
                                width: screenWidth * 0.35,

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
                                    source={{
                                      uri: item.productData[0]?.p_images?.[0],
                                    }}
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
                                  <Text>{item.productData[0]?.title}</Text>
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
                                      <Text style={{ color: "#4EA04C" }}>
                                        {item.productData[0]?.price}€ /
                                        {item.productData[0]?.unit_type}
                                      </Text>
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
                            </TouchableOpacity>
                          );
                        })}
                      </ScrollView>

                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Producteur", {
                            sellerId: sellerId,
                          })
                        }
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            padding: 10,
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              textDecorationLine: "underline",
                              color: "#1B4D3E",
                            }}
                          >
                            Aller sur la page du producteur
                          </Text>
                          <Image
                            source={require("../assets/img/right_arrow.png")}
                            style={{ width: 15, height: 12, marginLeft: 5 }}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

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
});
