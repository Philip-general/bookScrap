import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/BookSearch';
import Signup from './src/pages/Signup';
import Main from './src/pages/Main';
import Login from './src/pages/Login';
import BookSearch from './src/pages/BookSearch';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import './src/mocks/server';
import React, { useEffect } from 'react';
import { onSilentRefresh } from './src/hooks/login';

const Stack = createNativeStackNavigator();
const queryClinet = new QueryClient();

export default function App() {
  // 앱 실행시 재 로그인 시도
  useEffect(() => {
    onSilentRefresh();
  }, []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClinet}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="BookSearch" component={BookSearch} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
