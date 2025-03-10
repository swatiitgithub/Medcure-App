import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

const StrainsSprainsAndBruises = () => {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t('strains_sprains_bruises.title')}</Text>
      <Text style={styles.subtitle}>{t('strains_sprains_bruises.management')}</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• {t('strains_sprains_bruises.steps.rest_patient')}</Text>
        <Text style={styles.listItem}>• {t('strains_sprains_bruises.steps.ice_application')}</Text>
        <Text style={styles.listItem}>• {t('strains_sprains_bruises.steps.compression_bandage')}</Text>
        <Text style={styles.listItem}>• {t('strains_sprains_bruises.steps.elevate_injured_part')}</Text>
        <Text style={styles.listItem}>• {t('strains_sprains_bruises.steps.refer_medical_practitioner')}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 15,
  },
  listContainer: {
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export default StrainsSprainsAndBruises;