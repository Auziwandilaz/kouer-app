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
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { Footer } from "./footer";
import { supabase } from "../lib/supabase";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
export default function MyInfo({ navigation }) {
  const [selectedButton, setSelectedButton] = useState("coordonnees");
  const [user, setUser] = useState(null);

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const sessionSubscription = supabase.auth.onAuthStateChange(
      (_event, session) => {
        console.log("Session:", session);
        if (session) {
          const userId = session.user.id;
          console.log("User ID:", userId);
          setUserId(userId);
          setUser(session.user);
        } else {
          setUser(null);
          setUserId(null);
        }
      }
    );
    return () => {
      sessionSubscription;
    };
  }, []);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleLastNameChange = () => {
    // Code pour changer le nom de famille
  };

  const handleFirstNameChange = () => {
    // Code pour changer le prénom
  };

  const handlePhoneChange = () => {
    // Code pour changer le téléphone
  };

  const handleEmailChange = () => {
    // Code pour changer l'email
  };

  const handleBirthDateChange = () => {
    // Code pour changer la date de naissance
  };

  const handlePasswordChange = () => {
    // Code pour changer le mot de passe
  };

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase.from("customer_address").insert([
        {
          country: country,
          city: city,
          full_address: street,
          zip_code: postalCode,
          address_phone: phoneNumber,
          customer_id: userId,
        },
      ]);

      if (error) {
        throw error;
      }

      console.log(data);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données à Supabase", error);
    }
  };

  return (
    // recuperation des informations de l'utilisateur (nom, prenom, date de naissance, email, date d'inscription, etc.)
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
            <Text style={{ color: "#fff", fontSize: 20 }}>Mes Infos perso</Text>
          </View>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={{ marginBottom: screenHeight * 0.1 }}>
          <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            <View style={{ padding: 10 }}>
              <View style={{ padding: 10 }}>
                <Text style={{}}>Mes Informations personnelles</Text>
                <Text>membres depuis le : 16/10/2023</Text>

                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor:
                        selectedButton === "coordonnees" ? "#4EA04C" : "white",
                      padding: 10,
                      borderRadius: 9999,
                      width: screenWidth * 0.5,
                      marginBottom: 10,
                      borderWidth: 1,
                      borderColor: "#E3E3E3",
                    }}
                    onPress={() => setSelectedButton("coordonnees")}
                  >
                    <Text
                      style={{
                        color:
                          selectedButton === "coordonnees" ? "white" : "black",
                        textAlign: "center",
                      }}
                    >
                      Mes coordonnées
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor:
                        selectedButton === "adresses" ? "#4EA04C" : "white",
                      padding: 10,
                      borderRadius: 9999,
                      width: screenWidth * 0.5,
                      marginBottom: 10,
                      borderWidth: 1,
                      borderColor: "#E3E3E3",
                    }}
                    onPress={() => setSelectedButton("adresses")}
                  >
                    <Text
                      style={{
                        color:
                          selectedButton === "adresses" ? "white" : "black",
                        textAlign: "center",
                      }}
                    >
                      Mes adresses de livraison
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor:
                        selectedButton === "paiement" ? "#4EA04C" : "white",
                      padding: 10,
                      borderRadius: 9999,
                      width: screenWidth * 0.5,
                      marginBottom: 10,
                      borderWidth: 1,
                      borderColor: "#E3E3E3",
                    }}
                    onPress={() => setSelectedButton("paiement")}
                  >
                    <Text
                      style={{
                        color:
                          selectedButton === "paiement" ? "white" : "black",
                        textAlign: "center",
                      }}
                    >
                      Mes moyens de paiement
                    </Text>
                  </TouchableOpacity>

                  {selectedButton === "coordonnees" && (
                    <View>
                      <View style={styles.card}>
                        <Text>Nom :</Text>
                        <Text style={{ color: "#AAAAAA" }}>
                          {user?.user_metadata?.last_name}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            style={styles.touch}
                            onPress={handleLastNameChange}
                          >
                            <Text
                              style={{ textAlign: "center", color: "white" }}
                            >
                              Modifier
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.card}>
                        <Text>Prénom :</Text>
                        <Text style={{ color: "#AAAAAA" }}>
                          {user?.user_metadata?.first_name}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            style={styles.touch}
                            onPress={handleFirstNameChange}
                          >
                            <Text
                              style={{ textAlign: "center", color: "white" }}
                            >
                              Modifier
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.card}>
                        <Text>Téléphone :</Text>
                        <Text style={{ color: "#AAAAAA" }}>
                          {user?.user_metadata?.phone}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            style={styles.touch}
                            onPress={handlePhoneChange}
                          >
                            <Text
                              style={{ textAlign: "center", color: "white" }}
                            >
                              Modifier
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.card}>
                        <Text>Email :</Text>
                        <Text style={{ color: "#AAAAAA" }}>{user?.email}</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            style={styles.touch}
                            onPress={handleEmailChange}
                          >
                            <Text
                              style={{ textAlign: "center", color: "white" }}
                            >
                              Modifier
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.card}>
                        <Text>Date de naissance :</Text>
                        <Text style={{ color: "#AAAAAA" }}>
                          {user?.user_metadata?.birth_date}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            style={styles.touch}
                            onPress={handleBirthDateChange}
                          >
                            <Text
                              style={{ textAlign: "center", color: "white" }}
                            >
                              Modifier
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.card}>
                        <Text>Mot de passe :</Text>
                        <Text style={{ color: "#AAAAAA" }}>
                          {user?.user_metadata?.password}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            style={styles.touch}
                            onPress={handlePasswordChange}
                          >
                            <Text
                              style={{ textAlign: "center", color: "white" }}
                            >
                              Modifier
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                  {selectedButton === "adresses" && (
                    <View>
                      <View style={styles.card}>
                        <Text style={styles.title}>Adresse 1</Text>
                        <Text>Nom Prénom</Text>
                        <Text>14 rue Gérard Lavoix</Text>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text>Adresse de livraison</Text>
                        </View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text>Adresse de facturation</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "flex-end",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              /* Votre fonction de modification ici */
                            }}
                            style={styles.touch}
                          >
                            <Text
                              style={{ textAlign: "center", color: "white" }}
                            >
                              Modifier
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              /* Votre fonction de suppression ici */
                            }}
                            style={styles.touch}
                          >
                            <Text
                              style={{ textAlign: "center", color: "white" }}
                            >
                              Supprimer
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View>
                        <View>
                          {showForm && (
                            <>
                              <TextInput
                                placeholder="Pays"
                                value={country}
                                onChangeText={setCountry}
                              />
                              <TextInput
                                placeholder="Ville"
                                value={city}
                                onChangeText={setCity}
                              />
                              <TextInput
                                placeholder="Rue"
                                value={street}
                                onChangeText={setStreet}
                              />
                              <TextInput
                                placeholder="Code Postal"
                                value={postalCode}
                                onChangeText={setPostalCode}
                              />
                              <TextInput
                                placeholder="Numéro de téléphone"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                              />
                              <Button
                                title="Soumettre"
                                onPress={handleSubmit}
                              />
                            </>
                          )}
                          <TouchableOpacity onPress={() => setShowForm(true)}>
                            <Text
                              style={{
                                textAlign: "center",
                                textDecorationLine: "underline",
                                color: "#4EA04C",
                              }}
                            >
                              + Ajouter une adresse
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                  {selectedButton === "paiement" && (
                    <View>
                      <Text>paiement</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
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
  button: {
    marginTop: 10,
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  touch: {
    backgroundColor: "#4EA04C",
    padding: 10,
    borderRadius: 9999,
    width: screenWidth * 0.5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    marginTop: 10,
  },
});
