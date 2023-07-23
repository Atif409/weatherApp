import React from "react"
import moment from "moment"
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View
} from "react-native"
import IconText from "../components/IconText"

const City = ({ weatherData }) => {
  const {
    container,
    head,
    imageLayout,
    cityName,
    cityText,
    countryName,
    populationWraper,
    populationText,
    rowLayout,
    risSetText,
    risSetWraper
  } = styles

const {name,country,population,sunrise, sunset} = weatherData



  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/cityBG.jpg")}
        style={imageLayout}
      >
        <Text style={head}></Text>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWraper, rowLayout]}>
          <IconText
            iconName={"user"}
            bodyText={`Population: ${population}`}
            iconSize={55}
            iconColor={"white"}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[risSetWraper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconSize={45}
            iconColor={"white"}
            bodyText={moment(sunrise*1000).format('h:mm:ss A')}
            bodyTextStyles={risSetText}
          />

          <IconText
            iconName={"sunset"}
            iconSize={45}
            iconColor={"white"}
            bodyText={moment(sunset*1000).format('h:mm:ss A')}
            bodyTextStyles={risSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
    
  )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: StatusBar.hight || 0
  },
  head: {
    margin: 20
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 35
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 2)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 5,

  },
  populationWraper: {
    justifyContent: "center",
    marginTop: 30
  },
  populationText: {
    marginLeft: 8,
    fontSize: 25,
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 2)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 5,
  },
  risSetWraper: {
    justifyContent: "space-around",
    marginTop: 30
  },
  risSetText: {
    fontSize: 20,
    color: "white"
    ,
    textShadowColor: 'rgba(0, 0, 0, 3)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 5,
  },
  rowLayout: {
    
    flexDirection: "row",
    alignItems: "center"
  }
})
export default City
