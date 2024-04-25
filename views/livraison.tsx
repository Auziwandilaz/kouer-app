import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Image,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export default function Livraison({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#ADE283", "#4EA04C"]}
        start={{ x: 0, y: -0.75 }}
        end={{ x: 0, y: 1 }}
        style={{
          alignItems: "flex-start",
          backgroundColor: "#4EA04C",

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
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Paiement & Livraison
            </Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Adresse de livraison
          </Text>

          <Text>Choisir une autre adresse</Text>

          <TouchableOpacity>
            <Text style={{ color: "#fff" }}>Continuer</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Type de livraison
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#fff" }}>Continuer</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Moyen de paiement
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: screenHeight * 0.1,
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
