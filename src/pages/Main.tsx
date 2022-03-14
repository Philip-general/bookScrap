import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import { View } from "react-native";
import { styles } from "../style";
import {useGetScrapBooks} from "../hooks/scrapbook"
import { ScrapbookData } from "../../types/type";
import Myscrapbook from "../components/Myscrapbook";
import Loading from "../components/Loading";
import Auth from "../components/auth/Auth";
import axios from "axios"
export default function Main(){
    const navigation = useNavigation();
    // const {data:userData,isSuccess } = useGetMe();
    // if(isSuccess){
    //     if(userData.user==null ||userData.user==undefined){
    //         navigation.replace("Login")
    //     }
    // }
    //const ACCESS_TOKEN = 'accessToken';

    //console.log(axios.defaults.headers.common[ACCESS_TOKEN])
    useEffect(()=>{
    },[])
    const {data:scrapBookData, isLoading:scrapLoding, isError, refetch } = useGetScrapBooks();
    let id=0;
    return(
        <View style={styles.Main}>
            <View style={styles.Main_medium}>
                {scrapLoding? (<Loading/>):
                (<Auth>
                    <View>
                        {scrapBookData.scrapbooks?.map(({ book,star,countScraps }: ScrapbookData ) => {
                            if(star===true){
                            return (
                                <Myscrapbook
                                key={++id}
                                book={book}
                                countScraps={countScraps}
                                />
                                );
                            }
                        })}
                        {scrapBookData.scrapbooks?.map(({ book,star,countScraps }: ScrapbookData ) => {
                            if(star===false){
                            return (
                                <Myscrapbook
                                key={++id}
                                book={book}
                                countScraps={countScraps}
                                />
                                );
                            }
                        })}
                    </View>
                </Auth>)}
            </View>
        </View>     
    )
}   
