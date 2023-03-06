import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import logo from "../assets/logo.png";
import UserInput from "../components/reusable compinents/UserInput";
import { useForm } from "react-hook-form";
import MyButton from "../components/reusable compinents/MyButton";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";

const PostIdea = () => {
  const { control, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Business", value: "Business" },
    { label: "Education", value: "Education" },
    { label: "Health", value: "Health" },
    { label: "Creativity", value: "Creativity" },
    { label: "Entertainment", value: "Entertainment" },
    { label: "Economy", value: "Economy" },
    { label: "Travel", value: "Travel" },
    { label: "Other", value: "Other" },
  ]);
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://brainstorm-e28c3-default-rtdb.firebaseio.com/ideas.json",
        {
          title: data.ideaTitle,
          category: value,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };
  return (
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
          multiline={true}
          inputStyle="text-[16px] leading-8"
          control={control}
          name="ideaDescription"
        />
      </View>
      <View className="mr-auto flex-row items-center  mt-4 p-4">
        <Text className="text-xl">Category:</Text>
        <View className=" ml-2  w-[70%]">
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
      </View>
      <MyButton
        onPress={handleSubmit(onSubmit)}
        buttonStyle="bg-[#6578DC] mt-4 p-4 px-10 rounded-xl"
        textStyle="text-[16px] text-white font-bold"
        title="Submit"
      />
    </View>
  );
};

export default PostIdea;
