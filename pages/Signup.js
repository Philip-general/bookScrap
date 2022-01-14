import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "../components/common/style";

export default function Signup() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
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
