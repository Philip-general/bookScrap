import { Text, View, Button, ActivityIndicator, TextInput } from "react-native";
import { styles } from "../components/common/style";
import axios from "axios";
import config from "../confing";
import { Controller, useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "react-query";

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  interface bookSearchForm {
    bookName: string;
  }

  const getBooks = async ({ bookName }: bookSearchForm) => {
    console.log(bookName);
    const res = await axios({
      method: "get",
      // url: '/v3/search/book',
      url: `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&query=${bookName}`,
      headers: {
        Authorization: `KakaoAK ${config.KAKAO_BOOK_SEARCH_API_KEY}`,
      },
    });
    console.log(res);
  };

  const onSubmit = handleSubmit(async ({ bookName }) => {
    console.log(bookName);
    const res = await axios({
      method: "get",
      // url: '/v3/search/book',
      url: `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&query=${bookName}`,
      headers: {
        Authorization: `KakaoAK ${config.KAKAO_BOOK_SEARCH_API_KEY}`,
      },
    });
    console.log(res);
  });

  return (
    <View style={styles.container}>
      <form onSubmit={onSubmit}>
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
        <input title="책 추가하기" type="submit" />
      </form>
    </View>
  );
}
