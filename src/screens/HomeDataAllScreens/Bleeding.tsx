import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Text, Linking } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Bleeding = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
            {/* Header Image */}
            <Image source={require('../../assets/firstAid/bleedinging.webp')} style={styles.image} />

            {/* Main Title */}
            <Title style={[styles.card, styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('bleeding.title')}
            </Title>

            {/* Types of Bleeding Title (Centered) */}
            <Title style={[styles.typesHeader, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('bleeding.typesHeading')}
            </Title>

            {/* Types of Bleeding Section */}
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                {/* Add types of bleeding content here if needed */}
            </View>

            {/* Bleeding Control Section */}
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('bleeding.controlHeading')}
                </Title>

                {[
                    t('bleeding.control.ctrl1'),
                    t('bleeding.control.ctrl2'),
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Paragraph>
                    </View>
                ))}

                {/* Additional Text Below Bleeding Control */}
                <Paragraph style={[styles.additionalText, { color: isDarkMode ? "#fff" : "#000" }]}>
                    {t('bleeding.additionalText')}
                </Paragraph>
                
            </View>

            {/* Management Section */}
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('Amputations.Management.title')}
                </Title>

                {[
                    t('bleeding.management.point1'),
                    t('bleeding.management.point2'),
                    t('bleeding.management.point3'),
                    t('bleeding.management.point4'),
                    t('bleeding.management.point5'),
                    t('bleeding.management.point6'),
                    t('bleeding.management.point7'),
                    t('bleeding.management.point8'),
                    t('bleeding.management.point9'),
                    t('bleeding.management.point10'),
                    t('bleeding.management.point11'),
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Paragraph>
                        
                    </View>
                ))}
                 <Text>
                          Adrenalin Auto-Injector (Epipen)
                        </Text>
                <Button
                    mode="contained"
                    style={styles.callButton}
                    onPress={() => Linking.openURL("tel:000")}
                >
                    {t('emergency.EmergencyCall')} {/* Translation key for the button text */}
                </Button>
            </View>
        </ScrollView>
    );
};

export default Bleeding;

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
    typesHeader: {
        fontSize: 22,
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
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    listText: {
        fontSize: 16,
        marginLeft: 8,
        flexShrink: 1,
    },
    additionalText: {
        fontSize: 16,
        marginTop: 10,
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#000', // Dark black color
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
});