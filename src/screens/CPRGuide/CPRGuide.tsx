import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { Text, Card, Button, Title, Paragraph, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CPRGuide = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    return (
        <ScrollView
            style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}
        >
            {/* Image */}
            <Image
                source={require('../../assets/CPRGuide/cprguide.webp')}
                style={styles.image}
            />

            {/* Header */}
            <Title style={[styles.header, isDarkMode ? styles.darkText : styles.lightText]}>
                {t('cprGuide.cprGuide')}
            </Title>

            <>
                {/* Steps for CPR-Guide */}
                <Card style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                    <Card.Content>
                        <Title style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>{t('cprGuide.cprSteps')}</Title>
                        <Divider style={styles.divider} />
                        <View style={styles.listItem}>
                            <Icon name="1" size={14} color={isDarkMode ? "lightblue" : "#003CB3"} />
                            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
                                {". "} {t('cprGuide.checkResponse')}
                            </Paragraph>
                        </View>
                        <View style={styles.listItem}>
                            <Icon name="2" size={14} color={isDarkMode ? "lightblue" : "#003CB3"} />
                            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
                                {". "}{t('cprGuide.callHelp')}
                            </Paragraph>
                        </View>
                        <View style={styles.listItem}>
                            <Icon name="3" size={14} color={isDarkMode ? "lightblue" : "#003CB3"} />
                            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
                                {". "}{t('cprGuide.compressions')}
                            </Paragraph>
                        </View>
                        <View style={styles.listItem}>
                            <Icon name="4" size={14} color={isDarkMode ? "lightblue" : "#003CB3"} />
                            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
                                {". "}{t('cprGuide.breath')}
                            </Paragraph>
                        </View>
                        <View style={styles.listItem}>
                            <Icon name="5" size={14} color={isDarkMode ? "lightblue" : "#003CB3"} />
                            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
                                {". "}{t('cprGuide.repeat')}
                            </Paragraph>
                        </View>
                        <View style={styles.listItem}>
                            <Icon name="6" size={14} color={isDarkMode ? "lightblue" : "#003CB3"} />
                            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
                                {". "}{t('cprGuide.breathNotPossible')}
                            </Paragraph>
                        </View>
                        <View style={styles.listItem}>
                            <Icon name="7" size={14} color={isDarkMode ? "lightblue" : "#003CB3"} />
                            <Paragraph style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
                                {". "}{t('cprGuide.compressionRate')}
                            </Paragraph>
                        </View>
                    </Card.Content>
                </Card>
            </>

        </ScrollView>
    )
}

export default CPRGuide

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "#F5F5F5"
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 12,
        marginBottom: 16,
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
    },
    card: {
        marginBottom: 16,
        borderRadius: 12,
        padding: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    darkBackground: {
        backgroundColor: "#222",
    },
    lightBackground: {
        backgroundColor: "#f5f5f5",
    },
    darkCard: {
        backgroundColor: "#333",
    },
    lightCard: {
        backgroundColor: "#f5f5f5",
    },
    darkText: {
        color: "white",
    },
    lightText: {
        color: "black",
    },
    divider: {
        marginVertical: 8,
        backgroundColor: "gray",
    },
    emergencyButton: {
        marginTop: 16,
        backgroundColor: "#0070FF",
        marginBottom: 16
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    callButton: {
        marginTop: 10,
        backgroundColor: '#0070FF',
    },
    toggleButton: {
        marginTop: 10,
    },
});
