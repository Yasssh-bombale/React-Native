import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const todo = useSelector((state) => state.todo);
  console.log(todo);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
