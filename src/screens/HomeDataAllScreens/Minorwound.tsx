import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Minorwound = () => {
  const {t} = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

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
        {t('Minorwound.title')}
      </Title>

      {/* Symptoms Section */}
      <View
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Title
          style={[
            styles.title,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {t('Minorwound.des1')}
        </Title>

        {[
          t('Minorwound.symptoms.sym1'),
          t('Minorwound.symptoms.sym2'),
          t('Minorwound.symptoms.sym3'),
          t('Minorwound.symptoms.sym4'),
          t('Minorwound.symptoms.sym5'),
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <FontAwesome5
              name="dot-circle"
              size={20}
              color="blue"
              style={styles.icon} // Add this style for proper alignment
            />
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

export default Minorwound;

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
    alignItems: 'flex-start', // Align items to the top
    marginBottom: 8,
  },
  icon: {
    marginRight: 10, // Add spacing between the icon and text
    marginTop: 4, // Adjust alignment of the dot icon
  },
  listText: {
    fontSize: 16,
    flex: 1, // Allow text to take up remaining space
    textAlign: 'justify', // Justify text for better readability
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