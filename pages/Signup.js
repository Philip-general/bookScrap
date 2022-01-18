import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "../components/common/style";
import { signupEmail } from "../firbase";

export default function Signup() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigation = useNavigation();
  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
    try {
      const result = await signupEmail(email, password);
      console.log("회원가입 성공", result);
      navigation.navigate("Login", { email, password });
    } catch (e) {
      console.log("회원가입 실패", e);
    }
  };
  return (
    <View>
      <Text>Signup</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              type={"text"}
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
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              type={"text"}
              placeholder="password"
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <View style={styles.container}>
          <Button
            title="이 email로 회원가입하기"
            onPress={handleSubmit(onSubmit)}
          />
          <Button
            title="Login 하러가기"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </View>
    </View>
  );
}
