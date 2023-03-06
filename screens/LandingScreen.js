import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import MyButton from "../components/reusable compinents/MyButton";
import logo from "../assets/logo.png";
import newIdea from "../assets/newIdea.png";
import arrow from "../assets/arrow.png";
import axios from "axios";

function IdeaProps(title, description, category, likes) {
  return (
    <View className="w-screen h-5/6 mt-1/6 bg-[#FFF3F3]">
      <View className="w-11/12 h-fit mt-8 mx-auto flex-row bg-[#5C95FF] rounded-xl ">
        <View className="w-1/5 h-3/4 mx-4 my-auto bg-[#FFA9A3] rounded-xl" />
        <View className="w-52 h-fit my-auto bg-[#0]">
          <Text className="text-2xl text-[#FFF] my-auto mx-auto">{title}</Text>
          <Text className="text-xl text-[#7E6C6C] my-auto mx-auto">
            {description}
          </Text>
        </View>
        <View className="w-44 h-fit my-auto bg-[#0]">
          <Image className="w-4 h-4 my-1 mx-4" source={arrow} />
          <Text className="text-2xl text-[#00FF75] mx-3">{likes}</Text>
          <Image className="w-4 h-4 mb-1 mx-4 rotate-180" source={arrow} />
        </View>
      </View>
    </View>
  );
}

const LandingScreen = ({ navigation }) => {
  const [ideas, setIdeas] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://brainstorm-e28c3-default-rtdb.firebaseio.com/ideas.json"
        );
        const arr = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        setIdeas(arr);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [ideas]);
  const items = ideas.map((item) => (
    <View
      className="flex-row justify-around bg-[#23B0CF] p-4 mt-2 w-[45vh]"
      key={item.id}
    >
      <View className="bg-[#fff] w-[8vh] h-[8vh]">
        <Text
          className={`${
            item.category.length > 12 ? "text-[10px]" : "text-[16px]"
          } m-auto `}
        >
          {item.category}
        </Text>
      </View>
      <View className="">
        <Text className="mx-auto text-[24px] w-[20vh] text-center font-bold  bg-white">
          {item.title}
        </Text>
        <Text className="mt-4 font-semibold mx-auto  p-2 bg-white">
          {item.description.length > 200
            ? "Click for details"
            : item.description}
        </Text>
      </View>
      <View>
        <Text>Rate</Text>
      </View>
    </View>
  ));
  // useEffect(() => {
  // 	const fetchIdeas = async () => {
  // 		const res = await this.props.api.getIdeas(category);
  // 		if (res.err) {
  // 			// TODO: Show some error message to the user here!
  // 			console.log(res.val);
  // 			return;
  // 		}
  // 		setIdeas(res.val);
  //   }

  //   // fetchIdeas();
  //   // setIdeas(sampleIdea);
  // }, [ideas]);

  return (
    <View className="m-auto bg-[#B9E6FF] h-screen w-screen items-center">
      <View className="w-screen h-1/6 flex-row border-2 bg-[#B9E6FF]">
        <Image className="mt-8" source={logo} />
        <View className="w-2/5 h-1/3 mx-6 my-20 bg-[#5C95FF] rounded-xl ">
          <Text className="text-xl text-[#FFF] my-auto mx-auto">CATEGORY</Text>
        </View>
        <TouchableHighlight
          underlayColor={"none"}
          onPress={() => {
            navigation.navigate("throwIdea");
          }}
        >
          <Image className="my-14 mx-4" source={newIdea} />
        </TouchableHighlight>
      </View>
      <View className="">{items}</View>
      {/* <View className="w-screen h-5/6 mt-1/6 bg-[#FFF3F3]">
        <View className="w-11/12 h-fit mt-8 mx-auto flex-row bg-[#5C95FF] rounded-xl ">
          <View className="w-1/5 h-3/4 mx-4 my-auto bg-[#FFA9A3] rounded-xl" />
          <View className="w-52 h-fit my-auto bg-[#0]">
            <Text className="text-2xl text-[#FFF] my-auto mx-auto">Test</Text>
            <Text className="text-xl text-[#7E6C6C] my-auto mx-auto">description</Text>
          </View>
          <View className="w-44 h-fit my-auto bg-[#0]">
            <Image className="w-4 h-4 my-1 mx-4" source={arrow}/>
            <Text className="text-2xl text-[#00FF75] mx-3">50</Text>
      <View className="flex-row items-center">
              <Image className="w-4 h-4 mb-1 mx-4 rotate-180" source={arrow}/>
          </View>
        </View>
      </View> */}

      {/* <MyButton
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
      /> */}
    </View>
  );
};

// Hope code:
{
  /* <Text className="text-3xl text-[#000] mt-12">Landing Screen</Text>
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
    </View> */
}

export default LandingScreen;
