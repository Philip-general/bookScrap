import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput,Alert ,Image} from "react-native";
import { styles } from "../style";
import {useScrapBooks} from "../hooks/main"
import { ScrapbookData } from "../../types/type";
import Myscrapbook from "../components/Myscrapbook";
import { useGetMe } from "../hooks/user";
import Loading from "../components/Loading";


export default function Main(){
    const navigation = useNavigation();
    let Scrap="Scrap"
    const {data:userData,isSuccess } = useGetMe();
    if(isSuccess){
        if(userData.user==null ||userData.user==undefined){
            navigation.replace("Signup")
        }
    }
    
    const {data:scrapBookData, isLoading:scrapLoding, isError, refetch } = useScrapBooks();
    return(
        <View style={styles.Main}>
            <View style={styles.Main_medium}>
                {scrapLoding? (<Loading/>):
                (<View>
                    {scrapBookData.documents?.map(({ title, authors, thumbnail,contents,scrapbookId,countscrap,useGroup,fixpoint }: ScrapbookData ) => {
                        if(fixpoint==true){
                           return (
                            <Myscrapbook
                            key={scrapbookId}
                            authors={authors}
                            thumbnail={thumbnail}
                            title={title}
                            contents={contents}
                            scrapbookId={scrapbookId}
                            countscrap={countscrap}
                            useGroup={useGroup}
                            fixpoint={fixpoint}
                            />
                            );
                        }
                    })}
                    {scrapBookData.documents?.map(({ title, authors, thumbnail,contents,scrapbookId,countscrap,useGroup,fixpoint }: ScrapbookData ) => {
                        if(fixpoint==false){
                           return (
                            <Myscrapbook
                            key={scrapbookId}
                            authors={authors}
                            thumbnail={thumbnail}
                            title={title}
                            contents={contents}
                            scrapbookId={scrapbookId}
                            countscrap={countscrap}
                            useGroup={useGroup}
                            fixpoint={fixpoint}
                            />
                            );
                        }
                    })}
                </View>)}
            </View>
        </View>     
    )
}   