import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, ScrollView, Image, View, Linking} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Burns = () => {
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
      {/* <Image source={require('../../assets/firstAid/burns.webp')} style={styles.image} /> */}

      {/* Title */}
      <Title
        style={[
          styles.card,
          styles.header,
          {color: isDarkMode ? '#fff' : '#000'},
        ]}>
        {t('Burns.title')}
      </Title>

      {/* Description Section */}

      {/* Symptoms Section */}

      {/* Management Section */}
      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Title
          style={[
            styles.title,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {t('Burns.Management.title')}
        </Title>
        {[
          t('Burns.Management.point1'),
          t('Burns.Management.point2'),
          t('Burns.Management.point3'),
          t('Burns.Management.point4'),
          t('Burns.Management.point5'),
          t('Burns.Management.point6'),
          t('Burns.Management.point7'),
          t('Burns.Management.point8'),
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
        <Paragraph
          style={[
            styles.listText,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {t('Burns.description1.title')}
        </Paragraph>
        {[
          t('Burns.description1.point1'),
          t('Burns.description1.point2'),
          t('Burns.description1.point3'),
          t('Burns.description1.point4'),
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

      <Title
        style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
        {t('Burns.Note.title')}
      </Title>
      {[t('Burns.Note.point1')].map((item, index) => (
        <View key={index} style={styles.listItem}>
          {/* <FontAwesome5 name="dot-circle" size={20} color="blue" /> */}
          <Paragraph
            style={[
              styles.listText,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {item}
          </Paragraph>
        </View>
      ))}

      <Button
        mode="contained"
        style={styles.callButton}
        onPress={() => Linking.openURL('tel:000')}
        icon={() => <Feather name="phone-call" size={20} color="white" />}>
        {t('funnelspider.emergency.EmergencyCall')}
      </Button>

      {/* Emergency Text and Number */}
      <Paragraph
        style={[
          styles.emergencyText,
          isDarkMode ? styles.darkText : styles.warnColor,
        ]}>
        {t('funnelspider.emergency.bystander')}
      </Paragraph>
      <Paragraph style={[styles.emergencyNumber, styles.warnColor]}>
        000
      </Paragraph>
      <Title style={[isDarkMode ? styles.darkText : styles.lightText]}>
        {t('Amputations.Management.title')}
      </Title>
      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Button
          mode="contained"
          style={styles.callButton1}
          onPress={() =>
            navigation.navigate('Conscious', {condition: 'Burns'})
          }>
          {t('Burns.button.name1')}
        </Button>
        <Button
          mode="contained"
          style={styles.callButtonname2}
          onPress={() =>
            navigation.navigate('Unconscious', {condition: 'Burns'})
          }>
          {t('Burns.button.name2')}
        </Button>
      </View>
    </ScrollView>
  );
};

export default Burns;

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
    backgroundColor: '#FF0000',
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
});
