import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  ScrollView,
  Image,
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

const Seizures = () => {
  const {t} = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000' : '#fff'},
      ]}>
      <Title
        style={[
          styles.card,
          styles.header,
          {color: isDarkMode ? '#fff' : '#000'},
        ]}>
        {t('Seizures.title')}
      </Title>

      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <View>
          <Paragraph
            style={[
              styles.listText,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('Seizures.description')}
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
          {t('Seizures.Management.title')}
        </Title>

        {[t('Seizures.Management.sym1'),
         t('Seizures.Management.sym2'),
         t('Seizures.Management.sym3'),
         t('Seizures.Management.sym4'),
         t('Seizures.Management.sym5'),
        ].map(
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
       <Button
                      mode="contained"
                      style={styles.callButton}
                      onPress={() => Linking.openURL('tel:000')}
                      icon={() => <Feather name="phone-call" size={20} color="white" />}
                  >
                      {t('bitetick.tickemergency.bys')}
                  </Button>
      
                  {/* Emergency Text and Number */}
                  <Paragraph
                      style={[
                          styles.emergencyText,
                          isDarkMode ? styles.darkText : styles.warnColor,
                      ]}
                  >
                      {t('bitetick.tickemergency.call')}
                  </Paragraph>
                  <Paragraph style={[styles.emergencyNumber, styles.warnColor]}>
                      000
                  </Paragraph>

      {/* Management Section */}

      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Title
          style={[
            styles.title,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {t('Seizures.Management.Des2')}
        </Title>
      </View>
      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <View>
          <Paragraph
            style={[
              styles.listText,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('Seizures.Management.des3')}
          </Paragraph>
        </View>
      </View>
      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <View>
          <Paragraph
            style={[
              styles.listText,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('Seizures.Management.des4')}
          </Paragraph>
        </View>
      </View>
      <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PatientCare', { condition: 'funnelspider' })}
          >
            <Text style={styles.buttonText}>
              {t('funnelspider.button.next')}
            </Text>
          </TouchableOpacity>

    </ScrollView>
  );
};

export default Seizures;

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
  callButton1: {
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
  callButtonname2: {
    marginTop: 10,
    backgroundColor: '#FF2400',
  },
  subtitle: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#FF0000', // Red color for emphasis
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
