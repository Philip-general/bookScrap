import { Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import { styles } from '../style';

import { Controller, useForm } from 'react-hook-form';
import { useGetBooks } from '../hooks/book';
import { useState } from 'react';
import SearchedBook from '../components/SearchedBook';
import { bookData } from '../../types/type';
import Auth from '../components/auth/Auth';

export default function BookSearch() {
  const [bookName, setBookName] = useState('');
  const { data: books, isLoading, isError, refetch } = useGetBooks(bookName);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const searchBook = ({ bookName }) => {
    setBookName(bookName);
  };

  let id = 0;
  return (
    <Auth>
      <View style={styles.container}>
        <Controller
          control={control}
          name="bookName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="책 제목을 입력해 주세요."
              style={styles.input}
              onChangeText={value => onChange(value)}
              value={value}
              defaultValue=""
            />
          )}
        />
        <Button title="책 검색하기" onPress={handleSubmit(searchBook)} />
        <View>
          {books?.map((props: bookData) => {
            console.log(props);
            return <SearchedBook key={++id} {...props} />;
          })}
        </View>
      </View>
    </Auth>
  );
}
