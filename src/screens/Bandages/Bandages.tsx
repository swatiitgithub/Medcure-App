import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Bandages = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    console.log(isDarkMode)

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
      {/* Header Image */}
      {/* <Image source={require('../../assets/Bandages/bandage.webp')} style={styles.image} /> */}

      {/* Title */}
      <Title style={[styles.header, {color: isDarkMode ? "#fff" : "#000"  }]}>
        {t('bandages.bandages_title')}
      </Title>


      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <Fontisto name="bandage" size={20} color="blue" /> {t('bandages.bandages_conforming')}
          </Title> 

          {[t('bandages.bandages_conforming_desc'),
            t('bandages.bandages_conforming_sizes'),
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${item}`}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <FontAwesome name="hospital-o" size={20} color="orange" /> {t('bandages.bandages_medium_hospital_crepe')}
          </Title>

          {[
            t('bandages.bandages_medium_hospital_crepe_desc'),
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${item}`}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <Ionicons name="medkit" size={20} color="brown" /> {t('bandages.bandages_heavy_crepe')}
          </Title>

          {[
            t('bandages.bandages_heavy_crepe_desc'),
            t('bandages.bandages_heavy_crepe_recommendation'),
            t('bandages.bandages_heavy_crepe_size'),
            t('bandages.bandages_heavy_crepe_instruction'),
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${item}`}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

        <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <Feather name="triangle" size={20} color="brown" /> {t('bandages.bandages_triangular')}
          </Title>

          {[
            t('bandages.bandages_triangular_types'),
            t('bandages.bandages_triangular_adult_size'),
            t('bandages.bandages_triangular_child_size'),
            t('bandages.bandages_triangular_use'),
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${item}`}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <FontAwesome5 name="grip-lines" size={20} color="brown" /> {t('bandages.bandages_cohesive')}
          </Title>

          {[
            t('bandages.bandages_cohesive_desc'),
            t('bandages.bandages_cohesive_use'),
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${item}`}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <FontAwesome5 name="first-aid" size={20} color="brown" /> {t('bandages.bandages_wound_dressings')}
          </Title>

          {[
            t('bandages.bandages_wound_dressings_no13'),
            t('bandages.bandages_wound_dressings_no14'),
            t('bandages.bandages_wound_dressings_no15'),
            t('bandages.bandages_wound_dressings_use'),
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${item}`}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

      <Divider style={styles.divider} />
    </ScrollView>
  );
};

export default Bandages;

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