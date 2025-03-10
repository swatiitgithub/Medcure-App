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
import Bees from "../screens/HomeDataAllScreens/Bees";
import snakebite from "../screens/SnakeBite/snakebite";
import Redback from "../screens/HomeDataAllScreens/Redback";
import Funnelspider from "../screens/HomeDataAllScreens/Funnelspider";
import FunnelCPR from "../screens/FunnelunconsCPR/FunnelCPR";
import RecoveryPosition from "../screens/RecoveryPosition/RecoverPosition";
import Bitetick from "../screens/HomeDataAllScreens/Bitestick";
import Burns from "../screens/HomeDataAllScreens/Burns";
import Burnsinformation from "../screens/BurnsInformation/Burnsinformation";



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
      <Stack.Screen name="Bees" component={Bees} /> 
      <Stack.Screen name="snakebite" component={snakebite} /> 
      <Stack.Screen name="Redback" component={Redback} /> 
      <Stack.Screen name="Funnelspider" component={Funnelspider} /> 
      <Stack.Screen name="FunnelCPR" component={FunnelCPR} /> 
      <Stack.Screen name="RecoveryPosition" component={RecoveryPosition} /> 
      <Stack.Screen name="Bitetick" component={Bitetick} /> 
      <Stack.Screen name="Burns" component={Burns} /> 
      <Stack.Screen name="Burnsinformation" component={Burnsinformation} /> 
   
     
    
      
    </Stack.Navigator>
  );
};
export default StackNavigator;