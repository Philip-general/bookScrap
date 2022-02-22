import { View, Text, Image, Button } from "react-native";
import React from "react";
import { styles } from "../style";
import { ScrapbookData } from "../../types/type";
import { useNavigation } from "@react-navigation/native";
import { useDeleteScrapBooks } from "../hooks/Main";

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

export default function Myscrapbook({ title, authors, thumbnail, contents, scrapbookId }: ScrapbookData) {
  const navigation = useNavigation();
  const onDetail =()=>{
    console.log(scrapbookId)
    //navigation.navigate(/detail/:scrapbookId)
  }
  const onDelete =async()=>{
    console.log(scrapbookId)
    //const result = await useDeleteScrapBooks(scrapbookId)
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
            <View style={styles.Main_button}>
              <Text>
                <Button color="#2c2c2c" onPress={onDelete} title="삭제하기"></Button>
              </Text>
              <Text>
                <Button color="#2c2c2c" onPress={onDetail} title="넘어가기"></Button>
              </Text>
            </View>
            
        </View>
          
      </View>
        
    </View>
  );
}
