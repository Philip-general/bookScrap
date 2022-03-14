import { View, Text, Image, Button, TouchableOpacity,Alert } from "react-native";
import React,{useState} from "react";
import Icon from "react-native-vector-icons/AntDesign";


export default function Myscrap(Props){
  return (
    <View style={{flex:1}}>
        <View style={{flex:1, borderWidth:1, margin: 20, display: "flex", flexDirection: "row"}}>
            <View style={{flex:1}}>
                <Image
                    style={{ height:'100%', width:'100%', resizeMode:'contain'}}
                    source={{
                        uri: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
                    }}  
                    />
            </View>
        
            <Text style={{flex:1, marginLeft:10 }}>
                { `● 페이지 : 123`}
                {"\n"}
                {"\n"}
                { `● 글 : 스크랩에 대한 나의 의견을 적는 공간입니다.`}
            </Text>
        </View>
        <View style={{flex:1, borderWidth:1,margin: 20, display: "flex", flexDirection: "row"}}>
            <View style={{flex:1}}>
                <Image
                    style={{ height:'100%', width:'100%', resizeMode:'contain'}}
                    source={{
                        uri: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
                    }}  
                    />
            </View>
            <View style={{flex:1}}>
                <Text style={{flex:1, marginLeft:10 }}>
                    { `● 페이지 : 123`}
                    {"\n"}
                    {"\n"}
                    { `● 글 : 스크랩에 대한 나의 의견을 적는 공간입니다.`}
                </Text>
            </View>
        </View>
    </View>
    
  );
}
