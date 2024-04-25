import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import IconSearch from "../components/svg/icon_search";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Salty({ navigation }) {
  const categories = ["Agneau", "Boeuf", "Poulet", "Porc"];
  const [active, setActive] = useState([]);

  return (
    <SafeAreaView>
      <View style={{ height: screenHeight * 0.25 }}>
        <LinearGradient
          colors={["#FFBD80", "#FFA552"]}
          start={{ x: 0, y: -0.75 }}
          end={{ x: 0, y: 1 }}
          style={{
            alignItems: "center",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            height: screenHeight * 0.15,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "500" }}>
            Épicerie salée
          </Text>
        </LinearGradient>
        <View
          style={{
            marginTop: -16,
            paddingHorizontal: "5%",
            width: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 9999,
              elevation: 10,
              shadowColor: "black",
              shadowOpacity: 0.2,
              shadowRadius: 10,
            }}
          >
            <TextInput
              placeholder="Rechercher sur Kouer"
              style={{
                fontSize: 18,
                fontWeight: "300",
                paddingHorizontal: 20,
                paddingVertical: 8,
              }}
            />
            <View
              style={{
                bottom: 0,
                justifyContent: "center",
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <LinearGradient
                colors={["#FFBD80", "#FFA552"]}
                start={{ x: -0.1, y: -0.1 }}
                end={{ x: 1, y: 1 }}
                style={{
                  alignItems: "center",
                  borderRadius: 9999,
                  height: "90%",
                  justifyContent: "center",
                  marginRight: 3,
                  paddingVertical: 7,
                  width: screenWidth * 0.15,
                }}
              >
                {/*<IconSearch className="w-full h-full" />*/}
                <IconSearch style={{ width: "100%", height: "100%" }} />
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate("VracSalty");
        }}
        style={{
          backgroundColor: "white",
          borderBottomColor: "#e0e0e0",
          borderBottomWidth: 1,
          height: screenHeight * 0.1,
          justifyContent: "center",
          marginTop: -screenHeight * 0.03,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ color: "#FFA552", fontSize: 20 }}>En vrac</Text>
          <Image
            source={require("../assets/img/button_next.png")}
            style={{ resizeMode: "center" }}
          />
        </View>
      </TouchableOpacity>
      <Accordion
        activeSections={active}
        sections={categories}
        renderHeader={(title) => {
          return (
            <View
              style={{
                alignItems: "center",
                borderBottomColor: "#e3e3e3",
                borderBottomWidth: 1,
                flexDirection: "row",
                height: screenHeight * 0.1,
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "#555", fontSize: 20 }}>{title}</Text>
              <Image
                source={require("../assets/img/button_plus.png")}
                resizeMode="center"
              />
            </View>
          );
        }}
        renderContent={() => {
          return (
            <FlatList
              data={["machin", "truc", "bidule"]}
              renderItem={(item) => {
                return (
                  <View style={{ marginHorizontal: 20 }}>
                    <Text>{item.item}</Text>
                  </View>
                );
              }}
              keyExtractor={(item) => item}
            />
          );
        }}
        onChange={(index) => {
          setActive(index);
        }}
        underlayColor="transparent"
        containerStyle={{ backgroundColor: "white" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
