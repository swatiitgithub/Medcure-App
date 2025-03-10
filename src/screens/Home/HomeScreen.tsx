import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Linking, TouchableOpacity, Image } from 'react-native';
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
import { useFirstAidData } from '../../constants/FirstAidData';
import { FlatList } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const firstAidData = useFirstAidData();

  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const NUM_COLUMNS = 2;

  const filterSearchData = firstAidData?.filter((item) =>
    t(item.title).toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>


      <ScrollView style={styles.scrollView}>
        {/* 📋 **FlatList with Header Components** */}
        <FlatList
          data={filterSearchData}
          keyExtractor={(item) => item.id.toString()}
          numColumns={NUM_COLUMNS}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: 16 }}

          ListHeaderComponent={
            <>
              {/* 🔍 **Search Bar** */}
              <View style={styles.searchContainer}>
                <Searchbar
                  placeholder={t("home.searchPlaceholder")}
                  onChangeText={onChangeSearch}
                  value={searchQuery}
                  style={styles.searchBar}
                  theme={{ colors: { text: isDarkMode ? "white" : "black" } }}
                />
              </View>

              {/* 🚑 **Emergency Card** */}
              <View style={styles.emergencyContainer}>
                <Card
                  style={[styles.emergencyCard, { backgroundColor: isDarkMode ? "#B00020" : "#ff5252" }]}
                >
                  <Card.Content>
                    <Title style={styles.emergencyTitle}>{t("home.emergencyTitle")}</Title>
                    <Paragraph style={styles.emergencyText}>{t("home.emergencyText")} 108</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <Button mode="contained" style={styles.emergencyButton} onPress={() => Linking.openURL("tel:108")}>
                      {t("home.callNow")}
                    </Button>
                  </Card.Actions>
                </Card>
              </View>

              {/* 📌 Title for Common Emergencies */}
              <Text style={[styles.sectionTitle, isDarkMode ? styles.darkText : styles.lightText]}>
                {t("home.commonEmergencies")}
              </Text>
            </>
          }

          renderItem={({ item }) => (
            <Card style={styles.gridCard}>
              <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                <Card.Cover source={item.src}  style={{ resizeMode: 'cover' }} />
              </TouchableOpacity>
              <Card.Content>
                <Title style={[styles.cardTitle, isDarkMode ? styles.darkText : styles.lightText]}>
                  {t(item.title)}
                </Title>
              </Card.Content>
            </Card>
          )}

          ListEmptyComponent={
            <Text style={styles.noResultsText}>{t("home.noResults")}</Text> 
          }
        />

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
  verticalScroll: {
    paddingHorizontal: 16
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  gridCard: {
    flex: 1,
    margin: 8,
    maxWidth: "46%",
  },
  horizontalCard: {
    width: 160,
    marginRight: 16,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight:"bold"
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
  noResultsText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
    color: "gray",
    fontWeight:'bold'
  },
});

export default HomeScreen;