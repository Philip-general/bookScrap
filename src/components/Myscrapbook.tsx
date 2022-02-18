import { View, Text, Image, Button } from "react-native";
import React from "react";
import { styles } from "../style";
import { bookData } from "../../types/type";
import { useNavigation } from "@react-navigation/native";

export default function Myscrapbook({ title, authors, thumbnail }: bookData) {
  const navigation = useNavigation();
  const onDetail =()=>{
    //navigation.navigate()
  }
  return (
    <View style={styles.Main_container}>
      <View style={styles.Main_components}>
        <View>
          {thumbnail ? (
            <Image
            style={styles.Main_bookImg}
              source={{
                uri: thumbnail,
              }}
            />
          ) : null}
        </View>
          
        <View style={styles.Main_word}>
          <Text>
            {` ● 제목 : ${title}`}
            {`\n`}
            {` ● 저자 : ${authors}`}</Text>
        </View>
        <Button title="넘어가기"></Button>
      </View>
        
    </View>
  );
}
