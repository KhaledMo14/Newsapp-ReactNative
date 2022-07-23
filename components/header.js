import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
 import { NavigationContext } from '@react-navigation/native';

export default function Header() {
      const navigation = React.useContext(NavigationContext)
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
        backgroundColor: "#262861",
        color:"white",
        height:60,
      }}
    >
      <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={()=>{
navigation.navigate("about")
        }}>
        <Image
          source={require("../assets/home.png")}
          style={{ width: 40, height: 40 , marginHorizontal:10}}
        />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, marginLeft: 10, fontWeight: "bold" ,  color:"white",}}>
         News App
        </Text>
      </View>
      <View>
        
        <TouchableOpacity 
        onPress={()=>{
           navigation.navigate("webview")
        }}>
        <Image
          source={require("../assets/google.png")}
          style={{ width: 40, height: 40 , marginHorizontal:10}}
        />
       </TouchableOpacity>
      </View>
    </View>
  );
}
