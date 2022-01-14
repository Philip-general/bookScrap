import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, Button, Alert, StyleSheet, TextInput } from "react-native";
import { styles } from "../components/common/style";

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
  };

  const navigation = useNavigation();

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
          render={({ field: { onChange, value } }) => (
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
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          <Button
            title="Signup"
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
        </View>
      </View>
    </View>
  );
}
