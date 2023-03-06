import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./LandingScreen";
import PostIdea from "./PostIdea";
import DisplayIdeas from "./DisplayIdeas";
const Stack = createNativeStackNavigator();
const AppEntry = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={LandingScreen} />
        <Stack.Screen name="throwIdea" component={PostIdea} />
        <Stack.Screen name="displayIdeas" component={DisplayIdeas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppEntry;
