import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, Image, View, FlatList } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BrokenBoneFacture = () => {
    const { t } = useTranslation();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    const managementSteps = [
        { id: '1', text: t('broken_bone_fracture.management') },
        { id: '2', text: t('broken_bone_fracture.management2') }
    ];

    const immobilisationSteps = [
        { id: 'general', text: t('broken_bone_fracture.immobilisation.general') },
        { id: 'fingerToe', text: t('broken_bone_fracture.immobilisation.fingerToe') },
        { id: 'leg', text: t('broken_bone_fracture.immobilisation.leg') }
    ];

    const fractureTypes = [
        { id: 'closed', text: t('broken_bone_fracture.fractureTypes.closed'), icon: 'bone' },
        { id: 'open', text: t('broken_bone_fracture.fractureTypes.open'), icon: 'cut' },
        { id: 'complicated', text: t('broken_bone_fracture.fractureTypes.complicated'), icon: 'exclamation-triangle' },
        { id: 'greenStick', text: t('broken_bone_fracture.fractureTypes.greenStick'), icon: 'child' }
    ];

    return (
        <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#F8F8F8" }]}>
            {/* Header Image */}
            <Image source={require('../../assets/BrokenBoneFacture/BrokenBoneFacture.webp')} style={styles.image} />

            {/* Title */}
            <Title style={[styles.title, { color: isDarkMode ? "#FFF" : "#000" }]}>
                {t('broken_bone_fracture.title')}
            </Title>

            {/* Management Steps */}
            <Card style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('Amputations.Management.title')}
                </Title>
                <FlatList
                    data={managementSteps}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <FontAwesome5 name="check-circle" size={18} color={isDarkMode ? "#00FF00" : "#008000"} />
                            <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                                {item.text}
                            </Paragraph>
                        </View>
                    )}
                />
            </Card>

            {/* Immobilisation Steps */}
            <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <FlatList
                    data={immobilisationSteps}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <FontAwesome5 name="band-aid" size={18} color={isDarkMode ? "#FFD700" : "#FF4500"} />
                            <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                                {item.text}
                            </Paragraph>
                        </View>
                    )}
                />
            </View>

            {/* Fracture Types */}
            <Card style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
                <Title style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>
                    {t('broken_bone_fracture.fractureTypes.title')}
                </Title>
                <FlatList
                    data={fractureTypes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <FontAwesome5 name={item.icon} size={18} color={isDarkMode ? "#FF6347" : "#D2691E"} />
                            <Paragraph style={[styles.listText, isDarkMode ? styles.darkText : styles.lightText]}>
                                {item.text}
                            </Paragraph>
                        </View>
                    )}
                />
            </Card>
        </ScrollView>
    );
};

export default BrokenBoneFacture;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 15,
        marginBottom: 16,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        marginBottom: 16,
        borderRadius: 15,
        padding: 15,
        elevation: 4,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    listText: {
        fontSize: 16,
        marginLeft: 10,
    },
    darkCard: {
        backgroundColor: '#1E1E1E',
    },
    lightCard: {
        backgroundColor: '#FFF',
    },
    darkText: {
        color: '#FFF',
    },
    lightText: {
        color: '#000',
    },
});
