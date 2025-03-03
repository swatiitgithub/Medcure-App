import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { Text, Card, Button, Title, Paragraph, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Linking } from 'react-native';


const HeartAttack = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const [isUnconscious, setIsUnconscious] = useState(true);

  return (
    <ScrollView
      style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}
    >
      {/* Image */}
      <Image
        source={require('../../assets/HeartAttack/heart_attack.webp')}
        style={styles.image}
      />

      {/* Header */}
      <Title style={[styles.header, isDarkMode ? styles.darkText : styles.lightText]}>
        {t('heart_attack.heartAttack')}
      </Title>

      {/* Conscious/Unconscious Toggle Button */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{ t('emergency.situation')}</Title>
          <Paragraph>
            {isUnconscious
              ? t('emergency.conscious')
              : t('emergency.unconscious')}
          </Paragraph>
          {isUnconscious && (
            <Button mode="contained" style={styles.callButton} onPress={() => Alert.alert('Calling 108')}>
             { t('emergency.call108')}
            </Button>
          )}
          <Button
            mode="outlined"
            style={styles.toggleButton}
            onPress={() => setIsUnconscious(!isUnconscious)}
          >
            {isUnconscious ? t('emergency.consciousness') :  t('emergency.fainted') }
          </Button>
        </Card.Content>
      </Card>
      {!isUnconscious && 
      <>
      {/* Symptoms Section */}
      <Card style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>{t('heart_attack.symptoms')}</Title>
          <Divider style={styles.divider} />
          <View style={styles.listItem}>
            <Icon name="heart-pulse" size={24} color={isDarkMode ? "lightblue" : "#003CB3"} />
            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
              {t('heart_attack.pain')}
            </Paragraph>
          </View>
          <View style={styles.listItem}>
            <Icon name="human-male-height" size={24} color={isDarkMode ? "lightblue" : "#003CB3"} />
            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
              {t('heart_attack.discomfort')}
            </Paragraph>
          </View>
          <View style={styles.listItem}>
            <Icon name="water" size={24} color={isDarkMode ? "lightblue" : "#003CB3"} />
            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
              {t('heart_attack.sweating')}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>

      {/* Treatment Section */}
      <Card style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>{t('heart_attack.treatment')}</Title>
          <Divider style={styles.divider} />
          <View style={styles.listItem}>
            <Icon name="human-handsup" size={24} color={isDarkMode ? "lightblue" : "#003CB3"} />
            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
              {t('heart_attack.lieDown')}
            </Paragraph>
          </View>
          <View style={styles.listItem}>
            <Icon name="pill" size={24} color={isDarkMode ? "lightblue" : "#003CB3"} />
            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
              {t('heart_attack.aspirin')}
            </Paragraph>
          </View>
          <View style={styles.listItem}>
            <Icon name="hospital" size={24} color={isDarkMode ? "lightblue" : "#003CB3"} />
            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
              {t('heart_attack.nitrate')}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>

    {/* Medications Section */}
    <Card style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>{t('heart_attack.medication')}</Title>
          <Divider style={styles.divider} />
          <View style={styles.listItem}>
            <Icon name="pill" size={24} color={isDarkMode ? "lightblue" : "red"} />
            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
              {t('heart_attack.disprin')}
            </Paragraph>
          </View>
          <View style={styles.listItem}>
            <Icon name="pill" size={24} color={isDarkMode ? "lightblue" : "red"} />
            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
              {t('heart_attack.clopidogrel')}
            </Paragraph>
          </View>
          <View style={styles.listItem}>
            <Icon name="pill" size={24} color={isDarkMode ? "lightblue" : "red"} />
            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
              {t('heart_attack.atorvastatin')}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>

      </>}


      {/* Emergency Call to Action 
      <Button
        mode="contained"
        icon="phone"
        style={styles.emergencyButton}
        onPress={() => Linking.openURL("tel:108")}
      >
        {t('home.callNow')}
      </Button>*/}
    </ScrollView>
  );
};

export default HeartAttack;

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
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
  divider: {
    marginVertical: 8,
    backgroundColor: "gray",
  },
  emergencyButton: {
    marginTop: 16,
    backgroundColor: "#0070FF",
    marginBottom:16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  callButton: {
    marginTop: 10,
    backgroundColor: '#0070FF',
  },
  toggleButton: {
    marginTop: 10,
  },
});
