import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NoseBleed = () => {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t('nose_bleed.title')}</Text>
      <Text style={styles.subtitle}>{t('nose_bleed.treatment')}</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• {t('nose_bleed.apply_pressure')}</Text>
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

export default NoseBleed;