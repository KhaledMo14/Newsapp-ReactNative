import * as React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Header from './header';
import Footer from './footer';

export default function Webview()
{
    return(
        
    
        <SafeAreaView style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>

            <Header />



            <WebView source={{ uri: "https://google.com" }} style={{ flex: 1 }} />



            <Footer/>

        </View>

    </SafeAreaView>
    
    )
}