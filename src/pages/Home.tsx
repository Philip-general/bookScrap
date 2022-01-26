import { Text, View, Button, TextInput } from "react-native";
import { styles } from "../components/common/style";
import axios from "axios";
import config from "../constants/config";
import { Controller, useForm } from "react-hook-form";
import { useGetBooks } from "../hooks/book";
import { useState } from "react";
import { bookSearchForm } from "../../types/type";

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [books, setBooks] = useState({});
  const searchBook = async ({ bookName }: bookSearchForm) => {
    const books = await useGetBooks(bookName);
    console.log(books);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="bookName"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="책 제목을 입력해 주세요."
            style={styles.input}
            onChangeText={(value) => onChange(value)}
            value={value}
            defaultValue=""
          />
        )}
      />
      <Button title="책 추가하기" onPress={handleSubmit(searchBook)} />
    </View>
  );
}
