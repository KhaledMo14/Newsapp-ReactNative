import * as React from "react";
import { View, Image,TouchableOpacity,Linking } from "react-native";
import { NavigationContext } from '@react-navigation/native';

export default function Footer() {
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
      <TouchableOpacity onPress={()=>{

        navigation.navigate("firstTime")

      }}>
        <Image
          source={require("../assets/information-button.png")}
          style={{ width: 40, height: 40 , marginHorizontal:10}}
        />
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={()=>{
            Linking.openURL('whatsapp://send?text=hello shalabyyyyyyy&phone=+201289903629')
        }}>
        <Image
          source={require("../assets/whatsapp.png")}
          style={{ width: 40, height: 40 , marginHorizontal:10}}
        />
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>{
           navigation.navigate("about")
        }}>
         <Image
          source={require("../assets/home.png")}
          style={{ width: 40, height: 40 , marginHorizontal:10}}
        />
        </TouchableOpacity>
      </View>
  );
}
