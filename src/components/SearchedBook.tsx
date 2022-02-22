import { View, Text, Image, Button } from "react-native";
import React from "react";
import { styles } from "../style";
import { bookData } from '../../types/type';
import { useAddScrapMutation } from '../hooks/addScrapBook';
import { useNavigation } from '@react-navigation/native';


export default function SearchedBook(Props: bookData) {
  const { mutate } = useAddScrapMutation();
  const {title, authors, thumbnail} = Props;
  const navigation = useNavigation();
  const addScrap = () => {
    mutate(Props,{
      onSuccess: (data) => {
        if(data.ok){
          navigation.navigate('Main')
        }
      }
    })
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
