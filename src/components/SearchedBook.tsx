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
    console.log('scrap 추가',title,authors)
    mutate(Props,{
      onSuccess: (data) => {
        if(data.ok){
          //이거 스크랩북 모여있는 메인페이지로 이동할 것. 지금 명명이 잘못됐음 ㅜ
          navigation.navigate('RealMain')
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
