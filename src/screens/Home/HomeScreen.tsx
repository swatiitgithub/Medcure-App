import React from 'react';
import { View, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Button,
  Text,
  Searchbar,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';

const HomeScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>


      <ScrollView style={styles.scrollView}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder={t("home.searchPlaceholder")}
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchBar}
            theme={{ colors: { text: isDarkMode ? "white" : "black" } }}
          />
        </View>

        <View style={styles.emergencyContainer}>
          <Card style={[styles.emergencyCard, { backgroundColor: isDarkMode ? "#B00020" : "#ff5252" }]}>
            <Card.Content>
              <Title style={styles.emergencyTitle}>{t("home.emergencyTitle")}</Title>
              <Paragraph style={styles.emergencyText}>
                {t("home.emergencyText")} 112
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button
                mode="contained"
                style={styles.emergencyButton}
                onPress={() => Linking.openURL("tel:112")}>
                {t("home.callNow")}
              </Button>
            </Card.Actions>
          </Card>
        </View>

        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>  {t("home.commonEmergencies")}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {emergencyItems.map((item, index) => (
            <Card key={index} style={styles.horizontalCard}>
              <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                <Card.Cover source={{ uri: item.image }} />
              </TouchableOpacity>
              <Card.Content>
                <Title style={[styles.cardTitle, isDarkMode ? styles.darkText : styles.lightText]}>{t(item.title)}</Title>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>

        <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}> {t("home.firstAidGuides")}</Text>
        <View style={styles.guidesContainer}>
          {guideItems.map((item, index) => (
            <Card key={index} style={styles.guideCard} onPress={() => navigation.navigate('FirstAid')}>
              <Card.Content style={styles.guideCardContent}>
                <Icon name={item.icon} size={24} color={isDarkMode ? "lightblue" : "#003CB3"} />
                <Title style={[styles.guideTitle, isDarkMode ? styles.darkText : styles.lightText]}>{t(item.title)}</Title>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  searchBar: {
    elevation: 0,
    borderRadius: 30,
  },
  emergencyContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  emergencyCard: {
    borderRadius: 12,
  },
  emergencyTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  emergencyText: {
    color: 'white',
  },
  emergencyButton: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  horizontalScroll: {
    paddingLeft: 16,
  },
  horizontalCard: {
    width: 160,
    marginRight: 16,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
  },
  guidesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  guideCard: {
    width: '46%',
    marginHorizontal: 8,
    marginBottom: 16,
  },
  guideCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guideTitle: {
    fontSize: 14,
    marginLeft: 8,
  },
  darkBackground: {
    backgroundColor: "#333",
  },
  lightBackground: {
    backgroundColor: "#f5f5f5",
  },
  darkText: {
    color: "white",
  },
  lightText: {
    color: "black",
  },
  darkHeader: {
    backgroundColor: "#222",
  },
  lightHeader: {
    backgroundColor: "#fff",
  },
});

const emergencyItems = [
  {
    title: 'home.cpr_guide',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    screen:'CPRGuide'
  },
  {
    title: 'home.heart_attack',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    screen: 'HeartAttack',
  },
];

const guideItems = [
  { title: "home.cuts_wounds", icon: "bandage" },
  { title: "home.burns", icon: "fire" },
  { title: "home.fractures", icon: "bone" },
];

export default HomeScreen;