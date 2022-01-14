import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, Button, Alert, StyleSheet, TextInput } from "react-native";
import styled from "styled-components";

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => console.log(data);
  return (
    <View>
      <Text>Login</Text>
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

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
