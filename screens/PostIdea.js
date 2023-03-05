import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import logo from "../assets/logo.png";
import UserInput from "../components/reusable compinents/UserInput";
import { useForm } from "react-hook-form";
import MyButton from "../components/reusable compinents/MyButton";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import {SelectDropdown, DropdownData} from "expo-select-dropdown";
const PostIdea = () => {
  const [selected, setSelected] = useState<DropdownData<string, string> | null>(null);  
  const [data] = useState<DropdownData<string, string>[]>([  
       {key: "1", value: "Toothbrush"}, 
       {key: "2", value: "Laptop"}, 
       {key: "3", value: "Sunglasses"},  
     {key: "4", value: "Baseball"}, 
     {key: "5", value: "Scissors"}, 
     {key: "6", value: "Bicycle"},  
     {key: "7", value: "Camera"}, 
     {key: "8", value: "Umbrella"}, 
     {key: "9", value: "Backpack"},  
     {key: "10", value: "Water bottle"}  
  ]);
  return (
    <ScrollView>
      <View className="m-auto bg-[#1A849B] h-[100vh] w-screen items-center">
        <View className="mt-10">
          <Image source={logo} />
        </View>
        <Text className="text-3xl font-semibold">Throw a New Idea!</Text>
        <View className="mr-auto flex-row items-center w-screen p-4">
          <Text className="text-xl">Title:</Text>
          <View className="flex-1 border-b-2 ">
            <UserInput
              inputStyle="ml-1 text-[16px]"
              control={control}
              name="ideaTitle"
            />
          </View>
        </View>
        <View className="mr-auto p-4">
          <Text className="text-xl">Desciption:</Text>
        </View>
        <View className=" bg-slate-300 p-2 rounded-xl h-[40vh] w-[40vh]">
          <UserInput
            inputStyle="text-[16px] bg-[]"
            control={control}
            name="ideaDescription"
          />
        </View>
        <View className="mr-auto flex-row items-center  mt-4 p-4">
          <Text className="text-xl">Category:</Text>
          <View className=" ml-2  w-[70%]">
            <Dropdown
            
            
              icon="chevron-down"
              iconColor="#E1E1E1"
              label="Select a category"
              data={DATA}
              
            />
          </View>
        </View>
        <MyButton
          buttonStyle="bg-[#6578DC] mt-4 p-4 px-10 rounded-xl"
          textStyle="text-[16px] text-white font-bold"
          title="Submit"
        />
      </View>
    </ScrollView>
  );
};

export default PostIdea;
