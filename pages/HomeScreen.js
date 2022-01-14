import { Text, View, Button, ActivityIndicator } from "react-native";
import { firebaseConfig } from "../firbase";
import { styles } from "../components/common/style";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" />
      <Text>{firebaseConfig.apiKey}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
