import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./views/landing";
import Signin from "./views/signin";
import Signup from "./views/signup";
import MailConfirm from "./views/mail_confirm";
import Explanations from "./views/explanations";
import MainSearch from "./views/main_search";
import Vegetables from "./views/search_vegetables";
import Meat from "./views/search_meat";
import Fish from "./views/search_fish";
import Salty from "./views/search_salty";
import Sugary from "./views/search_sugary.tsx";
import Drinks from "./views/search_drinks";
import Milk from "./views/search_milk";
import Takeaway from "./views/search_takeaway";
import Producer from "./views/search_producer";
import Producteur from "./views/producteur";
import Produit from "./views/produit";
import VracVegetables from "./views/vrac_vegetables";
import VracMeat from "./views/vrac_meat";
import VracFish from "./views/vrac_fish";
import VracDrinks from "./views/vrac_drinks";
import VracSalty from "./views/vrac_salty";
import VracSugary from "./views/vrac_sugary";
import VracTakeaway from "./views/vrac_takeaway";
import VracMilk from "./views/vrac_milk";
import { Home } from "./views/home";
import Footer from "./views/footer";
import { SearchProvider, Search_bar } from "./views/search_bar";
import Account from "./views/account";
import Panier from "./views/panier";
import MyFavorites from "./views/my_favorite";
import MyOrders from "./views/my_orders";
import MyInfo from "./views/my_info";
import MyMailbox from "./views/my_mailbox";
import Auth from "./components/Auth";
import GeneralProduct from "./views/general_product";
import Regions from "./views/regions";
import Vrac from "./views/vrac";
<<<<<<< HEAD
import Livraison from "./views/livraison";
=======
>>>>>>> 70670d4 (18/04/2024)
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SearchProvider>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Regions"
            component={Regions}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GeneralProduct"
            component={GeneralProduct}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Producteur"
            component={Producteur}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MailConfirm"
            component={MailConfirm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Explanations"
            component={Explanations}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Footer"
            component={Footer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search_bar"
            component={Search_bar}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Panier"
            component={Panier}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Livraison"
            component={Livraison}
            options={{ headerShown: false }}
          />
          {/* Fragment with all search pages  */}
          <>
            <Stack.Screen
              name="MainSearch"
              component={MainSearch}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vegetables"
              component={Vegetables}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Meat"
              component={Meat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Fish"
              component={Fish}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Drinks"
              component={Drinks}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Salty"
              component={Salty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sugary"
              component={Sugary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Milk"
              component={Milk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Takeaway"
              component={Takeaway}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Producer"
              component={Producer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Produit"
              component={Produit}
              options={{ headerShown: false }}
            />
          </>
          {/* Fragment with all vrac pages */}
          <>
            <Stack.Screen
              name="Vrac"
              component={Vrac}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="VracVegetables"
              component={VracVegetables}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VracMeat"
              component={VracMeat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VracFish"
              component={VracFish}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VracDrinks"
              component={VracDrinks}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VracSalty"
              component={VracSalty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VracSugary"
              component={VracSugary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VracMilk"
              component={VracMilk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VracTakeaway"
              component={VracTakeaway}
              options={{ headerShown: false }}
            />
          </>
          {/* Fragment with all my pages  */}
          <>
            <Stack.Screen
              name="MyFavorites"
              component={MyFavorites}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MyOrders"
              component={MyOrders}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyInfo"
              component={MyInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyMailbox"
              component={MyMailbox}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ headerShown: false }}
            />
          </>
        </Stack.Navigator>
      </SearchProvider>
    </NavigationContainer>
  );
}
