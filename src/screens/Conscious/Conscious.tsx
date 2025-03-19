import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Button, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

type RouteParams = {
  condition: string;
};

const Conscious = () => {
  const {t} = useTranslation();
  const route = useRoute();
  const {condition} = route.params as RouteParams;
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const navigation = useNavigation<any>();

  // Get the image dynamically based on condition
  const getConditionImage = () => {
    try {
      // return require(`../../assets/firstAid/consciousness.webp`);
      //return require(`../../assets/firstAid/${condition.toLowerCase()}.webp`);
    } catch {
      return null;
    }
  };

  // Get management steps based on condition type
  const getManagementSteps = () => {
    const steps = [];
    let index = 1;

    // Try different possible translation paths
    const possiblePaths = [
      `${condition}.management.conscious.cons`,
      `${condition}.conscious.steps.step`,
      `${condition}.management.steps.conscious.`,
    ];

    for (const basePath of possiblePaths) {
      while (true) {
        const step = t(`${basePath}${index}`);
        if (step === `${basePath}${index}`) break;
        steps.push(step);
        index++;
      }
      if (steps.length > 0) break;
    }

    return steps;
  };

  const steps = getManagementSteps();
  const conditionImage = getConditionImage();

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000' : '#fff'},
      ]}>
      {conditionImage && <Image source={conditionImage} style={styles.image} />}
      <View style={styles.content}>
        <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#333'}]}>
          {t(`${condition}.title`)}
        </Text>
        <Text style={[styles.subtitle, {color: isDarkMode ? '#ccc' : '#666'}]}>
          {t('common.consciousManagement', 'Management for Conscious Patient')}
        </Text>

        {steps.length > 0 ? (
          steps.map((step, index) => (
            <View
              key={index}
              style={[
                styles.stepContainer,
                {backgroundColor: isDarkMode ? '#222' : '#f8f8f8'},
              ]}>
              <Text style={styles.stepNumber}>{index + 1}</Text>
              <Text
                style={[
                  styles.stepText,
                  {color: isDarkMode ? '#fff' : '#333'},
                ]}>
                {step}
              </Text>
            </View>
          ))
        ) : (
          <Text style={[styles.noSteps, {color: isDarkMode ? '#fff' : '#666'}]}>
            {t(
              'common.noStepsAvailable',
              'No management steps available for this condition.',
            )}
          </Text>
        )}
      </View>

      <View>
        <Text>Adrenalin Auto-Injector (Epipen)</Text>

        <Button
          mode="contained"
          style={styles.callButton}
          onPress={() => Linking.openURL('tel:000')}>
          {t('emergency.EmergencyCall')}
        </Button>

        {condition === 'Burns' && (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Burnsinformation', {condition: 'Burns'})
            }>
            <Text style={styles.buttonText}>{t('Burns.button.next')}</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  stepNumber: {
    width: 24,
    height: 24,
    backgroundColor: '#2196f3',
    color: '#fff',
    borderRadius: 12,
    textAlign: 'center',
    lineHeight: 24,
    marginRight: 12,
    fontWeight: 'bold',
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  noSteps: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
  callButton: {
    marginTop: 10,
    backgroundColor: 'green',
  },
  button: {
    marginTop: 16,
    backgroundColor: 'green',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Conscious;

{
  /* import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Linking } from 'react-native';
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Feather from 'react-native-vector-icons/Feather';

const Conscious = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  console.log(isDarkMode)

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
      <Title style={[styles.header, isDarkMode ? styles.darkText : styles.lightText]}>
            {t('allergies_anaphylaxis.title')}
          </Title>
          <Title style={[styles.header, isDarkMode ? styles.darkText : styles.lightText]}>
            {t('allergies_anaphylaxis.button.name1')}
          </Title>
            <View >
              <Paragraph style={[styles.basiclife, , isDarkMode ? styles.darkText : styles.lightText]}>{t('allergies_anaphylaxis.management.conscious.cons1')}</Paragraph>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{t('allergies_anaphylaxis.management.conscious.cons2')}</Paragraph>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{t('allergies_anaphylaxis.management.conscious.cons3')}</Paragraph>
             </View>
        call button  

          <View style={styles.card}>
          <Button mode="contained" style={styles.callButton} onPress={() => Linking.openURL("tel:000")}>
          <Feather name="phone-call" size={20}/>{" "}{t('emergency.EmergencyCall')}
          </Button>
        <Paragraph style={styles.headers}>
          {t('emergency.bystander')}
        </Paragraph>
        <Paragraph style={styles.headerss}>
          000
        </Paragraph>
      </View>
      </View>
    </ScrollView>
  );
};

export default Conscious;

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
    textAlign: "justify",
    fontWeight: "bold"
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
  basiclife: {
    fontSize: 16,
    marginLeft: 8,
    fontStyle : "italic",
    textDecorationLine:"underline",
    color:"blue"
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
  warnColor: {
    color: "red"
  },
  listText1:{padding:5},
  headers: {
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    color : "red",
    marginTop:10
  },
  headerss: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color : "red"
  },
  callButton: {
    marginTop: 10,
    backgroundColor: '#FF2400',
  }
});*/
}
