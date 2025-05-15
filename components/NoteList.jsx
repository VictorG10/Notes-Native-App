import React from "react";
import { FlatList, View } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
  return (
    <View>
      <FlatList
        data={notes}
        renderItem={({ item }) => <NoteItem note={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NoteList;
