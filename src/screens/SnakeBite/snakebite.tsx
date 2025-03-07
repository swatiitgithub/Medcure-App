import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Linking, Text } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Feather from 'react-native-vector-icons/Feather';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type RouteParams = {
  condition: string;
};

const Snakebite = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const route = useRoute();
  const { condition } = route.params as RouteParams;

  // Dynamic image based on condition
  const getConditionImage = () => {
    try {
      return require(`../../assets/firstAid/ants.webp`); 
      // return require(`../../assets/firstAid/${condition.toLowerCase()}.webp`);
    } catch {
      return null;
    }
  };

  // Extract management steps from JSON
  const getManagementSteps = () => {
    const steps = t('snakeBite.management.conscious.steps', { returnObjects: true });
    return Object.values(steps); // Convert object values to an array
  };

  const steps = getManagementSteps();
  const conditionImage = getConditionImage();

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
      
      {/* Condition Image */}
      {conditionImage && <Image source={conditionImage} style={styles.image} />}
      
      <Card style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        {/* Title Section */}
        <Title style={[styles.header, isDarkMode ? styles.darkText : styles.lightText]}>
          {t('snakeBite.title')}
        </Title>

        {/* Subtitle with reduced font size */}
        <Title style={[styles.subtitle, isDarkMode ? styles.darkText : styles.lightText]}>
          {t('snakeBite.subtitle')}
        </Title>

        {/* Management Steps */}
        <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
          {/* Light text and left-aligned */}
          <Paragraph style={[styles.managementText, isDarkMode ? styles.darkText : styles.lightText]}>
            {t('snakeBite.management.conscious.cons')}
          </Paragraph>

          {/* Steps with dot circles */}
          {[
            t('snakeBite.management.conscious.steps.step1'),
            t('snakeBite.management.conscious.steps.step2'),
            t('snakeBite.management.conscious.steps.step3'),
            t('snakeBite.management.conscious.steps.step4'),
            t('snakeBite.management.conscious.steps.step5'),
            t('snakeBite.management.conscious.steps.step6'),
            t('snakeBite.management.conscious.steps.step7'),
          ].map((step, index) => (
           <View key={index} style={styles.listItem}>
                                   <FontAwesome5 name="dot-circle" size={20} color="blue" />
                                   <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                                       {step}
                                   </Paragraph>
                               </View>
          ))}
        </View>

        {/* Emergency Call Section */}
        <Button 
          mode="contained" 
          style={styles.callButton} 
          onPress={() => Linking.openURL("tel:000")}
          icon={() => <Feather name="phone-call" size={20} color="white" />}
        >
          {t('emergency.EmergencyCall')}
        </Button>

        {/* Emergency Number Info */}
        <Paragraph style={[styles.emergencyText, isDarkMode ? styles.darkText : styles.warnColor]}>
          {t('emergency.bystander')}
        </Paragraph>
        <Paragraph style={[styles.emergencyNumber, styles.warnColor]}>
          000
        </Paragraph>
      </Card>

    </ScrollView>
  );
};

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
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18, // Reduced font size for subtitle
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  managementText: {
    fontSize: 16,
    fontWeight: 'bold', // Light text
    textAlign: 'left', // Align to the left
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
  },
  listText: {
    fontSize: 16,
    marginLeft: 10,
  },
  noSteps: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  callButton: {
    marginTop: 10,
    backgroundColor: '#FF2400',
  },
  emergencyText: {
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    marginTop: 10,
  },
  emergencyNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
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
  warnColor: {
    color: "red",
  }
});

export default Snakebite;