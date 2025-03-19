import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, ScrollView, View, Linking, Text, TouchableOpacity} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const PoisonsUncons = () => {
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
        {t('Poisons.management.conscious.title')}
      </Title>

      <Title
        style={[styles.typesHeader, {color: isDarkMode ? '#fff' : '#000'}]}>
        {t('DiabeticEmergency.Unconscious.Subtitle')}
      </Title>

      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        {[
          t('Poisons.management.unconscious.uncon1'),
          t('Poisons.management.unconscious.uncon2'),
          t('Poisons.management.unconscious.uncon3'),
         
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
        <View style={styles.card}>
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
             <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('FunnelCPR', { condition: 'funnelspider' })}
                      >
                        <Text style={styles.buttonText}>
                          {t('funnelspider.button.next')}
                        </Text>
                      </TouchableOpacity>
    </ScrollView>
  );
};

export default PoisonsUncons;

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
  button: {
    marginTop: 16,
    backgroundColor: 'green',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});