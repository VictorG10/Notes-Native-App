import React from "react";
import { FlatList, View } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete }) => {
  return (
    <View>
      <FlatList
        data={notes}
        renderItem={({ item }) => <NoteItem note={item} onDelete={onDelete} />}
        keyExtractor={(item) => item.$id}
      />
    </View>
  );
};

export default NoteList;
