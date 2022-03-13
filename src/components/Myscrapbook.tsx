import { View, Text, Image, Button, TouchableOpacity,Alert } from "react-native";
import React,{useState} from "react";
import { styles } from "../style";
import { ScrapbookData } from "../../types/type";
import { useNavigation } from "@react-navigation/native";
import { deleteStarScrapBooks, getStarScrapBooks,deleteScrapBooks } from "../hooks/scrapbook";
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


export default function Myscrapbook({ book,star,countScraps }: ScrapbookData) {
  const navigation = useNavigation();
  const [render,setRender] =useState(star)
  const onDetail =()=>{
    console.log(book.id)
    //navigation.navigate(/detail/:scrapbookId)
  }
  const onDelete =async()=>{
    console.log("삭제")
    const result = await deleteScrapBooks(book.id)
    navigation.replace("Main")
  }
  const onChange =async()=>{
    if(render){
      setRender(false)
      const result = await deleteStarScrapBooks(book.id)
      navigation.replace("Main")
    }
    else{
      setRender(true)
      const result = await getStarScrapBooks(book.id)
      navigation.replace("Main")
    }
  }
  const new_title=textLengthOverCut(book.title,9,"...")
  const new_author= textLengthOverCut(book.authors,9,"...")
  return (
    <TouchableOpacity style={styles.Main_container} onPress={onDetail}>
      <View style={styles.Main_components}>
        <View>
          {book.thumbnail ? (
            <Image
            style={styles.Main_bookImg}
              source={{
                uri: book.thumbnail,
              }}  
            />
          ) : null}
        </View>
        
        <View style={styles.Main_word}>
          <Text style={styles.Main_Icon}>
            {star?<Icon name="star" onPress={onChange} size={25} color="#FFE302"/>:<Icon name="staro" onPress={onChange} size={25} color="#FFE302"/> }
            <Icon name="close" size={25} onPress={onDelete}/>
          </Text>
          <Text style={styles.Main_title}>
            {` ● 제목 : ${new_title}   `}
            {/*useGroup?(<Text style={styles.Main_box}>{"Group"}</Text>) :null*/}
            {`\n`}
            {`\n`}
            {` ● 저자 : ${book.authors}`}
            {`\n`}
            {`\n`}
            {` ● 스크랩 개수 : ${countScraps}`}
          </Text>
            
        </View>
          
      </View>
    </TouchableOpacity>

  );
}
