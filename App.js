import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
// import Sandbox from "./components/Sandbox";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee.", key: "1" },
    { text: "create an app.", key: "2" },
    { text: "play on the switch.", key: "3" },
  ]);

  const handleSubmit = (text) => {
    console.log(text);

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oops!", "Todos must be more than 3 characters!", [
        { text: "Understood" },
      ]);
    }
  };

  const handlePress = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleSubmit={handleSubmit} />
          <View style={styles.content}>
            <FlatList
              style={styles.list}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} handlePress={handlePress} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
