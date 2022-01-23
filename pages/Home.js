import { Text, View, Button, ActivityIndicator, TextInput } from 'react-native'
import { styles } from '../components/common/style'
import axios from 'axios'
import config from '../confing'

export function Home({ navigation }) {
  const handleSubmit = async bookName => {
    try {
      const res = await axios({
        method: 'get',
        // url: '/v3/search/book',
        url: `https://dapi.kakao.com/v2/search/web?sort=accuracy&page=1&size=10&query=${bookName}`,
        headers: {
          Authorization: `KakaoAK ${config.KAKAO_BOOK_SEARCH_API_KEY}`,
        },
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="책 제목을 입력해 주to요." style={styles.input} />
      <Button title="책 추가하기" onPress={handleSubmit} />
    </View>
  )
}
