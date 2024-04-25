import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
  AppState,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { supabase } from "../lib/supabase";
import { Input } from "react-native-elements";
import { signInWithEmail } from "../components/Auth";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#1B4D3E",
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            left: screenWidth * 0.025,
            position: "absolute",
            top: screenHeight * 0.05,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("Landing");
            }}
          >
            <Image
              source={require("../assets/img/button_return.png")}
              style={{ height: screenHeight * 0.07, resizeMode: "contain" }}
            />
          </TouchableWithoutFeedback>
        </View>
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
      <Image
        source={require("../assets/img/wave_split.png")}
        style={{ height: screenHeight * 0.15, marginLeft: -2, width: "101%" }}
      ></Image>
      <View
        style={{
          backgroundColor: "#00000000",
          flex: 1,
          justifyContent: "space-around",
          marginTop: -20,
          paddingHorizontal: 18,
        }}
      >
        <Input
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
        <Input
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword}
          placeholder="Password"
          autoCapitalize={"none"}
        />
        <Icon
          name={showPassword ? "eye-slash" : "eye"}
          size={10}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
        <LinearGradient
          colors={["#A4DF75", "#4EA04C"]}
          start={{ x: -0.25, y: -0.25 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: 9999, height: 45, marginVertical: 20 }}
        >
          <Pressable
            android_ripple={{ color: "white" }}
            onPress={() => signInWithEmail(email, password, navigation)}
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text
              style={{
                borderBottomColor: "#1b4d3e",
                borderBottomWidth: 1,
                color: "#1b4d3e",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              S'inscrire
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <Text
              style={{
                borderBottomColor: "#1b4d3e",
                borderBottomWidth: 1,
                color: "#1b4d3e",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              Mot de passe oublié
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
