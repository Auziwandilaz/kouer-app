import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Footer from "./footer";
import { SearchProvider, Search_bar } from "./search_bar";
import { LinearGradient } from "expo-linear-gradient";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export default function Regions({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          paddingHorizontal: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/img/regions/france.png")}
            style={{
              height: screenHeight * 0.08,
              width: screenHeight * 0.08,
            }}
          />
          <Text style={{ color: "#fff", fontSize: screenHeight * 0.03 }}>
            Produits régionaux
          </Text>
        </View>
      </LinearGradient>
      <SearchProvider>
        <Search_bar navigation={navigation} />
      </SearchProvider>
      <ScrollView>
        <View style={{ padding: 20, marginBottom: screenHeight * 0.1 }}>
          <View style={{ margin: 5, paddingHorizontal: 5, paddingBottom: 10 }}>
            <Text style={{ color: "#505050" }}>Sélectionner une région</Text>
            <Text style={{ color: "#AAAAAA" }}>
              Cliquez sur la région pour la sélectionner
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,
                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Auvergne_Rhône_Alpes.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Auvergne Rhône Alpes
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Bourgone_Franche_Comté.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Bourgone Franche Comté
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Bretagne.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Bretagne
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Centre_Val_De_Loire.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Centre Val De Loire
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Corse.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Corse
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Grand_Est.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Grand Est
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Haut_de_France.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Haut de France
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Île_de_France.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Île de France
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Normandie.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Normandie
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Nouvelle_Aquitaine.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Nouvelle Aquitaine
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Occitanie.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Occitanie
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Pays_De_La_Loire.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Pays De La Loire
              </Text>
            </View>
            <View
              style={{
                width: screenWidth * 0.4,
                backgroundColor: "#fff",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                paddingHorizontal: 5,

                paddingBottom: 10,
              }}
            >
              <Image
                source={require("../assets/img/regions/Provence_Alpes_Côte_D'Azur.png")}
                style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
              />
              <Text style={{ textAlign: "center", color: "#505050" }}>
                Provence Alpes Côte D'Azur
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
