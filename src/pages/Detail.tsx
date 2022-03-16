import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, Button, TextInput, Image } from 'react-native';
import Myscrap from '../components/MyScrap';
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

export default function Detail(props){
    //Myscrap이라는 컴포넌트 안에 이제 scrap.ts에서 만든 api가 작동되면 데이터만 넣으면 될듯?
    
    const data = props.route.params;
    const new_contents = textLengthOverCut(data.book.contents,40)
    return(
    <View style={{flex:1}}>
        <View style={{flex:1, margin: 20, display: "flex", flexDirection: "row"}}>
            <View style={{flex:1}}>
                <Image
                    style={{ height:'100%', width:'100%', resizeMode:'contain'}}
                    source={{
                        uri: data.book.thumbnail,
                    }}  
                    />
            </View>
            
            <View style={{flex:1}}>
                <Text style={{flex:1, marginLeft:10 }}>
                    {` ● 제목 : ${data.book.title}`}
                    {`\n`}
                    {`\n`}
                    {` ● 저자 : ${data.book.authors}`}
                    {`\n`}
                    {`\n`}
                    {` ● 스크랩 개수 : ${data.countScraps}`}
                    {`\n`}
                    {`\n`}
                    {` ● contents : ${new_contents}`}

                </Text>
            </View>
        </View>
        <View style={{flex:2}}>
            <Myscrap></Myscrap>
        </View>
    </View>
    )
}