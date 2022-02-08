import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../style";

type Props = {
  title: string;
  authors: [string];
  thumbnail?: string;
};

export default function SearchedBook({ title, authors, thumbnail }: Props) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{authors}</Text>
      {thumbnail ? (
        <Image
          style={styles.bookImg}
          source={{
            uri: thumbnail,
          }}
        />
      ) : null}
    </View>
  );
}
