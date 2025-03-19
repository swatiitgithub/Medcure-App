import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Linking } from 'react-native';
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const AllergiesAnaphylaxis = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const navigation = useNavigation<any>();
    //console.log(isDarkMode)

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
            {/* Header Image */}
            {/* <Image source={require('../../assets/allergies_anaphylaxis/allergiesanaphylaxis.webp')} style={styles.image} /> */}

            {/* Title */}
            <Title style={[styles.card, styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('allergies_anaphylaxis.title')}
            </Title>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>

                <View >
                    <View><Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{t('allergies_anaphylaxis.description')}</Paragraph></View>
                    <View><Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{t('allergies_anaphylaxis.desc')}</Paragraph></View>
                </View>
            </View>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('allergies_anaphylaxis.symptomsHeading')}
                </Title>

                {[
                    t('allergies_anaphylaxis.symptoms.sym1'),
                    t('allergies_anaphylaxis.symptoms.sym2'),
                    t('allergies_anaphylaxis.symptoms.sym3'),
                    t('allergies_anaphylaxis.symptoms.sym4'),
                    t('allergies_anaphylaxis.symptoms.sym5'),
                    t('allergies_anaphylaxis.symptoms.sym6'),
                    t('allergies_anaphylaxis.symptoms.sym7'),
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, , isDarkMode ? styles.darkText : styles.lightText]}>{item}</Paragraph>
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
                    onPress={() => navigation.navigate('Conscious', { condition: 'allergies_anaphylaxis' })}
                >
                    {t('allergies_anaphylaxis.button.name1')}
                </Button>
                <Button 
                    mode="contained" 
                    style={styles.callButtonname2} 
                    onPress={() => navigation.navigate('Unconscious', { condition: 'allergies_anaphylaxis' })}
                >
                    {t('allergies_anaphylaxis.button.name2')}
                </Button>
            </View>

        </ScrollView>
    );
};

export default AllergiesAnaphylaxis;

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
    listText1: { padding: 5 },
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
    callButton: {
        marginTop: 10,
        backgroundColor: 'green',
    },
    callButtonname2: {
        marginTop: 10,
        backgroundColor: '#FF2400',
    }
});
