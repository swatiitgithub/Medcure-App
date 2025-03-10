import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, ScrollView, Image, View, Linking} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Burnsinformation = () => {
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
        {t('Burns.Information.title')}
      </Title>

      {/* Description Section */}

      {/* Symptoms Section */}

      {/* Management Section */}
     <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
  {[
    t('Burns.Information.point1'),
    t('Burns.Information.point2'),
    t('Burns.Information.point3'),
    t('Burns.Information.point4'),
  ].map((item, index) => (
    <View key={index} style={styles.listItem}>
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
          t('Burns.type.step1'),
          t('Burns.type.step2'),
          t('Burns.type.step3'),
          t('Burns.type.step4'),
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
    </ScrollView>
  );
};

export default Burnsinformation;

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
