import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import config from './confing'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_DATABASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_URL,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_URL,
}

const app = initializeApp(firebaseConfig)

// Get a reference to the database service
const database = getDatabase(app)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{config.FIREBASE_DATABASE_API_KEY}</Text>
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
