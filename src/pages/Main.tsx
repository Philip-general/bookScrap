import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, Button, TextInput,Alert } from "react-native";
import { styles } from "../style";
import {useScrapBooks} from "../hooks/Main"
import { bookData } from "../../types/type";
import Myscrapbook from "../components/Myscrapbook";

export default function Main(){
    let Scrap="Scrap"
    const [userId,setUserId] = useState(0);
    const { data, isLoading, isError, refetch } = useScrapBooks(1);
    console.log(data)
    let id=1;
    return(
        <View style={styles.Main}>
            <View style={styles.Main_header}>
                <Text style={styles.Main_header_left}>
                    {Scrap}
                </Text>
                <Text style ={styles.Main_header_right}>
                    {"검색하기"}
                </Text>
            </View>
            <View style={styles.Main_medium}>
                {isLoading ? (<View>로딩중입니다</View>):
                (<View>
                    {data.documents?.map(({ title, authors, thumbnail }: bookData) => {
                    return (
                        <Myscrapbook
                        key={++id}
                        authors={authors}
                        thumbnail={thumbnail}
                        title={title}
                        /> 
                    );
                    })}
                </View>) }
            </View>
        </View>
        
    )
}   