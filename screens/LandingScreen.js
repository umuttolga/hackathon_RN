import React from "react";
import { Text, View } from "react-native";
import MyButton from "../components/reusable compinents/MyButton";

const LandingScreen = () => {
  return (
    <View className="m-auto bg-rose-700 h-screen w-screen items-center">
      <Text className="text-3xl text-[#000] mt-12">Landing Screen</Text>
      <MyButton
        buttonStyle="border-2 w-[] border-[#fff] p-2 px-8 rounded-3xl mt-4"
        textStyle="text-[#fff]"
        title="Throw Some ideas"
      />
      <MyButton
        buttonStyle="border-2 border-[#fff] p-2 px-8 rounded-3xl mt-4"
        textStyle="text-[#fff]"
        title="Display Ideas"
      />
    </View>
  );
};

export default LandingScreen;
