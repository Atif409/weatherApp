import React from "react"
import { View, Text ,StyleSheet} from "react-native"
const RowText = (props) => {
  const {
    containerStyles,
    messageOne,
    messageTwo,
    messageOneStyles,
    messageTwoStytles
  } = props
  const {messagetwoStyle}= styles
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={[messageTwoStytles,messagetwoStyle]}> {messageTwo}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
messagetwoStyle:{
  fontSize:25
}
})

export default RowText
