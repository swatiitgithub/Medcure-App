import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, Linking } from 'react-native';
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

const Stroke = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const navigation = useNavigation<any>();

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
            {/* Header Image */}
            {/* <Image source={require('../../assets/Stroke/Stroke.webp')} style={styles.image} /> */}

            {/* Title */}
            <Title style={[styles.card, styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('Stroke.title')}
            </Title>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
            <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('Stroke.signsSymptoms.title')}
                </Title>

                <View>
                {[
                    t('Stroke.signsSymptoms.face'),
                    t('Stroke.signsSymptoms.arms'),
                    t('Stroke.signsSymptoms.speech'),
                    t('Stroke.signsSymptoms.time'),
                    
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Paragraph>
                    </View>
                ))}
                </View>
            </View>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('Stroke.otherSymptoms.heading')}
                </Title>

                {[
                    t('Stroke.otherSymptoms.sym1'),
                    t('Stroke.otherSymptoms.sym2'),
                    t('Stroke.otherSymptoms.sym3'),
                    
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <Octicons name="dot" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                            {item}
                        </Paragraph>
                    </View>
                ))}
            </View>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('Stroke.moreInfotitle')}
                </Title>

                {[
                    t('Stroke.moreInfo'),
                    
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
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
                    onPress={() => navigation.navigate('Conscious', { condition: 'asthma' })}
                >
                    {t('asthma.button.name1')}
                </Button>
                <Button
                    mode="contained"
                    style={styles.callButtonname2}
                    onPress={() => navigation.navigate('Unconscious', { condition: 'asthma' })}
                >
                    {t('asthma.button.name2')}
                </Button>
            </View>
        </ScrollView>
    );
};

export default Stroke;

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
});