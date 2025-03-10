import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import HeartAttackScreen from "../screens/HeartAttack/HeartAttack";
import { useTranslation } from "react-i18next";
import CPRGuide from "../screens/CPRGuide/CPRGuide";
import EmergencyPhoneNumber from "../screens/EmergencyPhoneNumber/EmergencyPhoneNumber";
import AimsofFirstAid from "../screens/AimsofFirstAid/AimsofFirstAid";
import PatientCare from "../screens/PatientCare/PatientCare";
import AmbulanceInfo from "../screens/AmbulanceInfo/AmbulanceInfo";
import AdrenalineAutoInjector from "../screens/AdrenalineAutoInjector/AdrenalineAutoInjector";
import Bandages from "../screens/Bandages/Bandages";
import Amputations from "../screens/HomeDataAllScreens/Amputations";
import AllergiesAnaphylaxis from "../screens/HomeDataAllScreens/AllergiesAnaphylaxis";
import Conscious from "../screens/Conscious/Conscious";
import Unconscious from "../screens/Unconscious/Unconscious";
import Asthma from "../screens/HomeDataAllScreens/Asthma";
import Bleeding from "../screens/HomeDataAllScreens/Bleeding";
import VitalSign from "../screens/HomeDataAllScreens/VitalSign";
import BrokenBoneFacture from "../screens/HomeDataAllScreens/BrokenBoneFacture";
import Stroke from "../screens/HomeDataAllScreens/Stroke";
import StrainsSprainsAndBruises from "../screens/HomeDataAllScreens/StrainsSprainsAndBruises";
import NoseBleed from "../screens/HomeDataAllScreens/NoseBleed";

const Stack = createStackNavigator<any>();

const StackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HeartAttack" component={HeartAttackScreen}  />
      <Stack.Screen name="CPRGuide" component={CPRGuide}  />
      <Stack.Screen name="EmergencyPhoneNumber" component={EmergencyPhoneNumber} /> 
      <Stack.Screen name="AimsofFirstAid" component={AimsofFirstAid} /> 
      <Stack.Screen name="PatientCare" component={PatientCare} /> 
      <Stack.Screen name="InformationforwhencallinganAmbulance" component={AmbulanceInfo} /> 
      <Stack.Screen name="HowtouseAdrenalineAutoInjector" component={AdrenalineAutoInjector} /> 
      <Stack.Screen name="Bandagestypes" component={Bandages} /> 
      <Stack.Screen name="Amputations" component={Amputations} /> 
      <Stack.Screen name="AllergiesAnaphylaxis" component={AllergiesAnaphylaxis} /> 
      <Stack.Screen name="Conscious" component={Conscious} /> 
      <Stack.Screen name="Unconscious" component={Unconscious} /> 
      <Stack.Screen name="Asthma" component={Asthma} /> 
      <Stack.Screen name="Bleeding" component={Bleeding} /> 
      <Stack.Screen name="VitalSign" component={VitalSign} /> 
      <Stack.Screen name="BrokenBoneFacture" component={BrokenBoneFacture} /> 
      <Stack.Screen name="Stroke" component={Stroke} /> 
      <Stack.Screen name="StrainsSprainsAndBruises" component={StrainsSprainsAndBruises} /> 
      <Stack.Screen name="NoseBleed" component={NoseBleed} /> 
    </Stack.Navigator>
  );
};
export default StackNavigator;