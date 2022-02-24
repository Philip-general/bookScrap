import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/BookSearch";
import Signup from "./src/pages/Signup";
import Main from "./src/pages/Main";
import Login from './src/pages/Login';
import BookSearch from './src/pages/BookSearch';
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import "./src/mocks/server";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const queryClinet = new QueryClient();

const MainRight=()=>{
  const navigation = useNavigation();
  const onBookSearch =()=>{
    navigation.navigate("BookSearch")
  }
  return (
    <Icon name="search" style={{marginRight:10}} onPress={onBookSearch} size={25}/>
  )
}
export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClinet}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Main" component={Main} options={
              {title:"Scrap",headerTitleAlign: 'center',headerRight:()=><MainRight/>,
              headerTitleStyle: {
                fontWeight: 'bold',
              }}}/>  
            <Stack.Screen name="BookSearch" component={BookSearch} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
