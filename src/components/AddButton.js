import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
const AddButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.navigate("/addtodo")}
    >
      <Entypo name="add-to-list" size={32} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: "50",
    right: "15",
    backgroundColor: "#0090B0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 120,
    shadowColor: "#000",
    elevation: 10,
    padding: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.7,
  },
});

export default AddButton;
