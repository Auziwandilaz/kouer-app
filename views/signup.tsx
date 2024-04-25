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
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../lib/supabase";
import DateTimePicker from "@react-native-community/datetimepicker";
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Signup({ navigation }) {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      last_name: null,
      first_name: null,
      email: null,
      password: null,
      phone: null,
      birthday: null,
    },
  });

  async function signUpWithEmail(data) {
    setLoading(true);

    let newUser = {
      raw_user_meta_data: {
        phone: data.phone,

        last_name: data.last_name,
        birth_date: data.birthday,
        first_name: data.first_name,
      },
    };

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: newUser,
      },
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  // N'oubliez pas d'appeler `handleSubmit` avec `signUpWithEmail` comme argument dans votre composant de formulaire
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {/* Return Button */}
      <View
        style={{
          left: screenWidth * 0.025,
          position: "absolute",
          top: screenHeight * 0.05,
          zIndex: 2,
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
      {/* Upper Section */}
      <View
        style={{
          backgroundColor: "#1B4D3E",
          height: "33%",
          paddingTop: screenHeight * 0.1,
          zIndex: 1,
        }}
      >
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
      {/* Wave Split */}
      <Image
        source={require("../assets/img/wave_split.png")}
        style={{
          height: screenHeight * 0.15,
          marginLeft: -2,
          width: "101%",
        }}
      />
      {/* Lower Section */}
      <View
        style={{
          backgroundColor: "transparent",
          flexGrow: 1,
          justifyContent: "space-around",
          marginTop: -50,
          paddingHorizontal: 18,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Controller
            name="last_name"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={{ width: "40%" }}>
                <Text
                  style={{
                    color: "#aaa",
                    fontSize: 15,
                    fontWeight: "500",
                    marginBottom: 4,
                  }}
                >
                  Nom
                </Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{
                    borderColor: "#aaa",
                    borderRadius: 9999,
                    borderWidth: 2,
                    height: 45,
                    paddingHorizontal: 16,
                  }}
                />
              </View>
            )}
          />
          <Controller
            name="first_name"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={{ width: "40%" }}>
                <Text
                  style={{
                    color: "#aaa",
                    fontSize: 15,
                    fontWeight: "500",
                    marginBottom: 4,
                  }}
                >
                  Prénom
                </Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{
                    borderColor: "#aaa",
                    borderRadius: 9999,
                    borderWidth: 2,
                    height: 45,
                    paddingHorizontal: 16,
                  }}
                />
              </View>
            )}
          />
        </View>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text
                style={{
                  color: "#aaa",
                  fontSize: 15,
                  fontWeight: "500",
                  marginBottom: 4,
                }}
              >
                Email
              </Text>
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                style={{
                  borderColor: "#aaa",
                  borderRadius: 9999,
                  borderWidth: 2,
                  height: 45,
                  paddingHorizontal: 16,
                }}
              />
            </View>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text
                style={{
                  color: "#aaa",
                  fontSize: 15,
                  fontWeight: "500",
                  marginBottom: 4,
                }}
              >
                Mot de passe
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={!passwordVisible}
                  style={{
                    flex: 1,
                    borderColor: "#aaa",
                    borderRadius: 9999,
                    borderWidth: 2,
                    height: 45,
                    paddingHorizontal: 16,
                  }}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <Text>{passwordVisible ? "Cacher" : "Afficher"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={{ width: "40%" }}>
                <Text
                  style={{
                    color: "#aaa",
                    fontSize: 15,
                    fontWeight: "500",
                    marginBottom: 4,
                  }}
                >
                  Téléphone
                </Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                  style={{
                    borderColor: "#aaa",
                    borderRadius: 9999,
                    borderWidth: 2,
                    height: 45,
                    paddingHorizontal: 16,
                  }}
                />
              </View>
            )}
          />
          <Controller
            name="birthday"
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={{ width: "40%" }}>
                <Text
                  style={{
                    color: "#aaa",
                    fontSize: 15,
                    fontWeight: "500",
                    marginBottom: 4,
                  }}
                >
                  Date de naissance
                </Text>
                <TouchableOpacity
                  onPress={() => setDatePickerVisible(true)}
                  style={{
                    borderColor: "#aaa",
                    borderRadius: 9999,
                    borderWidth: 2,
                    height: 45,
                    paddingHorizontal: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>
                    {value
                      ? new Date(value).toLocaleDateString("fr-FR")
                      : "Sélectionnez une date"}
                  </Text>
                </TouchableOpacity>
                {datePickerVisible && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={value || new Date()}
                    mode={"date"}
                    display="default"
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate || value;
                      onBlur();
                      onChange(currentDate);
                      setDatePickerVisible(false);
                    }}
                    style={{
                      borderColor: "#aaa",
                      borderRadius: 9999,
                      borderWidth: 2,
                      height: 45,
                      paddingHorizontal: 16,
                    }}
                  />
                )}
              </View>
            )}
          />
        </View>
        <LinearGradient
          colors={["#A4DF75", "#4EA04C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: 9999, height: 45 }}
        >
          <Pressable
            android_ripple={{ color: "white" }}
            onPress={handleSubmit(signUpWithEmail)}
            style={{
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
              Créer mon compte
            </Text>
          </Pressable>
        </LinearGradient>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate("Signin");
          }}
          style={{ alignItems: "center", marginBottom: 16 }}
        >
          <Text
            style={{
              borderBottomColor: "#1B4D3E",
              borderBottomWidth: 1,
              color: "#1B4D3E",
            }}
          >
            J'ai déjà un compte
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
