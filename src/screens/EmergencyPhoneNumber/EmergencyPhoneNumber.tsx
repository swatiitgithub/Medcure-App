import React from 'react';
import { useTranslation } from 'react-i18next';
import {  StyleSheet, ScrollView, Image, View } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Linking } from 'react-native';

const EmergencyPhoneNumber = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  

  return (
    <ScrollView
    style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}
  >
    {/* Image */}
    <Image
      source={require('../../assets/Emergency/emergencycall.webp')}
      style={styles.image}
    />

    {/* Header 
    <Title style={[styles.header, isDarkMode ? styles.darkText : styles.lightText]}>
      {t('drawer.EmergencyPhoneNumbers')}
    </Title>*/}

      <View style={styles.card}>
        <Title style={styles.title}>{ t('emergency.FromMobile')}: 000</Title>
          <Button mode="contained" style={styles.callButton} onPress={() => Linking.openURL("tel:000")}>
          <Feather name="phone-call" size={20}/>{" "}{t('emergency.EmergencyCall')}
          </Button>
        <Paragraph style={styles.headers}>
          {t('emergency.bystander')}
        </Paragraph>
        <Paragraph style={styles.headerss}>
          000
        </Paragraph>
      </View>

      <View style={styles.card}>
        <Title style={styles.title}>{ t('emergency.FromMobile')}: 108</Title>
          <Button mode="contained" style={styles.callButton} onPress={() => Linking.openURL("tel:108")}>
          <Feather name="phone-call" size={20}/>{" "}{t('emergency.EmergencyCall')}
          </Button>
        <Paragraph style={styles.headers}>
          {t('emergency.bystander')}
        </Paragraph>
        <Paragraph style={styles.headerss}>
          108
        </Paragraph>
      </View>

      <View style={styles.card}>
        <Title style={styles.title}>{ t('emergency.Posionsinfcentre')}: 1800-425-1213</Title>
          <Button mode="contained" style={styles.callButton} onPress={() => Linking.openURL("tel:1800-425-1213")}>
          <Feather name="phone-call" size={20}/>{" "}{t('emergency.EmergencyCall')}
          </Button>
      </View>

  </ScrollView>
  )
}

export default EmergencyPhoneNumber

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor:"#F5F5F5"
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    marginBottom: 16,
    resizeMode: 'stretch'
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  headers: {
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    color : "red",
    marginTop:10
  },
  headerss: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color : "red"
  },
  darkBackground: {
    backgroundColor: "#222",
  },
  lightBackground: {
    backgroundColor: "#f5f5f5",
  },
  darkCard: {
    backgroundColor: "#333",
  },
  lightCard: {
    backgroundColor: "#f5f5f5",
  },
  darkText: {
    color: "white",
  },
  lightText: {
    color: "black",
  },
  title: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginBottom: 8,
  },
  callButton: {
    marginTop: 10,
    backgroundColor: '#FF2400',
  }
});