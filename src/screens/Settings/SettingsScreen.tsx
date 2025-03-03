import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const SettingsScreen = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
      <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
         <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
           Welcome to Home
         </Text>
       </View>
  )
}

export default SettingsScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  darkBackground: {
    backgroundColor: "#333",
  },
  lightBackground: {
    backgroundColor: "#fff",
  },
  darkText: {
    color: "white",
  },
  lightText: {
    color: "black",
  },
});
