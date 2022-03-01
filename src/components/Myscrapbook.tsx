import { View, Text, Image, Button, TouchableOpacity,Alert } from "react-native";
import React,{useState} from "react";
import { styles } from "../style";
import { ScrapbookData } from "../../types/type";
import { useNavigation } from "@react-navigation/native";
import { useDeleteScrapBooks } from "../hooks/main";
import Icon from "react-native-vector-icons/AntDesign";

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

function customAuthors(list){
  var result =""
  if (list.length<=3){
    for(var i in list){
      if (i+1==list.length){
        result = result+list[i]
      }
      else{
        result = result+list[i]+", "
      }
    }
  }
  else{
    for(var i=0 ; i<3; i++){
      result = result + list[i]+", "
      
    }
    result = result+" ..."
  }
  return result;
}
export default function Myscrapbook({ title,authors, thumbnail, scrapbookId,fixpoint, useGroup,countscrap }: ScrapbookData) {
  const navigation = useNavigation();
  const [render,setRender] =useState(fixpoint)
  const onDetail =()=>{
    console.log(scrapbookId)
    //navigation.navigate(/detail/:scrapbookId)
  }
  const onDelete =async()=>{
    console.log("삭제")
    Alert.alert('삭제', '삭제하시겠습니까?', [
      { text: 'OK', onPress: () => console.log("axios보내면 됨")},
      {text:"No",onPress:()=>console.log("No")}])
    //console.log(scrapbookId)
    //const result = await useDeleteScrapBooks(scrapbookId)
  }
  const onChange =()=>{
    if(render){
      setRender(false)
      
    }
    else{
      setRender(true)
    }
  }
  const new_title=textLengthOverCut(title,9,"...")
  const new_author= customAuthors(authors)
  return (
    <TouchableOpacity style={styles.Main_container} onPress={onDetail}>
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
          <Text style={styles.Main_Icon}>
            {render?<Icon name="star" onPress={onChange} size={25} color="#FFE302"/>:<Icon name="staro" onPress={onChange} size={25} color="#FFE302"/> }
            <Icon name="close" size={25} onPress={onDelete}/>
          </Text>
          <Text style={styles.Main_title}>
            {` ● 제목 : ${new_title}   `}
            {useGroup?(<Text style={styles.Main_box}>{"Group"}</Text>) :null}
            {`\n`}
            {`\n`}
            {` ● 저자 : ${new_author}`}
            {`\n`}
            {`\n`}
            {` ● 스크랩 개수 : ${countscrap}`}
          </Text>
            
        </View>
          
      </View>
    </TouchableOpacity>

  );
}
