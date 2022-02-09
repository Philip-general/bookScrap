import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, Button, TextInput,Alert } from "react-native";
import { styles } from "../style";
import { useSignupMutation } from "../hooks/signup";
import {signUpInfo} from "../../types/type";
export default function Signup(){
    const navigation = useNavigation();
    const [see,setSee]=useState(true)
    const {mutate} = useSignupMutation()
    const onSee =()=>{
        setSee(!see)
    }
    const {
        control,
        handleSubmit,
        getValues,
        formState:{errors},
    } = useForm<signUpInfo>({
        mode: "onBlur",
        reValidateMode: "onChange",
    });
    
    const onSubmit = async(data:signUpInfo) =>{
        try{
            mutate(data,{
                onSuccess : (result)=>{
                    result.data.ok?
                    Alert.alert('회원가입', '회원가입을 축하드립니다.', [
                    { text: 'OK', onPress: () => console.log('OK Pressed')}
                    /*navigation.navigate("login페이지",{data})*/
                ]):
                    Alert.alert('죄송합니다', '동일한 id가 존재합니다.', [
                    { text: 'OK', onPress: () => console.log('OK Pressed')}])
                }})
        }catch(e){
            console.log(e)
        }
    }
    return(
        <View>
            <View>
                <Text>ID</Text>
                <Controller
                    name="id"
                    control={control}
                    rules={{required:"ID가 필요합니다."}}
                    render={({field:{onChange,onBlur,value}}) =>(
                        <TextInput
                            placeholder="ID를 입력하세요"
                            style={styles.input}
                            onBlur = {onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            defaultValue=""
                            />
                    )}/>
                    {errors.id ?(<Text>{errors.id.message}</Text>):null}
            </View>
            <View>
                <Text>Password</Text>
                <Controller
                    name="password"
                    control={control}
                    rules={{required:"password가 필요합니다."}}
                    render={({field:{onChange,onBlur,value}}) =>(
                        <TextInput
                            placeholder="password를 입력하세요"
                            style={styles.input}
                            secureTextEntry={see}
                            onBlur = {onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            defaultValue=""
                            />
                    )}/>
                {errors.password ?(<Text>{errors.password.message}</Text>):null}
                
            </View>
            <View>
                <Text>Check password</Text>
                <Controller
                    name="repassword"
                    control={control}
                    rules={{
                        validate:{
                            matching : (value) => {
                                const {password} = getValues();
                                return password === value || "비밀번호가 일치하지 않습니다.";
                            }
                        },
                        required:"repassword가 필요합니다"}}
                    render={({field:{onChange,onBlur,value}}) =>(
                        <TextInput
                            clearTextOnFocus={true}
                            placeholder="다시 한 번 password를 입력하세요"
                            style={styles.input}
                            onBlur = {onBlur}
                            secureTextEntry={see}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            defaultValue=""
                            />
                            
                    )}/>
                   {errors.repassword ?(<Text>{errors.repassword.message}</Text>):null}
                   <Button title="보기" onPress={onSee}/>
            </View>
            <View>
                <Text>Email</Text>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        pattern: {
                            value : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                            message : "email양식이 이상합니다"},
                        required: "email이 필요합니다" }}
                    render={({field:{onChange,onBlur,value}}) =>(
                        <TextInput
                            placeholder="Email을 입력하시오"
                            style={styles.input}
                            onBlur = {onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            defaultValue=""
                            />
                    )}/>
                    {errors.email && (<Text>{errors.email.message}</Text>)}
            </View>
            <View>
                <Button title="회원가입" onPress={handleSubmit(onSubmit)}/>  
            </View>

        </View>
    )
}