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
} from "react-native";

import Footer from "./footer";
import { SearchProvider, Search_bar } from "./search_bar";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function MainSearch({ navigation }) {
  const [categories, setCategories] = useState([]);
  const categoryImages = {
    15: require("../assets/img/categories/meat.png"),
    21: require("../assets/img/categories/milk.png"),
    18: require("../assets/img/categories/drinks.png"),
    20: require("../assets/img/categories/sugary.png"),
    19: require("../assets/img/categories/salty.png"),
    16: require("../assets/img/categories/fish.png"),
    22: require("../assets/img/categories/takeaway.png"),
    17: require("../assets/img/categories/vegetables.png"),
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("title, subtitle, id");
    if (error) {
      console.error("Erreur lors de la récupération des catégories", error);
    } else {
      setCategories(data);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: screenHeight * 0.25 }}>
        <LinearGradient
          colors={["#ADE283", "#4EA04C"]}
          start={{ x: 0, y: -0.75 }}
          end={{ x: 0, y: 1 }}
          style={{
            alignItems: "center",
            backgroundColor: "#4EA04C",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            height: screenHeight * 0.15,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "500" }}>
            Que recherchez-vous ?
          </Text>
        </LinearGradient>

        <SearchProvider>
          <Search_bar navigation={navigation} />
        </SearchProvider>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#f5f5f5",
          marginTop: -screenHeight * 0.03,
        }}
      >
        <View
          style={{ marginBottom: screenHeight * 0.2, backgroundColor: "white" }}
        >
          {categories.map((category, index) => {
            console.log("source", categoryImages[category.id]);

            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate(category.subtitle, { id: category.id })
                }
                activeOpacity={0.6}
                style={{
                  borderColor: "#e3e3e3",

                  borderBottomWidth: 2,
                  minHeight: screenHeight * 0.1,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    flexGrow: 1,
                    paddingHorizontal: 20,
                  }}
                >
                  <Image
                    source={categoryImages[category.id]}
                    style={{ height: 40, resizeMode: "center", width: 40 }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      flexGrow: 1,
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginLeft: 15,
                    }}
                  >
                    <Text style={{ color: "#4EA04C", fontSize: 20 }}>
                      {category.title}
                    </Text>
                    <Image
                      source={require("../assets/img/button_next.png")}
                      style={{ height: 25, resizeMode: "contain" }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          bottom: screenHeight * 0.12,
        }}
      >
        <LinearGradient
          colors={["#ADE283", "#4EA04C"]}
          start={{ x: 0, y: -0.75 }}
          end={{ x: 0, y: 1 }}
          style={{
            alignItems: "center",
            borderRadius: 9999,
            paddingVertical: 10,
            justifyContent: "center",
            width: "30%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.6}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Fermer x
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
