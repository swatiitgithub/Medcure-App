import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather";
import { drawerWidth, iconSize, spacing } from "../constants/Dimensions";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { changeLanguage } from "../redux/actions/languageActions";
import { toggleTheme } from "../redux/actions/themeActions";
import HomeScreen from "../screens/Home/HomeScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import { useTranslation } from "react-i18next";
import StackNavigator from "./StackNavigator";
import EmergencyPhoneNumber from "../screens/EmergencyPhoneNumber/EmergencyPhoneNumber";
import AimsofFirstAid from "../screens/AimsofFirstAid/AimsofFirstAid";
import PatientCare from "../screens/PatientCare/PatientCare";
import AmbulanceInfo from "../screens/AmbulanceInfo/AmbulanceInfo";
import AdrenalineAutoInjector from "../screens/AdrenalineAutoInjector/AdrenalineAutoInjector";
import Bandages from "../screens/Bandages/Bandages";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const isHindi = useSelector((state: RootState) => state.language.isHindi);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const toggleLanguage = () => {
    dispatch(changeLanguage(!isHindi));
  };

  const toggleThemeMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <View style={[styles.drawerContainer, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.projectTitle, isDarkMode ? styles.darkText : styles.lightText]}>{t('drawer.projectTitle')}</Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <AntDesign name="closecircleo" size={iconSize.lg} color={isDarkMode ? "white" : "black"} />
        </TouchableOpacity>
      </View>

      <DrawerContentScrollView style={[styles.container, isDarkMode ? styles.darkText : styles.lightText]}>
        <DrawerItem
          label={t('drawer.home')}
          icon={() => <AntDesign name="home" size={iconSize.lg} color={isDarkMode ? "white" : "green"} />}
          onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label={t('drawer.EmergencyPhoneNumbers')}
          icon={() => <MaterialIcons name="emergency" size={iconSize.lg} color={isDarkMode ? "red" : "red"} />}
          onPress={() => props.navigation.navigate("EmergencyPhoneNumber")}
        />
        <DrawerItem
          label={t('drawer.AimsofFirstAid')}
          icon={() => <MaterialIcons name="medical-information" size={iconSize.lg} color={isDarkMode ? "white" : "blue"} />}
          onPress={() => props.navigation.navigate("AimsofFirstAid")}
        />
        <DrawerItem
          label={t('drawer.PatientCare')}
          icon={() => <Fontisto name="bed-patient" size={iconSize.lg} color={isDarkMode ? "white" : "blue"} />}
          onPress={() => props.navigation.navigate("PatientCare")}
        />
        <DrawerItem
          label={t('drawer.InformationforwhencallinganAmbulance')}
          icon={() => <Fontisto name="ambulance" size={iconSize.lg} color={isDarkMode ? "red" : "red"} />}
          onPress={() => props.navigation.navigate("InformationforwhencallinganAmbulance")}
        />
        <DrawerItem
          label={t('drawer.HowtouseAdrenalineAutoInjector')}
          icon={() => <Fontisto name="injection-syringe" size={iconSize.lg} color={isDarkMode ? "white" : "blue"} />}
          onPress={() => props.navigation.navigate("HowtouseAdrenalineAutoInjector")}
        />
        <DrawerItem
          label={t('drawer.Bandagestypes')}
          icon={() => <Fontisto name="bandage" size={iconSize.lg} color={isDarkMode ? "white" : "gray"} />}
          onPress={() => props.navigation.navigate("Bandagestypes")}
        />
       {/*} <DrawerItem
          label={t('drawer.FirstAidCourses')}
          icon={() => <Fontisto name="discourse" size={iconSize.lg} color={isDarkMode ? "white" : "blue"} />}
          onPress={() => props.navigation.navigate("FirstAidCourses")}
        />*/}
      </DrawerContentScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.languageSwitchContainer}>
          <Text style={[styles.languageText, isDarkMode ? styles.darkText : styles.lightText]}>{isHindi ? "हिन्दी" : "English"}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isHindi ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleLanguage}
            value={isHindi}
          />
        </View>
        <TouchableOpacity style={[styles.themeButton, styles.languageSwitchContainer]} onPress={toggleThemeMode}>
          <Text style={[styles.themeText, isDarkMode ? styles.darkText : styles.lightText]}> {t('drawer.changeTheme')}</Text>
          <Feather name={isDarkMode ? "moon" : "sun"} size={iconSize.lg} color={isDarkMode ? "white" : "#222"} />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  const { t } = useTranslation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: "front",
        drawerStyle: {
          width: drawerWidth,
        },
        drawerActiveTintColor: "green",
        drawerActiveBackgroundColor: "red",
        drawerLabelStyle: {
          color: "white",
        },
      }}
    >
      <Drawer.Screen name="Home" component={StackNavigator} options={{ title: t('drawer.home') }} />
      <Drawer.Screen name="EmergencyPhoneNumber" component={EmergencyPhoneNumber} options={{ title: t('drawer.EmergencyPhoneNumbers') }} />
      <Drawer.Screen name="AimsofFirstAid" component={AimsofFirstAid} options={{ title: t('drawer.AimsofFirstAid') }} />
      <Drawer.Screen name="PatientCare" component={PatientCare} options={{ title: t('drawer.PatientCare') }} />
      <Drawer.Screen name="InformationforwhencallinganAmbulance" component={AmbulanceInfo} options={{ title: t('drawer.InformationforwhencallinganAmbulance') }} />
      <Drawer.Screen name="HowtouseAdrenalineAutoInjector" component={AdrenalineAutoInjector} options={{ title: t('drawer.HowtouseAdrenalineAutoInjector') }} />
      <Drawer.Screen name="Bandagestypes" component={Bandages} options={{ title: t('drawer.Bandagestypes') }} />
      <Drawer.Screen name="FirstAidCourses" component={SettingsScreen} options={{ title: t('drawer.FirstAidCourses') }} />
    </Drawer.Navigator>
  );
};
//Amputations
export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  container: {
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footerContainer: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  languageSwitchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  languageText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  themeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  themeText: {
    fontSize: 16,
  },
  darkBackground: {
    backgroundColor: "#333",
  },
  lightBackground: {
    backgroundColor: "#fff",
  },
  darkText: {
    color: "white",
  },
  lightText: {
    color: "black",
  },
});
