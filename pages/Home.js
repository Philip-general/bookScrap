import { Text, View, Button, ActivityIndicator, TextInput } from "react-native";
import { styles } from "../components/common/style";
import axios from "axios";
import config from "../confing";
import { Controller, useForm } from "react-hook-form";

export function Home({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ bookName }) => {
    console.log(bookName);
    try {
      const res = await axios({
        method: "get",
        // url: '/v3/search/book',
        url: `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&query=${bookName}`,
        headers: {
          Authorization: `KakaoAK ${config.KAKAO_BOOK_SEARCH_API_KEY}`,
        },
      });
      console.log(res.data.documents);
    } catch (e) {
      console.log(e);
    }
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
      <Button title="책 추가하기" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
