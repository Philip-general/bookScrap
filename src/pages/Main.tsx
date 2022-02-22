import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput,Alert ,Image} from "react-native";
import { styles } from "../style";
import {useScrapBooks} from "../hooks/Main"
import { ScrapbookData } from "../../types/type";
import Myscrapbook from "../components/Myscrapbook";
import AsyncStorage from '@react-native-community/async-storage';


export default function Main(){
    const navigation = useNavigation();
    let Scrap="Scrap"
    useEffect(()=>{
        AsyncStorage.getItem("AccessToken").then(e=>{
            console.log(e)
            if (e===null || e===undefined){
                navigation.replace("Login")
            }
        })
    },[])
    
    //Token을 넘겨주는거로 바꿔야함
    const { data, isLoading, isError, refetch } = useScrapBooks();
    return(
        <View style={styles.Main}>
            <View style={styles.Main_header}>
                <Text style={styles.Main_header_left}>
                    {Scrap}
                </Text>
            </View>
            <View style={styles.Main_medium}>
                {isLoading ? (<View>로딩중입니다</View>):
                (<View>
                    {data.documents?.map(({ title, authors, thumbnail,contents,scrapbookId }: ScrapbookData ) => {
                    return (
                        <Myscrapbook
                        key={scrapbookId}
                        authors={authors}
                        thumbnail={thumbnail}
                        title={title}
                        contents={contents}
                        scrapbookId={scrapbookId}
                        /> 
                    );
                    })}
                </View>)}
            </View>
        </View>     
    )
}   