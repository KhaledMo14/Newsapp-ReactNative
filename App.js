import * as React from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./components/about";
import Splash from "./components/splash";
import Webview from "./components/webview";
import Info from "./components/info";
import FirstTime from "./components/firstTime";

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="about" component={About} />
        <Stack.Screen name="webview" component={Webview} />
        <Stack.Screen name="info" component={Info} />
        <Stack.Screen name="firstTime" component={FirstTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
