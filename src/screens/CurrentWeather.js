import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import RowText from "../components/RowText";
import IconText from "../components/IconText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wraper,
    container,
    tempStyles,
    feels,
    highLow,
    highLowWraper,
    bodyWraper,
    description,
    message,
    head
  } = styles;
 
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView
      style={[
        wraper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
   
        <IconText
          iconName={weatherType[weatherCondition]?.icon}
          iconSize={90}
          iconColor={"white"}
          bodyText={`${Math.round(temp)}°C`}
          bodyTextStyles={tempStyles}
        />
        <Text style={feels}>{`Feels like ${Math.round(feels_like)}°C`}</Text>
        <RowText
          messageOne={`High: ${Math.round(temp_max)}°C   Low: ${Math.round(temp_min)}°C`}
          // messageTwo={`Low: ${Math.round(temp_min)}°C`}
          containerStyles={highLowWraper}
          messageOneStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWraper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wraper: {
    flex: 1
  },
  container: {
    marginTop: 30,
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  tempStyles: {
    color: "black",
    fontSize: 40,
    marginTop: 10
  },
  feels: {
    color: "black",
    fontSize: 30
  },
  highLow: {
    color: "black",
    fontSize: 17,
    fontWeight:'600',
    marginTop: 10
  },
  highLowWraper: {
    flexDirection: "row"
  },
  bodyWraper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 20,
    marginBottom: 40
  },
  description: {
    fontSize: 45
  },
  message: {
    fontSize: 20
  },
  head: {
    marginBottom: 20
  }
});

export default CurrentWeather;
