import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IconSearch from "../components/svg/icon_search";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SearchContext = createContext({
  searchHistory: [],
  addSearch: (search) => {},
  removeSearch: (index) => {},
  searchValue: "", // Ajoutez cette ligne
  setSearchValue: (value) => {}, // Ajoutez cette ligne
});

// Créez un fournisseur pour le contexte de recherche
export function SearchProvider({ children }) {
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const loadSearchHistory = async () => {
      const savedSearchHistory = await AsyncStorage.getItem("searchHistory");
      if (savedSearchHistory) {
        setSearchHistory(JSON.parse(savedSearchHistory));
      }
    };

    loadSearchHistory();
  }, []);

  const contextValue = useMemo(
    () => ({
      searchHistory,
      addSearch,
      removeSearch,
      searchValue,
      setSearchValue,
    }),
    [searchHistory, searchValue]
  );

  const addSearch = async (search) => {
    const newHistory = [...searchHistory, search];
    setSearchHistory(newHistory);
    // Enregistrer l'historique de recherche dans le local storage
    await AsyncStorage.setItem("searchHistory", JSON.stringify(newHistory));
  };

  const removeSearch = async (index) => {
    const newHistory = [...searchHistory];
    newHistory.splice(index, 1);
    setSearchHistory(newHistory);
    // Enregistrer l'historique de recherche dans le local storage
    await AsyncStorage.setItem("searchHistory", JSON.stringify(newHistory));
  };

  return (
    <SearchContext.Provider
      value={{
        searchHistory,
        searchValue,
        addSearch,
        removeSearch,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function Search_bar({ navigation }) {
  const {
    searchHistory,
    addSearch,
    removeSearch,
    searchValue,
    setSearchValue,
  } = useContext(SearchContext);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      return;
    }
    await addSearch(searchValue);
    navigation.navigate("GeneralProduct", { searchValue });
  };
  return (
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
          flexDirection: "row",
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowRadius: 10,
        }}
      >
        <TextInput
          placeholder="Rechercher sur Kouer"
          value={searchValue}
          onChangeText={(text) => {
            console.log(text);
            setSearchValue(text);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
          <TouchableOpacity onPress={handleSearch}>
            <LinearGradient
              colors={["#A4DF75", "#4EA04C"]}
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
              <IconSearch style={{ width: "100%", height: "100%" }} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {isFocused &&
          searchHistory.slice(-5).map((item, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{item}</Text>
              <TouchableOpacity onPress={() => removeSearch(index)}>
                <Text>Supprimer</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
