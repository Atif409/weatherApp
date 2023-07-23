import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const ErrorItem = () => {
  return (
   <View style = {styles.container} >
    <Text style = {styles.errorMessage}>
        Sorry Something Went Wrong
    </Text>
    <AntDesign name="frown" size={100} color="white" />

   </View>
  )}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',

    },
    errorMessage:{
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign:'center'
    }

})
export default ErrorItem
