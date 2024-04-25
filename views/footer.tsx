import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export function Footer({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 10,
        position: "absolute",
        width: "100%",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center" }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../assets/img/home.png")}
          style={{ height: screenHeight * 0.035, width: screenWidth * 0.072 }}
        />
        <Text style={{ color: "#AAAAAA", fontSize: screenWidth * 0.034 }}>
          Accueil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Vrac")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image
          source={require("../assets/img/vrac.png")}
          style={{ height: screenHeight * 0.035, width: screenWidth * 0.072 }}
        />
        <Text style={{ color: "#AAAAAA", fontSize: screenWidth * 0.034 }}>
          Vrac
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("MainSearch")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image
          source={require("../assets/img/categories.png")}
          style={{ height: screenHeight * 0.035, width: screenWidth * 0.07 }}
        />
        <Text style={{ color: "#AAAAAA", fontSize: screenWidth * 0.034 }}>
          Catégories
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Account")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image
          source={require("../assets/img/compte.png")}
          style={{ height: screenHeight * 0.035, width: screenWidth * 0.072 }}
        />
        <Text style={{ color: "#AAAAAA", fontSize: screenWidth * 0.034 }}>
          Compte
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Panier")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image
          source={require("../assets/img/panier.png")}
          style={{ height: screenHeight * 0.035, width: screenWidth * 0.072 }}
        />
        <Text style={{ color: "#AAAAAA", fontSize: screenWidth * 0.034 }}>
          Pannier
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
export default Footer;
