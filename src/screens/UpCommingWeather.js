import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground
} from "react-native"
import ListItem from "../components/ListItem"

const UpCommingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image, head } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcomingBg.jpg")}
        style={image}
      >
        {/* <Image source={require('../../assets/upcomingBg.jpg')}  style={styles.image}/> */}
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white"
  },
  head: {
    color: "white"
  },

  image: {
    // height:100,
    // width: 100
    flex: 1
  }
})

export default UpCommingWeather
