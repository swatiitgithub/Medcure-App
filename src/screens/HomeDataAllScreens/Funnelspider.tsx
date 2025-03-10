import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, View, Linking, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Funnelspider = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const navigation = useNavigation<any>();

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#000" : "#fff" }]}>
             <Image source={require('../../assets/firstAid/funnelcons.webp')} style={styles.image} />
            {/* Title */}
            <Title style={[styles.card, styles.header, { color: isDarkMode ? "#fff" : "#000" }]}>
                {t('funnelspider.title')}
            </Title>

             {/* Subtitle */}
                        <Title style={[styles.subtitle, { color: isDarkMode ? "#fff" : "#000" }]}>
                            {t('funnelspider.typesHeading')}
                        </Title>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Paragraph style={[styles.contentText, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('funnelspider.description')}
                </Paragraph>
            </View>
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Paragraph style={[styles.contentText, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('funnelspider.subdescription')}
                </Paragraph>
            </View>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('funnelspider.symptomsHeading')}
                </Title>

                {[
                    t('funnelspider.symptoms.sym1'),
                    t('funnelspider.symptoms.sym2'),
                    t('funnelspider.symptoms.sym3'),
                    t('funnelspider.symptoms.sym4'),
                    t('funnelspider.symptoms.sym5'),
                    t('funnelspider.symptoms.sym6'),
                    t('funnelspider.symptoms.sym7'),
                    t('funnelspider.symptoms.sym8'),
                ].map((item, index) => (
                    <View key={index} style={styles.listItem}>
                        <FontAwesome5 name="dot-circle" size={20} color="blue" />
                        <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>{item}</Paragraph>
                    </View>
                ))}
            </View>

            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Paragraph style={[styles.contentText, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('funnelspider.subdescription')}
                </Paragraph>
            </View>

              
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Button 
                    mode="contained" 
                    style={styles.callButton} 
                    onPress={() => navigation.navigate('Conscious', { condition: 'funnelspider' })}
                >
                    {t('funnelspider.button.name1')}
                </Button>
                <Button 
                    mode="contained" 
                    style={styles.callButtonname2} 
                    onPress={() => navigation.navigate('Unconscious', { condition: 'funnelspider' })}
                >
                    {t('funnelspider.button.name2')}
                </Button>
            </View>
        </ScrollView>
    );
};

export default Funnelspider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
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
    image: {
        width: '100%',
        height: 350,
        borderRadius: 10,
        marginBottom: 16,
        resizeMode: 'cover',
    },
    callButtonname2: {
        marginTop: 10,
        backgroundColor: '#FF2400',
    },
    subtitle: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#FF0000', // Red color for emphasis
    },
});