import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Linking } from 'react-native';
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Amputations = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  console.log(isDarkMode)

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
      {/* Header Image 
      <Image source={require('../../assets/Amputations/amputations.webp')} style={styles.image} />
*/}
      {/* Title 
      <Title style={[styles.header, {color: isDarkMode ? "#fff" : "#000"  }]}>
        {t('aimsOfFirstAid.aimsOfFirstAid')}
      </Title>
*/}
      {/* First Aid Definition
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{t('Amputations.title')}</Paragraph>
          </Title>
        </Card.Content>
      </View> */}

      {/* Aims of First Aid */}
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            {t('Amputations.Management.title')}
          </Title>

          {[t('Amputations.Management.ControlBleeding'),
          t('Amputations.Management.CareSeveredPart'),
          t('Amputations.Management.CallAmbulance'),
          t('Amputations.Management.EmergencyCall'),
          t('Amputations.Management.ComfortPatient')
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${item}`}</Paragraph>
            </View>
          ))}
          {/* call button  */}

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
        </Card.Content>
      </View>

      {/* Protection and Hygiene */}
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            {t('Amputations.ManagementOfStump.title')}
          </Title>

          {[
            t('Amputations.ManagementOfStump.ElevateStump'),
            t('Amputations.ManagementOfStump.ReassurePatient')
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${item}`}</Paragraph>
            </View>
          ))}
        </Card.Content>
      </View>

      {/* Principles of Assessment */}
      <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
        <Card.Content>
          <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            {t('Amputations.ManagementOfBodyPart.title')}
          </Title>


          <View >
          <View>
            <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText, styles.listText1]}>
              1. {t('Amputations.ManagementOfBodyPart.PlaceInBag')}
            </Paragraph>
            </View>
            <View>
            <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText, styles.listText1]}>
              2. {t('Amputations.ManagementOfBodyPart.PlaceInBag')}
            </Paragraph>
            </View>
            <View>
              <Paragraph style={[styles.listText, styles.warnColor, styles.listText1]}>
              3. <MaterialCommunityIcons name="message-alert-outline" size={20} color="red" />
               {' '}{t('Amputations.ManagementOfBodyPart.PlaceInBag')}
              </Paragraph>
            </View>
            <View>
              <Paragraph style={[styles.listText, styles.warnColor, styles.listText1]}>
              4. <MaterialCommunityIcons name="message-alert-outline" size={20} color="red" />
                {' '}{t('Amputations.ManagementOfBodyPart.PlaceInBag')}
              </Paragraph>
            </View>
          </View>

        </Card.Content>
      </View>

      <Divider style={styles.divider} />
    </ScrollView>
  );
};

export default Amputations;

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
});
