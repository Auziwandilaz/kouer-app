import React from "react";
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
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function MyFavorite({ navigation }) {
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
              backgroundColor: "#F5F5F5",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Producteur card */}
            {/* a repeter */}
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                width: screenWidth * 0.95,
                marginBottom: 20,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Image
                    source={require("../assets/img/tracteur.png")}
                    style={{ width: 70, height: 70, borderRadius: 10 }}
                  />
                  <Text
                    style={{ marginLeft: 10, fontSize: 15, color: "#4EA04C" }}
                  >
                    La vieille ferme de {"\n"}Croissanville
                  </Text>
                </View>

                <ScrollView
                  horizontal={true}
                  style={{}}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
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
                </ScrollView>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Producteur")}
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
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                width: screenWidth * 0.95,
                marginBottom: 20,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Image
                    source={require("../assets/img/tracteur.png")}
                    style={{ width: 70, height: 70, borderRadius: 10 }}
                  />
                  <Text
                    style={{ marginLeft: 10, fontSize: 15, color: "#4EA04C" }}
                  >
                    La vieille ferme de {"\n"}Croissanville
                  </Text>
                </View>

                <ScrollView
                  horizontal={true}
                  style={{}}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
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
                </ScrollView>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Producteur")}
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
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                width: screenWidth * 0.95,
                marginBottom: 20,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Image
                    source={require("../assets/img/tracteur.png")}
                    style={{ width: 70, height: 70, borderRadius: 10 }}
                  />
                  <Text
                    style={{ marginLeft: 10, fontSize: 15, color: "#4EA04C" }}
                  >
                    La vieille ferme de {"\n"}Croissanville
                  </Text>
                </View>

                <ScrollView
                  horizontal={true}
                  style={{}}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
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
                </ScrollView>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Producteur")}
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
