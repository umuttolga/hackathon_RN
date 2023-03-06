import React from "react";
import { Text, View } from "react-native";
import MyButton from "../components/reusable compinents/MyButton";

const LandingScreen = ({ navigation }) => {
  return (
    <View className="m-auto bg-rose-700 h-screen w-screen items-center">
      <Text className="text-3xl text-[#000] mt-12">Landing Screen</Text>
      <View className="flex-row items-center">
        <MyButton
          onPress={() => {
            navigation.navigate("throwIdea");
          }}
          buttonStyle="border-2  border-[#fff] p-2 px-8 rounded-3xl mt-4"
          textStyle="text-[#fff]"
          title="Throw Some ideas"
        />
        <MyButton
          onPress={() => {
            navigation.navigate("displayIdeas");
          }}
          buttonStyle="border-2 border-[#fff] ml-4 p-2 px-8 rounded-3xl mt-4"
          textStyle="text-[#fff]"
          title="Display Ideas"
        />
      </View>
    </View>
  );
};

export default LandingScreen;
