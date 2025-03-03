import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Text, TouchableOpacity, Linking } from 'react-native';
import { Divider, Paragraph } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Feather from 'react-native-vector-icons/Feather';

const PatientCare = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    const openNHMLink = () => {
        Linking.openURL("https://nhm.gov.in/");
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>

            {/* Header Image */}
            <Image source={require('../../assets/PatientCare/patientCare.webp')} style={styles.image} />

            {/* Title
            <Text style={[styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('PatientCare.patient_care_title')}
            </Text> */}

            {/* Content List */}
            <View style={styles.contentContainer}>
                {[
                    t('PatientCare.patient_care_desc'),
                    t('PatientCare.patient_care_talking'),
                    t('PatientCare.patient_care_intro'),
                    t('PatientCare.patient_care_eye_contact'),
                    t('PatientCare.patient_care_limitations'),
                    t('PatientCare.patient_care_example'),
                    t('PatientCare.patient_care_thanks'),
                    t('PatientCare.patient_care_contact'),
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <Feather name="plus" size={18} color={isDarkMode ? "#fff" : "#000"} />
                        <Text style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Text>
                    </View>
                ))}
            </View>
            <Divider style={styles.divider} />

            <View style={styles.linkingSite}>
                <Feather name="external-link" size={18} color={isDarkMode ? "green" : "green"} />
                <TouchableOpacity onPress={openNHMLink}>
                    <Text style={[styles.linkText, isDarkMode ? styles.darkText : styles.lightText,{color:'blue', fontWeight:"bold"}]}>
                        https://nhm.gov.in/
                    </Text>
                </TouchableOpacity>
            </View>
            <Divider style={styles.divider} />

        </ScrollView>
    );
};

export default PatientCare;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 12,
        marginBottom: 16,
        resizeMode: 'cover',
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
    linkingSite:{
        flexDirection:"row",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
});
