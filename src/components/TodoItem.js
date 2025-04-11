import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
const TodoItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.description}>{item?.description}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <FontAwesome6 name="pencil" size={24} color="green" />
        <Feather name="trash" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    backgroundColor: "#f2f2f2",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  infoContainer: {
    width: "70%",
  },
  iconsContainer: {
    width: "25%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#222",
  },
  description: {
    fontSize: 14,
    color: "#888",
    textAlign: "left",
  },
});

export default TodoItem;
