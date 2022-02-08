import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native'
import { EmailLoginData } from '../../types/type'
import { useLoginMutation } from '../hooks/login'
import { styles } from '../style'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {
    mutate,
    data: mutateResult,
    isLoading,
  } = useLoginMutation(email, password)

  const navigation = useNavigation()
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: 'onChange' })

  const onLogin = async (data: EmailLoginData) => {
    const { email, password } = data
    setEmail(email)
    setPassword(password)
    mutate(data)
    console.log(mutateResult)
  }

  return (
    <View>
      <Text>회원가입</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
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
        {errors.email && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="password"
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <View style={styles.container}>
          <Button title="login 하기" onPress={handleSubmit(onLogin)} />
          <Button
            title="회원 가입하러 가기"
            onPress={() => {
              // navigation.navigate("Signup");
            }}
          />
        </View>
      </View>
    </View>
  )
}
