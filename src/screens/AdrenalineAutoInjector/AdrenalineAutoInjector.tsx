import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const AdrenalineAutoInjector = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>

            {/* Header Image */}
            {/* <Image source={require('../../assets/Epipen/AdrenalineAuto-Injector.webp')} style={styles.image} /> */}

            {/* Title */}
            <Text style={[styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('epipen.epipen_title')}
            </Text>

            {/* Content List */}
            <View style={styles.contentContainer}>
                {[
                    t('epipen.epipen_step1'),
                    t('epipen.epipen_step2'),
                    t('epipen.epipen_step3'),
                    t('epipen.epipen_step4'),
                    t('epipen.epipen_step5'),
                    t('epipen.epipen_step6'),
                    t('epipen.epipen_step7'),
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <Text style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {index + 1}. {item}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={styles.card}>
                <Button mode="contained" style={styles.callButton} onPress={() => Linking.openURL("tel:108")}>
                    <Feather name="phone-call" size={20} />{" "}{t('emergency.EmergencyCall')}
                </Button>
                <Paragraph style={styles.headers}>
                    {t('emergency.bystander')}
                </Paragraph>
                <Paragraph style={styles.headerss}>
                    108
                </Paragraph>
            </View>
        </ScrollView>
    );
};

export default AdrenalineAutoInjector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    image: {
        width: '100%',
        height: 350,
        borderRadius: 12,
        marginBottom: 16,
        resizeMode: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    contentContainer: {
        paddingHorizontal: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    listText: {
        fontSize: 16,
        marginLeft: 8,
        flexShrink: 1,
    },
    divider: {
        marginVertical: 20,
        height: 1,
        backgroundColor: '#ddd',
    },
    darkText: {
        color: 'white',
    },
    lightText: {
        color: 'black',
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    linkText: {
        fontSize: 16,
        marginLeft: 8,
        textDecorationLine: 'underline',
    },
    linkingSite: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        marginBottom: 16,
        borderRadius: 12,
        padding: 10,
    },
    headers: {
        fontSize: 18,
        fontWeight: 'semibold',
        textAlign: 'center',
        color: "red",
        marginTop: 10
    },
    headerss: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "red"
    },
    title: {
        fontSize: 18,
        fontWeight: 'semibold',
        marginBottom: 8,
    },
    callButton: {
        marginTop: 10,
        backgroundColor: 'red',
    }
});
