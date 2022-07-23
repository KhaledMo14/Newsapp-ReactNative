import { View, Text, Image, ScrollView, TouchableOpacity , ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./header";
import Footer from "./footer";
import { useState, useEffect } from "react";

export default function About({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(0);

  useEffect(() => {
    const url = "https://mockend.com/HosamZewain/test/posts";
     fetch(url)
      .then((response) => response.json())
      .then((json) => {setData(json) 
      setloading(1) })
      .catch((error) => console.log(error));},[]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <View style={{ padding: 10, flex: 1, backgroundColor: "f1eff1" }}>
          <ScrollView>
            
            {loading===1 ?  data.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    navigation.navigate("info",{item});
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#fff",
                      flexDirection: "row",
                      borderRadius: 10,
                      marginBottom: 15,
                    }}
                  >
                    <View>
                      <Image
                        style={{
                          width: 150,
                          height: 200,
                          borderRadius: 20,
                          margin: 10,
                        }}
                        source={{ uri: item.image }}
                      />
                    </View>
                    <View style={{ flexShrink: 1 }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          paddingVertical: 10,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text>
                        {item.body}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }): <ActivityIndicator size="large" color="#f00" /> }
          </ScrollView>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
}
