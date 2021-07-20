import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>Todo</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 38,
    backgroundColor: "coral",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
