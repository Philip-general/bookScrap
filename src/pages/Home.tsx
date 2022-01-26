import { Text, View, Button, TextInput, Image } from "react-native";
import { styles } from "../style";
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

  const [books, setBooks] = useState([]);
  const searchBook = async ({ bookName }: bookSearchForm) => {
    const getBooks = await useGetBooks(bookName);
    setBooks(getBooks);
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
      <Button title="책 검색하기" onPress={handleSubmit(searchBook)} />

      {books.map(({ title, authors, thumbnail, isbn }) => {
        return (
          <View key={isbn}>
            <Text>{title}</Text>
            <Text>{authors}</Text>
            <Image
              style={styles.bookImg}
              source={{
                uri: thumbnail,
              }}
            />
          </View>
        );
      })}
    </View>
  );
}
