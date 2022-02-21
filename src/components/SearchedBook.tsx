import { View, Text, Image, Button } from "react-native";
import React from "react";
import { styles } from "../style";
import { bookData } from '../../types/type';


export default function SearchedBook(Props: bookData) {
  const {title, authors, thumbnail} = Props
  const addScrap = () => {
    console.log('scrap 추가',title,authors)
  }

  return (
    <View style={{...styles.container}}>
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
      <Button onPress={addScrap} title='+'/>
    </View>
  );
}
