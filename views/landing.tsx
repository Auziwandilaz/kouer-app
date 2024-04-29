import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { supabase } from "../lib/supabase";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Landing({ navigation }) {
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#316447", "#1B4D3E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flexGrow: 1, paddingHorizontal: 18 }}
      >
        <View style={{ height: "66%", justifyContent: "space-around" }}>
          <View />
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "900" }}>
              • Bienvenue •
            </Text>
            <Image
              source={require("../assets/img/logo_kouer.png")}
              resizeMode="contain"
              style={{ height: screenHeight * 0.25, width: screenWidth * 0.85 }}
            />
          </View>
        </View>
        <View style={{ height: "33%", zIndex: 1 }}>
          <LinearGradient
            colors={["#A4DF75", "#4EA04C"]}
            start={{ x: -0.25, y: -0.25 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 9999, height: 45, marginVertical: 20 }}
          >
            <Pressable
              android_ripple={{ color: "white" }}
              onPress={() => {
                navigation.navigate("Signin");
              }}
              style={{
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
                Connexion
              </Text>
            </Pressable>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
            style={{
              alignItems: "center",
              borderColor: "#4EA04C",
              borderRadius: 9999,
              borderWidth: 2,
              height: 45,
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#4EA04C", fontSize: 20, fontWeight: "600" }}>
              Créer un compte
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home", { topProducts });
            }}
            style={{ alignItems: "center", width: "100%" }}
          >
            <Text
              style={{
                color: "white",
                borderBottomColor: "white",
                borderBottomWidth: 2,
                paddingVertical: 2,
              }}
            >
              Continuer sans compte
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <Image
        source={require("../assets/img/icon_epi.png")}
        style={{
          position: "absolute",
          right: screenWidth / 32 - screenWidth * 0.2,
          top: screenHeight / 2 + screenHeight * 0.05,
        }}
      />
    </SafeAreaView>
  );
}
