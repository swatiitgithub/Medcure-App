import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, ScrollView, View, Linking, Text} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Attackconcious = () => {
  const {t} = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000' : '#fff'},
      ]}>
      {/* Title */}
      <Title
        style={[
          styles.card,
          styles.header,
          {color: isDarkMode ? '#fff' : '#000'},
        ]}>
        {t('Attack.title')}
      </Title>

      <Title
        style={[styles.typesHeader, {color: isDarkMode ? '#fff' : '#000'}]}>
        {t('Attack.conscious.subtitle')}
      </Title>

      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        {[
          t('Attack.conscious.sym1'),
          t('Attack.conscious.sym2'),
          t('Attack.conscious.sym3'),
          t('Attack.conscious.sym4'),
          t('Attack.conscious.sym5'),
          t('Attack.conscious.sym6'),
        ].map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepContainer,
              {backgroundColor: isDarkMode ? '#222' : '#f8f8f8'},
            ]}>
            <Text style={styles.stepNumber}>{index + 1}</Text>
            <Text
              style={[
                styles.stepText,
                {color: isDarkMode ? '#fff' : '#333'},
              ]}>
              {step}
            </Text>
          </View>
        ))}
      </View>

      {/* Emergency Call Button */}
      <Button
        mode="contained"
        style={styles.callButton}
        onPress={() => Linking.openURL('tel:000')}>
        <Feather name="phone-call" size={20} />{' '}
        {t('emergency.EmergencyCall')}
      </Button>

      {/* Additional Information */}
      <Paragraph style={[styles.headers, {color: isDarkMode ? '#fff' : '#000'}]}>
        {t('emergency.bystander')}
      </Paragraph>
      <Paragraph style={[styles.headerss, {color: isDarkMode ? '#fff' : '#000'}]}>
        000
      </Paragraph>
    </ScrollView>
  );
};

export default Attackconcious;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  listText: {
    fontSize: 16,
    marginLeft: 8,
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
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#FF0000',
  },
  emergencyText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  emergencyNumber: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  warnColor: {
    color: '#FF0000',
  },
  typesHeader: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  circleButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackButton: {
    backgroundColor: '#000',
  },
  redButton: {
    backgroundColor: '#FF0000',
  },
  buttonContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginRight: 10,
  },
  stepText: {
    fontSize: 16,
    flex: 1,
  },
  headers: {
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
  headerss: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});