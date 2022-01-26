import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/Home";
// import Login from "./src/pages/Login";
// import Signup from "./src/pages/Signup";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const queryClinet = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClinet}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
