import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const AmbulanceInfo = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>

            {/* Header Image */}
            {/* <Image source={require('../../assets/AmbulanceInfo/ambulanceInfo.webp')} style={styles.image} /> */}

            {/* Title 
            <Text style={[styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('ambulance_info.ambulance_info_title')}
            </Text>*/}

            {/* Content List */}
            <View style={styles.contentContainer}>
            {[
                    t('ambulance_info.ambulance_info_desc1'),
                    t('ambulance_info.ambulance_info_desc2'),
                    t('ambulance_info.ambulance_info_desc3'),
                    t('ambulance_info.ambulance_info_desc4')
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <Text style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Text>
                    </View>
                ))}
                {[
                    t('ambulance_info.ambulance_info_desc5'),
                    t('ambulance_info.ambulance_info_desc6'),
                    t('ambulance_info.ambulance_info_desc7'),
                    t('ambulance_info.ambulance_info_desc8')
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <Text style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {index + 1}. {item}
                        </Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default AmbulanceInfo;

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
        resizeMode: 'contain',
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