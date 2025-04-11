import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Logo from "../assets/images/icon.png";
import { screenHeight, screenWidth } from "../utils/Constamts";
import { resetAndNavigate } from "../utils/Helpers";
const Main = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (loaded && !hasNavigated) {
      console.log("hello callled");
      const timeOut = setTimeout(() => {
        resetAndNavigate("/home");
      }, 1000);
      return () => clearInterval(timeOut);
    }
  }, [loaded, hasNavigated]);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.2,
  },
});

export default Main;
