import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Feather from 'react-native-vector-icons/Feather';

const AimsofFirstAid = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    console.log(isDarkMode)

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
      {/* Header Image */}
      {/* <Image source={require('../../assets/AimsFIrstAids/aimsfirstaid.webp')} style={styles.image} /> */}

      {/* Title 
      <Title style={[styles.header, {color: isDarkMode ? "#fff" : "#000"  }]}>
        {t('aimsOfFirstAid.aimsOfFirstAid')}
      </Title>
*/}
      {/* First Aid Definition */}
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{t('aimsOfFirstAid.firstAidDefinition')}</Paragraph>
          </Title>
        </Card.Content>
      </View>

      {/* Aims of First Aid */}
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <Feather name="target" size={20} color="blue" /> {t('aimsOfFirstAid.aims')}
          </Title>

          {[t('aimsOfFirstAid.preserveLife'),
            t('aimsOfFirstAid.protectUnconscious'),
            t('aimsOfFirstAid.promoteRecovery'),
            t('aimsOfFirstAid.preventDeterioration'),
            t('aimsOfFirstAid.seekMedicalAssistance'),
            t('aimsOfFirstAid.doNoHarm')
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${item}`}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

      {/* Protection and Hygiene */}
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <Feather name="shield" size={20} color="orange" /> {t('aimsOfFirstAid.protectionAndHygiene')}
          </Title>

          {[
            t('aimsOfFirstAid.washHands'),
            t('aimsOfFirstAid.useSterileDressings'),
            t('aimsOfFirstAid.cleanArea'),
            t('aimsOfFirstAid.rescueBreaths')
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Feather name="droplet" size={18} color="purple" />
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{item}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

      {/* Principles of Assessment */}
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <Feather name="book-open" size={20} color="brown" /> {t('aimsOfFirstAid.principlesOfAssessment')}
          </Title>

          {[
            t('aimsOfFirstAid.history'),
            t('aimsOfFirstAid.signs'),
            t('aimsOfFirstAid.symptoms'),
            t('aimsOfFirstAid.callForHelp'),
            t('aimsOfFirstAid.basicSteps')
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Feather name="clipboard" size={18} color="blue" />
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{item}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

      <Divider style={styles.divider} />
    </ScrollView>
  );
};

export default AimsofFirstAid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
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
    textAlign:"justify",
    fontWeight:"bold"
  },
  contentText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
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
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#ddd',
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
});
