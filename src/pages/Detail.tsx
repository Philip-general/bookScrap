import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, Button, TextInput,Image } from 'react-native';

export default function Detail(){
    //const scrapbookID = route.parmas.scrapbookID
    return(
    <View style={{flex:1}}>
        <View style={{flex:1,margin: 20,display: "flex", flexDirection: "row", }}>
            <View style={{flex:1}}>
                <Image
                    style={{ height:'100%',width:'100%',resizeMode:'contain'}}
                    source={{
                        uri: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038",
                    }}  
                    />
            </View>
            <View style={{flex:1}}>
                <Text style={{flex:1, marginLeft:10, }}>
                    {` ● 제목 : 안녕   `}
                    {`\n`}
                    {`\n`}
                    {` ● 저자 : 조용환`}
                    {`\n`}
                    {`\n`}
                    {` ● 스크랩 개수 : 26`}
                    {`\n`}
                    {`\n`}
                    {` ● contents : 안녕하세요 책의 내용은 하이하이하이 바이바이바이`}

                </Text>
            
            </View>
        </View>
        <View style={{flex:2}}>
            
        </View>
    </View>
    )
}