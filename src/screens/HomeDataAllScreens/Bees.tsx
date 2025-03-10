import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, ScrollView, Image, View, Text, Linking} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const BitesAndStings = () => {
  const {t} = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
   const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000' : '#fff'},
      ]}>
      {/* Header Image */}
      {/* <Image
        source={require('../../assets/firstAid/Bees.webp')}
        style={styles.image}
      /> */}

      {/* Main Title */}
      <Title
        style={[
          styles.card,
          styles.header,
          {color: isDarkMode ? '#fff' : '#000'},
        ]}>
        {t('bees.title')}
      </Title>

      {/* Types of Bites & Stings Title (Centered) */}
      <Title
        style={[styles.typesHeader, {color: isDarkMode ? '#fff' : '#000'}]}>
        {t('bees.typesHeading')}
      </Title>

      {/* Types of Bites & Stings Section */}
      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Title
          style={[
            styles.title,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {t('asthma.symptomsHeading')}
        </Title>

        {[t('bees.symptoms.sym1'), t('bees.symptoms.sym2')].map(
          (item, index) => (
            <View key={index} style={styles.listItem}>
              <FontAwesome5 name="dot-circle" size={20} color="blue" />
              <Paragraph
                style={[
                  styles.listText,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}>
                {item}
              </Paragraph>
            </View>
          ),
        )}
      </View>

      {/* Management Section */}
      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Title
          style={[
            styles.title,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {t('bees.treatment.title')}
        </Title>

        {[
          t('bees.treatment.mild.mild1'),
          t('bees.treatment.mild.mild2'),
          t('bees.treatment.mild.mild3'),
          t('bees.treatment.mild.mild4'),
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <FontAwesome5 name="dot-circle" size={20} color="blue" />
            <Paragraph
              style={[
                styles.listText,
                isDarkMode ? styles.darkText : styles.lightText,
              ]}>
              {item}
            </Paragraph>
          </View>
        ))}

        <Text
          style={[styles.snakeBiteText, {color: 'green'}]}
          onPress={() => {
            navigation.navigate('snakebite', {condition: 'snakebite'});
          }}>
          {t('bees.snakeBite')} 
        </Text>

        <Button
          mode="contained"
          style={styles.callButton}
          onPress={() => Linking.openURL('tel:000')}>
          {t('emergency.EmergencyCall')}
        </Button>
      </View>
    </ScrollView>
  );
};

export default BitesAndStings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  card: {
    marginBottom: 16,
    borderRadius: 20,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  typesHeader: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  listText: {
    fontSize: 16,
    marginLeft: 8,
    flexShrink: 1,
  },
  darkCard: {
    backgroundColor: '#222',
  },
  lightCard: {
    backgroundColor: '#fff',
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
  callButton: {
    marginTop: 10,
    backgroundColor: 'green',
  },
  snakeBiteText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'green',
    
  },
});
