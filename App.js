import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppEntry from "./screens/AppEntry";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Navigator name="home" component={<AppEntry />} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
