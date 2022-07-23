import { View , Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FirstTime()
{
    useEffect(()=>{
        AsyncStorage.setItem("wwwr" , "yes")
    });

    return (
        <SafeAreaView style={{flex:1}}>
        <View style={{ flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:25, color:"#262861"}}> Hello to News App </Text>
        </View>

    <Footer/>
        </SafeAreaView>
        

    )
}