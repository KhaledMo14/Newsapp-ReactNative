import * as React from 'react';
import { View,ActivityIndicator, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash({navigation})
{
    return(
        <View style={{flex:1}}>
        <ImageBackground
        style={{ flex: 1 , alignItems:"center" , justifyContent: "center"}}
           source={require("../assets/9.webp")}
         >
           <ActivityIndicator size="large" color="#fff" />
           </ImageBackground>
          {dealy()}
          
   </View>
    )

    
function dealy() 
{
  AsyncStorage.getItem("wwwr").then((value)=>{
    {value?  setTimeout(()=>{
      navigation.navigate("about");
    },1000):  setTimeout(()=>{
      navigation.navigate("firstTime");
    },1000)}
  })
  
  setTimeout(()=>{
    navigation.navigate("about");
  },1000)
}
} 

