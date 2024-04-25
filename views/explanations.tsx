import React, { useRef, useState } from "react";
import { Image, Text } from "react-native";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Explanations({ navigation }) {
  const [disabled, setDisabled] = useState(true);
  const buttonRef = useRef<View>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        onMomentumScrollEnd={(event) => {
          if (
            Math.round(event.nativeEvent.contentOffset.x) ===
            Math.round(screenWidth * 3)
          ) {
            setDisabled(false);
          } else {
            setDisabled(true);
          }
        }}
      >
        <View style={styles.scrollView__Section}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/img/explications0.png")}
              style={{
                height: screenWidth * 0.875,
                width: screenWidth * 0.875,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: "#4EA04C",
                fontSize: 30,
                fontWeight: "600",
                textAlign: "justify",
              }}
            >
              Des produits artisanaux de qualité
            </Text>
            <Text
              style={{
                color: "#555",
                fontSize: 20,
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Tortor condimentum gravida
              pellentesque sed.
            </Text>
            <Text
              style={{
                color: "#555",
                fontSize: 20,
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
        </View>
        <View style={styles.scrollView__Section}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/img/explications1.png")}
              style={{
                height: screenWidth * 0.875,
                width: screenWidth * 0.875,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: "#4EA04C",
                fontSize: 30,
                fontWeight: "600",
                textAlign: "justify",
              }}
            >
              Faites votre commande en ligne
            </Text>
            <Text
              style={{
                color: "#555",
                fontSize: 20,
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Tortor condimentum gravida
              pellentesque sed.
            </Text>
            <Text
              style={{
                color: "#555",
                fontSize: 20,
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
        </View>
        <View style={styles.scrollView__Section}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/img/explications2.png")}
              style={{
                height: screenWidth * 0.875,
                width: screenWidth * 0.875,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: "#4EA04C",
                fontSize: 30,
                fontWeight: "600",
                textAlign: "justify",
              }}
            >
              Nos producteurs préparent votre commande
            </Text>
            <Text
              style={{
                color: "#555",
                fontSize: 20,
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Tortor condimentum gravida
              pellentesque sed.
            </Text>
            <Text
              style={{
                color: "#555",
                fontSize: 20,
                marginTop: 10,
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
        </View>
        <View style={styles.scrollView__Section}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/img/explications3.png")}
              style={{
                height: screenWidth * 0.875,
                width: screenWidth * 0.875,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: "#4EA04C",
                fontSize: 30,
                fontWeight: "600",
                textAlign: "justify",
              }}
            >
              Vous êtes livré où vous le souhaitez en 24h-48h
            </Text>
            <Text style={styles.section__text}>
              Lorem ipsum dolor sit amet consectetur. Tortor condimentum gravida
              pellentesque sed.
            </Text>
            <Text style={styles.section__text}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                Continuer
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView__Section: {
    justifyContent: "space-around",
    paddingHorizontal: 18,
    width: screenWidth,
  },

  section__text: {
    color: "#555",
    fontSize: 20,
    marginTop: 10,
    textAlign: "justify",
  },
});
