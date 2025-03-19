import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  ScrollView,
  View,
  Linking,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const ExposuretoHeat=() =>{
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
        {t('ExposuretoHeat.title')}
      </Title>
        <Title
              style={[styles.typesHeader, {color: isDarkMode ? '#fff' : '#000'}]}>
              {t('ExposuretoHeat.subtitle')}
            </Title>

             <Title
                      style={[
                        styles.title,
                        isDarkMode ? styles.darkText : styles.lightText,
                      ]}>
                      {t('ExposuretoHeat.HeatExposure.hyper')}
                    </Title>

                     <View
                            style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                            <View>
                              <Paragraph
                                style={[
                                  styles.listText,
                                  isDarkMode ? styles.darkText : styles.lightText,
                                ]}>
                                {t('ExposuretoHeat.HeatExposure.description')}
                              </Paragraph>
                            </View>
                          </View>

    

     
      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Title
          style={[
            styles.title,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {t('ExposuretoHeat.HeatExposure.title')}
        </Title>

        {[
          t('ExposuretoHeat.HeatExposure.sym1'),
          t('ExposuretoHeat.HeatExposure.sym2'),
         
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
      </View>
      <View
                            style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                            <View>
                              <Paragraph
                                style={[
                                  styles.listText,
                                  isDarkMode ? styles.darkText : styles.lightText,
                                ]}>
                                {t('ExposuretoHeat.HeatExposure.des')}
                              </Paragraph>
                            </View>
                          </View>

    
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('HeatStroke', {condition: 'funnelspider'})
        }>
        <Text style={styles.buttonText}>{t('ExposuretoHeat.HeatExposure.button.next')}</Text>
      </TouchableOpacity>
      <Title style={[isDarkMode ? styles.darkText : styles.lightText]}>
        {t('ExposuretoHeat.HeatExposure.button.Management')}
      </Title>

      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Button
          mode="contained"
          style={styles.callButton}
          onPress={() =>
            navigation.navigate('HyperthermiaConscious', {condition: 'ExposuretoHeat'})
          }>
          {t('ExposuretoHeat.HeatExposure.button.name1')}
        </Button>
        <Button
          mode="contained"
          style={styles.callButtonname2}
          onPress={() =>
            navigation.navigate('HyperthermiaUnconscious', {condition: 'funnelspider'})
          }>
          {t('ExposuretoHeat.HeatExposure.button.name2')}
        </Button>
      </View>

      {/* <Button
        mode="contained"
        style={styles.callButton}
        onPress={() => Linking.openURL('tel:000')}
        icon={() => <Feather name="phone-call" size={20} color="white" />}>
        {t('Choking.emergency.EmergencyCall')}
      </Button>

    
      <Paragraph
        style={[
          styles.emergencyText,
          isDarkMode ? styles.darkText : styles.warnColor,
        ]}>
        {t('Choking.emergency.bystander')}
      </Paragraph>
      <Paragraph style={[styles.emergencyNumber, styles.warnColor]}>
        000
      </Paragraph> */}
    </ScrollView>
  );
};

export default ExposuretoHeat;

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
    backgroundColor: 'green',
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
  callButtonname2: {
    marginTop: 10,
    backgroundColor: '#FF2400',
  },
  button: {
    marginTop: 16,
    // backgroundColor: 'green',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
