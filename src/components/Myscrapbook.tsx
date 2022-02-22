import { View, Text, Image, Button } from "react-native";
import React from "react";
import { styles } from "../style";
import { bookData } from "../../types/type";
import { useNavigation } from "@react-navigation/native";

function textLengthOverCut(txt, len, lastTxt) {
  if (len == "" || len == null) { // 기본값
      len = 20;
  }
  if (lastTxt == "" || lastTxt == null) { // 기본값
      lastTxt = "...";
  }
  if (txt.length > len) {
      txt = txt.substr(0, len) + lastTxt;
  }
  return txt;
}
export default function Myscrapbook({ title, authors, thumbnail, contents }: bookData) {
  const navigation = useNavigation();
  const onDetail =()=>{
    //navigation.navigate()
  }
  const new_contents = textLengthOverCut(contents,20,"...")
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
          <Text style={styles.Main_title}>
            {` ● 제목 : ${title}`}
          </Text>
          <Text style={styles.Main_title}> 
            {` ● 저자 : ${authors}`}
          </Text>
          <Text style={styles.Main_title}> 
            {` ● 내용 : ${new_contents}`}
          </Text>
            <Text style={styles.Main_button}>
              <Button color="#2c2c2c" title="넘어가기"></Button>
            </Text>
            
        </View>
          
      </View>
        
    </View>
  );
}
