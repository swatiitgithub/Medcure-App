import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Redback = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
            {/* Header Image */}
            {/* <Image source={require('../../assets/firstAid/Redback.webp')} style={styles.image} /> */}

            {/* Title */}
            <Title style={[styles.card, styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('Redback.title')}
            </Title>

            {/* Subtitle */}
            <Title style={[styles.subtitle, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('Redback.typesHeading')}
            </Title>

            {/* Description */}
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('Redback.description')}
                </Paragraph>
            </View>

            {/* Symptoms Section */}
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('Redback.symptomsHeading')}
                </Title>

                {[
                    t('Redback.symptoms.sym1'),
                    t('Redback.symptoms.sym2'),
                    t('Redback.symptoms.sym3'),
                    t('Redback.symptoms.sym4'),
                    t('Redback.symptoms.sym5'),
                    t('Redback.symptoms.sym6'),
                   
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Paragraph>
                    </View>
                ))}
            </View>

            {/* Management Section */}
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('Redback.managementHeading')}
                </Title>

                {[
                    t('Redback.management.manage1'),
                    t('Redback.management.manage2'),
                    t('Redback.management.manage3'),
                    t('Redback.management.manage4'),
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Paragraph>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Redback;

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
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#FF0000', // Red color for emphasis
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: "justify",
        fontWeight: "bold",
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
});