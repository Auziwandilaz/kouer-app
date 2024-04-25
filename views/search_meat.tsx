import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState, useCallback } from "react";
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
  ScrollView,
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import IconSearch from "../components/svg/icon_search";
import { supabase } from "../lib/supabase";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Meat({ navigation, route }) {
  const [active, setActive] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const [subcategories, setSubcategories] = useState([]);
  const [subcategoryFilters, setSubcategoryFilters] = useState([]);
  const [activeSections, setActiveSections] = useState([]);
  const renderItem = useCallback(
    ({ item }) => (
      <View style={{ marginHorizontal: 20 }}>
        <Text>{item.title}</Text>
      </View>
    ),
    []
  );

  const keyExtractor = useCallback(
    (item, index) => (item.id ? item.id.toString() : index.toString()),
    []
  );

  useEffect(() => {
    const fetchSubcategoriesAndFilters = async () => {
      const { data: subcategoriesData, error: subcategoriesError } =
        await supabase
          .from("subcategories")
          .select("title, title_id, category_id, id")
          .eq("category_id", route.params.id);

      if (subcategoriesError) {
        console.error(
          "Erreur lors de la récupération des sous-catégories",
          subcategoriesError
        );
      } else {
        setSubcategories(subcategoriesData);
        setActiveSections(new Array(subcategoriesData.length).fill([0]));
        console.error("route.params.id is undefined");
        for (const subcategory of subcategoriesData) {
          const { data: filtersData, error: filtersError } = await supabase
            .from("subcategories_filters")
            .select("title, subcategory_id")
            .eq("subcategory_id", subcategory.id);

          if (filtersError) {
            console.error(
              "Erreur lors de la récupération des filtres de sous-catégories",
              filtersError
            );
          } else {
            setSubcategoryFilters((prevFilters) => [
              ...prevFilters,
              ...filtersData,
            ]);
          }
        }
      }
    };

    fetchSubcategoriesAndFilters();
  }, []);

  useEffect(() => {}, [subcategoryFilters]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: screenHeight * 0.25 }}>
        <LinearGradient
          colors={["#F68989", "#F25C5C"]}
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
            Viandes & Charcuteries
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
                colors={["#F68989", "#F25C5C"]}
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
          navigation.navigate("VracMeat");
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
          <Text style={{ color: "#F25C5C", fontSize: 20 }}>En vrac</Text>
          <Image
            source={require("../assets/img/button_next.png")}
            style={{ resizeMode: "center" }}
          />
        </View>
      </TouchableOpacity>
      <FlatList
        data={subcategories}
        renderItem={({ item: subcategory, index }) => (
          <View>
            <Accordion
              activeSections={activeIndex === index ? [0] : []}
              sections={[subcategory]}
              renderHeader={(subcategory) => {
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
                    <Text style={{ color: "#555", fontSize: 20 }}>
                      {subcategory.title}
                    </Text>
                    <Image
                      source={require("../assets/img/button_plus.png")}
                      resizeMode="center"
                    />
                  </View>
                );
              }}
              renderContent={(subcategory) => {
                const filtersForSubcategory = subcategoryFilters.filter(
                  (filter) => filter.subcategory_id === subcategory.id
                );

                return (
                  <FlatList
                    data={filtersForSubcategory}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                  />
                );
              }}
              onChange={(active) => {
                if (active.length > 0) {
                  setActiveIndex(index);
                } else {
                  setActiveIndex(null);
                }
              }}
              underlayColor="transparent"
              containerStyle={{ backgroundColor: "white" }}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
