import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const CustomAddButton = ({ buttonText, onSubmit }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSubmit}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    padding: 10,
    paddingHorizontal: "50",
    backgroundColor: "#3C75BE",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    color: "#fff",
  },
});

export default CustomAddButton;
