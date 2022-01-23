import { Text, View, Button, ActivityIndicator, TextInput } from "react-native";
import { firebaseConfig } from "../firbase";
import { styles } from "../components/common/style";

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="책 제목을 입력해 주세요." style={styles.input} />
      <Button title="책 추가하기" />
    </View>
  );
}
