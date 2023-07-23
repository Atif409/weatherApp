import React from "react"
import CurrentWeather from "../screens/CurrentWeather"
import UpCommingWeather from "../screens/UpCommingWeather"
import City from "../screens/City"
import { Feather } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue"
        },
        headerStyle: {
          backgroundColor: "lightblue"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato"
        },
        headerTitleAlign: "center"
      }}
    >
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "tomato" : "grey"}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "grey"}
            />
          )
        }}
      >
        {() => <UpCommingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={"City"}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={"home-city"}
              size={25}
              color={focused ? "tomato" : "grey"}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city}/>}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs