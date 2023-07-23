import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import { weatherType } from "../utilities/weatherType"
import moment from "moment/moment"

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props

  const { item, date, temp, dateTextWraper } = styles
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={40} color="white" />
      <View style={dateTextWraper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss A")}</Text>
      </View>

      <Text style={temp}> {`${Math.round(min)}°C /${Math.round(max)}°C`}</Text>
      {/* <Text style={temp}> {condition}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    borderRadius:17,
    backgroundColor: "#0732",
    borderColor: 'lightblue'
  },

  temp: {
    color: "white",
    fontSize: 17,
    marginLeft: 5
  },
  date: {
    color: "white",
    fontSize: 15,
    marginLeft: 20
  },
  dateTextWraper: {
    flexDirection: "column"
  }
})
export default ListItem
