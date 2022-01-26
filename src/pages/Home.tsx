import { Text, View, Button, TextInput, Image, ScrollView } from "react-native";
import { styles } from "../style";
import axios from "axios";
import config from "../constants/config";
import { Controller, useForm } from "react-hook-form";
import { useGetBooks } from "../hooks/book";
import { useState } from "react";
import { bookSearchForm } from "../../types/type";
import SearchedBook from "../components/SearchedBook";

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

  let id = 0;
  console.log(books);
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
      <View>
        {books.map(({ title, authors, thumbnail }) => {
          return (
            <SearchedBook
              key={++id}
              authors={authors}
              thumbnail={thumbnail}
              title={title}
            />
          );
        })}
      </View>
    </View>
  );
}
