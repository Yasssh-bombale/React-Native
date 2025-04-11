import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import CustomAddButton from "../components/CustomAddButton";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { router } from "expo-router";

const Addtodo = () => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const onSubmit = async () => {
    if (value.trim() == "" || description.trim() == "") {
      Alert.alert("Please Enter something!");
      return;
    }

    dispatch(
      addTodo({
        title: value,
        description: description,
      })
    );

    router.back();
  };
  return (
    <View style={styles.container}>
      <CustomHeader title="Create new todo" isBackButton={true} />
      <TextInput
        placeholder="Enter your todo"
        value={value}
        onChangeText={setValue}
        style={[styles.input, styles.morePadding]}
      />
      <TextInput
        placeholder="Enter your todo description"
        value={description}
        onChangeText={setDescription}
        multiline
        maxLength={120}
        style={[styles.input, styles.minHeight]}
      />

      <CustomAddButton buttonText={"Add todo"} onSubmit={onSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  morePadding: {
    marginTop: 10,
  },
  minHeight: {
    minHeight: 120,
  },
});

export default Addtodo;
