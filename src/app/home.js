import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import AddButton from "../components/AddButton";
import { screenHeight } from "../utils/Constamts";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const data = useSelector((state) => state.todo.data);
  const renderItem = ({ item }) => {
    return <TodoItem item={item} />;
  };
  console.log(data);
  return (
    <View style={styles.container}>
      <CustomHeader title="Todo App" />

      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Click on plus button to add your goals!
            </Text>
          </View>
        }
        initialNumToRender={10}
        key={(item) => item?.id}
        windowSize={10}
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
      />

      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  emptyContainer: {
    height: screenHeight - 100,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 20,
  },
});

export default Home;
