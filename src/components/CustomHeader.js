import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
const CustomHeader = ({ title, isBackButton }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          {isBackButton && (
            <Ionicons name="caret-back-circle" size={32} color="#fff" />
          )}
        </TouchableOpacity>

        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0090B0",
    padding: 15,
  },
  text: {
    fontSize: 22,
    fontFamily: "SpaceMono",
    textAlign: "center",
    color: "#fff",
  },
});

export default CustomHeader;
