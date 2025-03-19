import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, ScrollView, Image, Linking} from 'react-native';
import {
  Text,
  Card,
  Title,
  Paragraph,
  Divider,
  Button,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';

const FunnelCPR = () => {
  const {t} = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={[
        styles.container,
        isDarkMode ? styles.darkBackground : styles.lightBackground,
      ]}>
      {/* CPR Image */}
      {/* <Image
        source={require('../../assets/CPRGuide/cprguide.webp')}
        style={styles.image}
      /> */}

      {/* CPR Title and Subtitle */}
      <View style={styles.centered}>
        <Title
          style={[
            styles.cprTitle,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {t('funnelspider.cprGuides.title')}
        </Title>
        <Text
          style={[
            styles.subtitle,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}>
          {t('funnelspider.cprGuides.subtitle')}
        </Text>
      </View>

      {/* Danger Section */}
      <Card
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title
            style={[
              styles.sectionTitle,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('funnelspider.cprGuides.danger')}
          </Title>
          <Divider style={styles.divider} />
          {Object.values(
            t('funnelspider.cprGuides.dangerSteps', {returnObjects: true}),
          ).map((step, index) => (
            <View key={index} style={styles.listItem}>
              <Icon
                name={(index + 1).toString()}
                size={14}
                color={isDarkMode ? 'lightblue' : '#003CB3'}
                style={styles.icon}
              />
              <Paragraph
                style={[
                  styles.text,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}>
                {step}
              </Paragraph>
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Send for Help Section */}
      <Card
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title
            style={[
              styles.sectionTitle,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('funnelspider.cprGuides.cprSend')}
          </Title>
          <Divider style={styles.divider} />
          {Object.values(
            t('funnelspider.cprGuides.cprSendList', {returnObjects: true}),
          ).map((step, index) => (
            <View key={index} style={styles.listItem}>
              <Icon
                name={(index + 1).toString()}
                size={14}
                color={isDarkMode ? 'lightblue' : '#003CB3'}
                style={styles.icon}
              />
              <Paragraph
                style={[
                  styles.text,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}>
                {step}
              </Paragraph>
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Airway Section */}
      <Card
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title
            style={[
              styles.sectionTitle,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('funnelspider.cprGuides.airway')}
          </Title>
          <Divider style={styles.divider} />
          {Object.values(
            t('funnelspider.cprGuides.airwaySteps', {returnObjects: true}),
          ).map((step, index) => (
            <View key={index} style={styles.listItem}>
              <Icon
                name={(index + 1).toString()}
                size={14}
                color={isDarkMode ? 'lightblue' : '#003CB3'}
                style={styles.icon}
              />
              <Paragraph
                style={[
                  styles.text,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}>
                {step}
              </Paragraph>
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Breathing Section */}
      <Card
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title
            style={[
              styles.sectionTitle,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('funnelspider.cprGuides.breathing')}
          </Title>
          <Divider style={styles.divider} />
          {Object.values(
            t('funnelspider.cprGuides.breathingSteps', {returnObjects: true}),
          ).map((step, index) => (
            <View key={index} style={styles.listItem}>
              <Icon
                name={(index + 1).toString()}
                size={14}
                color={isDarkMode ? 'lightblue' : '#003CB3'}
                style={styles.icon}
              />
              <Paragraph
                style={[
                  styles.text,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}>
                {step}
              </Paragraph>
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Compressions Section */}
      <Card
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title
            style={[
              styles.sectionTitle,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('funnelspider.cprGuides.compressions')}
          </Title>
          <Divider style={styles.divider} />
          {Object.values(
            t('funnelspider.cprGuides.compressionsSteps', {
              returnObjects: true,
            }),
          ).map((step, index) => (
            <View key={index} style={styles.listItem}>
              <Icon
                name={(index + 1).toString()}
                size={14}
                color={isDarkMode ? 'lightblue' : '#003CB3'}
                style={styles.icon}
              />
              <Paragraph
                style={[
                  styles.text,
                  isDarkMode ? styles.darkText : styles.lightText,
                ]}>
                {step}
              </Paragraph>
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Defibrillation Section */}
      <Card
        style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title
            style={[
              styles.sectionTitle,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('funnelspider.cprGuides.defibrillation')}
          </Title>
          <Divider style={styles.divider} />
          <Paragraph
            style={[
              styles.text,
              isDarkMode ? styles.darkText : styles.lightText,
            ]}>
            {t('funnelspider.cprGuides.defibrillationText')}
          </Paragraph>
        </Card.Content>
      </Card>
      <Button
      mode="contained"
      style={styles.recoveryButton}
      onPress={() =>
        navigation.navigate('RecoveryPosition', { condition: 'asthma' })
      }
      icon={() => <Feather name="user" size={20} color="white" />}>
      {t('funnelspider.emergency.RecoveryPosition')}
    </Button>

      {/* Emergency Call Button */}
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
    </ScrollView>
  );
};

export default FunnelCPR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centered: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cprTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  darkBackground: {
    backgroundColor: '#222',
  },
  lightBackground: {
    backgroundColor: '#f5f5f5',
  },
  darkCard: {
    backgroundColor: '#333',
  },
  lightCard: {
    backgroundColor: '#f5f5f5',
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
  divider: {
    marginVertical: 8,
    backgroundColor: 'gray',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    marginBottom: 16,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  callButton: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#FF0000',
  },
  recoveryButton: {
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: '#4CAF50', // Green color
  },
  emergencyText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  emergencyNumber: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  warnColor: {
    color: '#FF0000',
  },
});
