import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Linking } from 'react-native';
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const HeatStroke= () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const navigation = useNavigation<any>();

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
            {/* Header Image */}
            {/* <Image source={require('../../assets/Asthma/asthma.webp')} style={styles.image} /> */}

            {/* Title */}
            <Title style={[styles.card, styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('ExposuretoHeat.HeatExposure.HeatStroke.title')}
            </Title>
             <Title
                          style={[styles.typesHeader, {color: isDarkMode ? '#fff' : '#000'}]}>
                          {t('ExposuretoHeat.HeatExposure.HeatStroke.subtitle')}
                        </Title>

           

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('ExposuretoHeat.HeatExposure.symptoms.title')}
                </Title>

                {[
                    t('ExposuretoHeat.HeatExposure.symptoms.sym1'),
                    t('ExposuretoHeat.HeatExposure.symptoms.sym2'),
                    t('ExposuretoHeat.HeatExposure.symptoms.sym3'),
                    t('ExposuretoHeat.HeatExposure.symptoms.sym4'),
                    t('ExposuretoHeat.HeatExposure.symptoms.sym5'),
                    t('ExposuretoHeat.HeatExposure.symptoms.sym6'),
                    
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Paragraph>
                    </View>
                ))}
            </View>

            <Title style={[isDarkMode ? styles.darkText : styles.lightText]}>
                {t('Amputations.Management.title')}
            </Title>
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Button
                    mode="contained"
                    style={styles.callButton}
                    onPress={() => navigation.navigate('Heatconscious', { condition: 'asthma' })}
                >
                    {t('asthma.button.name1')}
                </Button>
                <Button
                    mode="contained"
                    style={styles.callButtonname2}
                    onPress={() => navigation.navigate('HeatUnconscious', { condition: 'asthma' })}
                >
                    {t('asthma.button.name2')}
                </Button>
            </View>
        </ScrollView>
    );
};

export default HeatStroke;

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
        marginTop: 10,
        backgroundColor: 'green',
    },
    callButtonname2: {
        marginTop: 10,
        backgroundColor: '#FF2400',
    },
    typesHeader: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
      },
});