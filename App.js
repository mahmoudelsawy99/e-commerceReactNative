import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  Button,
  ScrollView,
} from "react-native";
import Card from "./Components/Card";
import Form from "./Components/Form";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Details from "./Components/Details";
import TAB from "./TAB";
import Splash from "./Components/Splash";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#72039a" },
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="splash"
            component={Splash}
          />
          <Stack.Screen name="form" component={Form} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={TAB}
          ></Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({});
