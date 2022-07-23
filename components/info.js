import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity} from "react-native";
import Header from './header';


export default function Info({ route , navigation }) {
    return (
       
<View>
  <View>
     <SafeAreaView>
    <Header/>
   <View style={{ alignItems:"center"}}>
       <Image
                style={{
                  width: "100%",
                  height: 300,
                  
                }}
                source={{uri:route.params.item.image}}
              />
                <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                {route.params.item.title}
              </Text>
              <Text style={{fontSize:20 ,padding: 10 }}>
             {route.params.item.body}
              </Text>
              </View>

    </SafeAreaView>
  </View>
  </View>

  

    )
}