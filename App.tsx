import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/Home";

import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import "./src/mocks/server";
import { createServer } from "miragejs";
import { Text, View } from "react-native";
import React from "react";

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get("/api/movies", () => {
      return {
        movies: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      };
    });
  },
});

export default function App() {
  let [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((json) => setMovies(json.movies));
  }, []);

  return (
    <View>
      {movies.map((movie) => (
        <Text key={movie.id}>
          {movie.name} ({movie.year})
        </Text>
      ))}
    </View>
  );
}
// const Stack = createNativeStackNavigator();
// const queryClinet = new QueryClient();

// export default function App() {
//   return (
//     <Provider store={store}>
//       <QueryClientProvider client={queryClinet}>
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home} />
//             {/* <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={Signup} /> */}
//           </Stack.Navigator>
//         </NavigationContainer>
//       </QueryClientProvider>
//     </Provider>
//   );
// }
