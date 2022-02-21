import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View, Text, Button, TextInput } from 'react-native'
import { EmailLoginData } from '../../types/type'
import { useLoginMutation } from '../hooks/login'
import { styles } from '../style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [seePassword, setSeePassword] = useState(false)
  const {
    mutate,
    data: loginResult,
    isSuccess,
  } = useLoginMutation()
  const navigation = useNavigation()

  // token이 유효한지 판단하지 못함. 나중에 서버랑 통신 통해 유효한 토큰인지 확인하는 함수 작성이 필요함.
  useEffect(()=>{
    AsyncStorage.getItem('AccessToken').then( e => {
      navigation.navigate("Home")
    })
  },[])

  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: 'onChange' })

  const onLogin = async (data: EmailLoginData) => {
    setEmail(data.email)
    setPassword(data.password)
    mutate(data,{
      onSuccess:async(loginResult)=>{
        // 이제 로컬스토리지에 담겨서 서버로 보내주기만 하면 됩니다.
        // 이런 방식으로 가던지 axios header에 기본값으로 설정할지 의논이 필요할 것 같습니다.
        await AsyncStorage.setItem('AccessToken', loginResult?.AccessToken as string)
        axios.defaults.headers.common["AccessToken"] = await AsyncStorage.getItem('AccessToken') as string
        navigation.navigate('Home')
      }
    })
  }
  const onSee = () => setSeePassword(prev => !prev)

  return (
    <View>
      <Text>로그인하기</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: "email은 필수 항목입니다.",
            pattern: {
              value : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message : "올바른 email을 입력해 주세요."}
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="email"
            />
          )}
          name="email"
        />
        {errors.email && <Text>{errors.email.message}</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: "password는 필수 항목입니다.",
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              secureTextEntry={!seePassword}
              onChangeText={onChange}
              value={value}
              placeholder="password"
            />
          )}
          name="password"
        />
        <Button title='비밀번호 보기' onPress={onSee}/>
        {errors.password && <Text>{errors.password.message}</Text>}

        <View style={styles.container}>
          {isSuccess ? <Text>{loginResult?.error}</Text> : null}
          <Button title="login 하기" onPress={handleSubmit(onLogin)} />
          <Button
            title="회원 가입하러 가기"
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
        </View>
      </View>
    </View>
  )
}
