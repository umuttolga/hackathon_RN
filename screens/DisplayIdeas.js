import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import logo from "../assets/logo.png";
import UserInput from "../components/reusable compinents/UserInput";
import { useForm } from "react-hook-form";
import MyButton from "../components/reusable compinents/MyButton";
import DropDownPicker from "react-native-dropdown-picker";
import home from "../assets/home.png";

const DisplayIdeas = ({ navigation }) => {
  const title = "Idea Title";
  const description = "Full, detailed description";
  const category = "Sports";
  return (
    <View className="m-auto bg-[#1A849B] h-[100vh] w-screen items-center">
      <View className="mt-4 mr-auto p-4 flex-row">
        <Image source={logo} />
        <View className="mr-auto p-4 flex-column">
          <Text className="font-bold ml-2 mt-6 text-4xl">{title}</Text>
          <Text className="font-semibold ml-8 mt-3 text-3xl">{category}</Text>
        </View>
        <TouchableHighlight underlayColor={"none"} onPress={() => {
          navigation.navigate("home");
        }}>
          <Image className="ml-5 mt-4 h-20 w-20" source={home} />
        </TouchableHighlight>
      </View>
      <View className="mr-auto p-4">
        <Text className="text-2xl font-semibold mt-4">Description:</Text>
        <View className="w-96 h-fit mt-4 border-2 bg-[#B9E6FF]">
          <Text className="text-l mb-8">{description}</Text>
        </View>
        <Text className="text-2xl font-semibold mt-4">Comments:</Text>
        <View className="w-96 h-3/5 mt-4 border-2 bg-[#B9E6FF]">
        </View>
      </View>
    </View>
  );
};

export default DisplayIdeas;
