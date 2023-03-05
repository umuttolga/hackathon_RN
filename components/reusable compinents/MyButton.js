import React from "react";
import { Button, Text, TouchableHighlight, View } from "react-native";

const MyButton = ({ buttonStyle, textStyle, title, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View className={buttonStyle}>
        <Text className={textStyle}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default MyButton;
