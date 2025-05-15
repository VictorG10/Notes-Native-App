import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NoteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NoteScreen</Text>
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
});
