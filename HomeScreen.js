import React from "react"
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput,
    Dimensions,
  } from "react-native";
  import {RFValue} from "react-native-responsive-fontsize";
  import {DropDownPicker} from "react-native-dropdown-picker";
  import Permissions from "react-native-permissions";

  export default class HomeScreen extends Component(){
      constructor(){
          super()
          this.state = {
              
          }

}
render(){

  if (this.state.fontsLoaded) {
    SplashScreen.hideAsync();
  let preview_images = {

    image1: require ("../assets/dog.jpg"),
    image2: require ("../assets/man.jpg"),
    image3: require ("../assets/woman.png"),
    image4: require ("../assets/woman2.png"),
    image5: require ("../assets/goku.png")
 };

    return(
        <View styles = {styles.container}>
            <TextInput styles = {styles.inputFont} Title>
                
            </TextInput>
            <uses-permission
             android:name="android.permission.CAMERA"/>

         
            
             
        </View>
    )
}

}
  }

  


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#ADD8E6",
      alignItems:"center",
      justifyContent:"center"
    },
    inputFont:{
        height:RFValue(40),
        borderColor: "#001D6E",
        borderWidth:RFValue(1),
        borderRadius:RFValue(1),
        alignItems:"center",
        justifyContent:"center",
        paddingLeft:RFValue(10),
        textColor:"#000000"
    }
    
})