import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type RouteParams = {
  condition: string;
};

const Unconscious = () => {
  const { t } = useTranslation();
  const route = useRoute();
  const { condition } = route.params as RouteParams;
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  // Get the image dynamically based on condition
  const getConditionImage = () => {
    try {
      return require(`../../assets/firstAid/unconsciousness.webp`);
     // return require(`../../assets/firstAid/${condition.toLowerCase()}.webp`);
    } catch {
      return null;
    }
  };

  // Get management steps based on condition type
  const getManagementSteps = () => {
    const steps = [];
    let index = 1;
    
    // Try different possible translation paths
    const possiblePaths = [
      `${condition}.management.unconscious.uncon`,
      `${condition}.unconscious.steps.step`,
      `${condition}.management.steps.unconscious.`
    ];

    for (const basePath of possiblePaths) {
      while (true) {
        const step = t(`${basePath}${index}`);
        if (step === `${basePath}${index}`) break;
        steps.push(step);
        index++;
      }
      if (steps.length > 0) break;
    }

    return steps;
  };

  const steps = getManagementSteps();
  const conditionImage = getConditionImage();

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      {conditionImage && (
        <Image source={conditionImage} style={styles.image} />
      )}
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#333' }]}>
          {t(`${condition}.title`)}
        </Text>
        <Text style={[styles.subtitle, { color: isDarkMode ? '#ccc' : '#666' }]}>
          {t('common.unconsciousManagement', 'Management for Unconscious Patient')}
        </Text>
        
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <View 
              key={index} 
              style={[
                styles.stepContainer, 
                { backgroundColor: isDarkMode ? '#222' : '#f8f8f8' }
              ]}
            >
              <Text style={styles.stepNumber}>{index + 1}</Text>
              <Text style={[styles.stepText, { color: isDarkMode ? '#fff' : '#333' }]}>
                {step}
              </Text>
            </View>
          ))
        ) : (
          <Text style={[styles.noSteps, { color: isDarkMode ? '#fff' : '#666' }]}>
            {t('common.noStepsAvailable', 'No management steps available for this condition.')}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  stepNumber: {
    width: 24,
    height: 24,
    backgroundColor: '#e53935',
    color: '#fff',
    borderRadius: 12,
    textAlign: 'center',
    lineHeight: 24,
    marginRight: 12,
    fontWeight: 'bold',
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  noSteps: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default Unconscious;