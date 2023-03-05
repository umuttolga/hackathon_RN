import React from "react";
import { Image, Text, View } from "react-native";
import logo from "../../assets/logo.png";
import add from "../../assets/add.png";

const DisplayHeader = () => {
  return (
    <View className="bg-[#B9E6FF]">
      <View className="p-2 items-center flex-row">
        <Image source={logo} />
        <View className="bg-">
          <Text className="text-[32px] font-bold mx-auto">Category</Text>
        </View>
        <Image source={add} />
      </View>
    </View>
  );
};

export default DisplayHeader;
