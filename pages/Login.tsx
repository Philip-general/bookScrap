import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, Button, Alert, StyleSheet, TextInput } from "react-native";
import { styles } from "../components/common/style";
import { auth, loginEmail } from "../firbase";
import { EmailLoginData } from "../type";

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });
  const navigation = useNavigation();

  const onSubmit = async (data: EmailLoginData) => {
    console.log(data);
    const { email, password } = data;
    try {
      const result = await loginEmail({ email, password });
      console.log("이메일 로그인 성공");
      navigation.navigate("Home");
    } catch (e) {
      console.log("로그인에 실패했습니다.");
    }
  };

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
          <Button title="login 하기" onPress={handleSubmit(onSubmit)} />
          <Button
            title="회원 가입하러 가기"
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
        </View>
      </View>
    </View>
  );
}
