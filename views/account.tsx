import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Footer } from "./footer";
import { supabase } from "../lib/supabase";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Account({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={{ color: "#fff", fontSize: 20 }}>Mon Compte</Text>
          </View>
        </View>
      </LinearGradient>
      <View
        style={{
          padding: 10,
        }}
      >
        <Text style={styles.greeting}>Bonjour, le petit avocat !</Text>
        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("MyOrders")}
          >
            <Image
              source={require("../assets/img/commande.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Mes commandes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("MyMailbox")}
          >
            <Image
              source={require("../assets/img/message.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Ma messagerie</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("MyInfo")}
          >
            <Image
              source={require("../assets/img/account.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Mes infos perso</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("MyFavorites")}
          >
            <Image
              source={require("../assets/img/favori.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Mes favoris</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "#505050",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#505050",
                }}
              >
                Se déconnecter
              </Text>
              <Image
                source={require("../assets/img/logout.png")}
                style={{ width: 12, height: 12, marginLeft: 5 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
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
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "45%",
    height: 120,
    backgroundColor: "#ddd",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardImage: {
    width: 45,
    height: 45,
  },
  cardText: {
    marginTop: 10,
  },
});
