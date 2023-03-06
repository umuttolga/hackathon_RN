import React, {useState, useEffect} from "react";
import { Text, View, Image} from "react-native";
import MyButton from "../components/reusable compinents/MyButton";
import logo from "../assets/logo.png";
import newIdea from "../assets/newIdea.png";
import arrow from "../assets/arrow.png";

function IdeaProps(title, description, category, likes) {
  return (
    <View className="w-screen h-5/6 mt-1/6 bg-[#FFF3F3]">
      <View className="w-11/12 h-fit mt-8 mx-auto flex-row bg-[#5C95FF] rounded-xl ">
        <View className="w-1/5 h-3/4 mx-4 my-auto bg-[#FFA9A3] rounded-xl" />
        <View className="w-52 h-fit my-auto bg-[#0]">
          <Text className="text-2xl text-[#FFF] my-auto mx-auto">{title}</Text>
          <Text className="text-xl text-[#7E6C6C] my-auto mx-auto">{description}</Text>
        </View>
        <View className="w-44 h-fit my-auto bg-[#0]">
          <Image className="w-4 h-4 my-1 mx-4" source={arrow}/>
          <Text className="text-2xl text-[#00FF75] mx-3">{likes}</Text>
          <Image className="w-4 h-4 mb-1 mx-4 rotate-180" source={arrow}/>
        </View>
      </View>
    </View>
  );
  
}

const LandingScreen = () => {
  const sampleIdea = IdeaProps("test", "description", "trending", 100);
  const [ideas, setIdeas] = useState(sampleIdea);
  const [category, setCategory] = useState("Trending");

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
      <View className="w-screen h-1/6 flex-row border-2 bg-[#B9E6FF]" >
        <Image className="mt-8" source={logo}/>
        <View className="w-2/5 h-1/3 mx-6 my-20 bg-[#5C95FF] rounded-xl ">
          <Text className="text-xl text-[#FFF] my-auto mx-auto">CATEGORY</Text>
        </View>
        <Image className="my-14 mx-4" source={newIdea}/>
      </View>
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
      <>{ideas}</>
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
  );
};

// Hope code:
{/* <Text className="text-3xl text-[#000] mt-12">Landing Screen</Text>
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
    </View> */}

export default LandingScreen;
