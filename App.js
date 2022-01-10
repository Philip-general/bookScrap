import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import config from './confing'

const firebaseConfig = {
  apiKey: config.FIREBASE_DATABASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_URL,
  databaseURL: config.FIREBASE_DATABASE_URL,
  storageBucket: config.FIREBASE_STORAGE_URL,
}

const app = initializeApp(firebaseConfig)
// Get a reference to the database service
const database = getDatabase(app)
console.log(firebaseConfig)
export default function App() {
  return (
    <View style={styles.container}>
      <Text>asdf</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
