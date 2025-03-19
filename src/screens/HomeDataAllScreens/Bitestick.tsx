import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Linking } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const Bitetick = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
            {/* Header Image */}
            {/* <Image source={require('../../assets/firstAid/cpr.webp')} style={styles.image} /> */}

            {/* Title */}
            <Title style={[styles.card, styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('bitetick.title')}
            </Title>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <View>
                    <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                        {t('bitetick.description')}
                    </Paragraph>
                </View>
            </View>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('bitetick.symptomsHeading')}
                </Title>

                {[
                    t('bitetick.symptoms.sym1'),
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Paragraph>
                    </View>
                ))}
            </View>

            {/* Management Section with 6 Dot Circles */}
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('bitetick.Management.title')}
                </Title>
                {[
                    t('bitetick.Management.point1'),
                    t('bitetick.Management.point2'),
                    t('bitetick.Management.point3'),
                    t('bitetick.Management.point4'),
                    t('bitetick.Management.point5'),
                    t('bitetick.Management.point6'),
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Paragraph>
                    </View>
                ))}
            </View>

            {/* Emergency Call Button */}
            <Button
                mode="contained"
                style={styles.callButton}
                onPress={() => Linking.openURL('tel:000')}
                icon={() => <Feather name="phone-call" size={20} color="white" />}
            >
                {t('bitetick.tickemergency.bys')}
            </Button>

            {/* Emergency Text and Number */}
            <Paragraph
                style={[
                    styles.emergencyText,
                    isDarkMode ? styles.darkText : styles.warnColor,
                ]}
            >
                {t('bitetick.tickemergency.call')}
            </Paragraph>
            <Paragraph style={[styles.emergencyNumber, styles.warnColor]}>
                000
            </Paragraph>
        </ScrollView>
    );
};

export default Bitetick;

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
});