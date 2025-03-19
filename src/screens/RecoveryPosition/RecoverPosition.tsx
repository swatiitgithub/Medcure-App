import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { Title, Paragraph, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const RecoveryPosition = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#fff' },
      ]}
    >
      {/* Image */}
      {/* <Image
        source={require('../../assets/firstAid/Recovery.webp')}
        style={styles.image}
      /> */}

      {/* Title */}
      <Title
        style={[
          styles.card,
          styles.header,
          { color: isDarkMode ? '#fff' : '#000' },
        ]}
      >
        {t('funnelspider.Recovery.Recoverytitle')}
      </Title>

      {/* Description */}
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Paragraph
          style={[
            styles.contentText,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          {t('funnelspider.Recovery.description')}
        </Paragraph>
      </View>

      {/* Symptoms Heading */}
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        {/* Symptoms List */}
        {[t('funnelspider.steps.sym1')].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <FontAwesome5 name="dot-circle" size={20} color="blue" />
            <Paragraph
              style={[
                styles.listText,
                isDarkMode ? styles.darkText : styles.lightText,
              ]}
            >
              {item}
            </Paragraph>
          </View>
        ))}
      </View>

      <Image
        source={require('../../assets/firstAid/Recovery.webp')}
        style={styles.image}
      />
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        {/* Symptoms List */}
        {[t('funnelspider.steps.sym2')].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <FontAwesome5 name="dot-circle" size={20} color="blue" />
            <Paragraph
              style={[
                styles.listText,
                isDarkMode ? styles.darkText : styles.lightText,
              ]}
            >
              {item}
            </Paragraph>
          </View>
        ))}
      </View>
      <Image
        source={require('../../assets/firstAid/Recovery.webp')}
        style={styles.image}
      />
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        {/* Symptoms List */}
        {[t('funnelspider.steps.sym3')].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <FontAwesome5 name="dot-circle" size={20} color="blue" />
            <Paragraph
              style={[
                styles.listText,
                isDarkMode ? styles.darkText : styles.lightText,
              ]}
            >
              {item}
            </Paragraph>
          </View>
        ))}
      </View>

      <Image
        source={require('../../assets/firstAid/Recovery.webp')}
        style={styles.image}
      />
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        {/* Symptoms List */}
        {[t('funnelspider.steps.sym4')].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <FontAwesome5 name="dot-circle" size={20} color="blue" />
            <Paragraph
              style={[
                styles.listText,
                isDarkMode ? styles.darkText : styles.lightText,
              ]}
            >
              {item}
            </Paragraph>
          </View>
        ))}
      </View>
      <Image
        source={require('../../assets/firstAid/Recovery.webp')}
        style={styles.image}
      />
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        {/* Symptoms List */}
        {[t('funnelspider.steps.sym5'), t('funnelspider.steps.sym6')].map(
          (item, index) => (
            <View key={index} style={styles.listItem}>
              <FontAwesome5 name="dot-circle" size={20} color="blue" />
              <Paragraph
                style={[
                  styles.listText,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}
              >
                {item}
              </Paragraph>
            </View>
          ),
        )}
      </View>
      <Button
        mode="contained"
        style={styles.recoveryButton}
        onPress={() =>
          navigation.navigate('FunnelCPR', { condition: 'asthma' })
        }
        icon={() => <Feather name="user" size={20} color="white" />}
      >
        {t('funnelspider.button1')}
      </Button>
    </ScrollView>
  );
};

export default RecoveryPosition;

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
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  recoveryButton: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'blue',
  },
});