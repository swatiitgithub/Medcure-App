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
import Burnfirestove from "../screens/HomeDataAllScreens/Burnsfirestove";
import Choking from "../screens/HomeDataAllScreens/Choking";
import EffectiveCoughing from "../screens/EffectiveChocking/EffectiveCoughing";
import IneffectiveChoking from "../screens/IneffectiveChocking/IneffectiveChoking";
import DiabeticEmergency from "../screens/HomeDataAllScreens/DiabeticEmergency";
import DiabeticCons from "../screens/DiabeticConcious/DiabeticCons";
import Diabeticuncons from "../screens/DiabeticConcious/Diabeticuncons";
import ExposureCold from "../screens/HomeDataAllScreens/ExposureCold";
import ExposuretoHeat from "../screens/HomeDataAllScreens/ExposuretoHeat";
import HeatStroke from "../screens/HeatStroke/HeatStroke";
import Heatconscious from "../screens/HeatConcious/Heatconscious";
import HeatUnconscious from "../screens/HeatConcious/HeatUnconscious";
import HyperthermiaConscious from "../screens/ExposureHeatHypercons/HyperthermiaConscious";
import HyperthermiaUnconscious from "../screens/ExposureHeatHypercons/HyperthermiaUnconscious";
import BrokenBone from "../screens/HomeDataAllScreens/BrokenBone";
import ForeignBodyEye from "../screens/HomeDataAllScreens/ForeignBodyinEye";
import Stroke from "../screens/HomeDataAllScreens/Stroke";
import VitalSign from "../screens/HomeDataAllScreens/VitalSign";
import NoseBleed from "../screens/HomeDataAllScreens/NoseBleed";
import StrainsSprainsAndBruises from "../screens/HomeDataAllScreens/StrainsSprainsAndBruises";
import HeadInjury from "../screens/HomeDataAllScreens/HeadInjury";
import Attack from "../screens/HomeDataAllScreens/Attack";
import Attackconcious from "../screens/Attackconsuncons/Attackconcious";
import Meningitis from "../screens/HomeDataAllScreens/Meningitis";
import Minorwound from "../screens/HomeDataAllScreens/Minorwound";
import Seizures from "../screens/HomeDataAllScreens/Seizures";
import Shock from "../screens/HomeDataAllScreens/Shock";
import Poisons from "../screens/HomeDataAllScreens/Poisons";
import PoisonsCons from "../screens/Poisonsconsuncons/Poisonscons";
import PoisonsUncons from "../screens/Poisonsconsuncons/PoisonsUncons";




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
      <Stack.Screen name="Burnfirestove" component={Burnfirestove} /> 
      <Stack.Screen name="Choking" component={Choking} /> 
      <Stack.Screen name="EffectiveCoughing" component={EffectiveCoughing} /> 
      <Stack.Screen name="IneffectiveChoking" component={IneffectiveChoking} /> 
      <Stack.Screen name="DiabeticEmergency" component={DiabeticEmergency} /> 
      <Stack.Screen name="DiabeticCons" component={DiabeticCons} /> 
      <Stack.Screen name="Diabeticuncons" component={Diabeticuncons} /> 
      <Stack.Screen name="ExposureCold" component={ExposureCold} /> 
      <Stack.Screen name="ExposuretoHeat" component={ExposuretoHeat} />
      <Stack.Screen name="HeatStroke" component={HeatStroke} />
      <Stack.Screen name="Heatconscious" component={Heatconscious} />
      <Stack.Screen name="HeatUnconscious" component={HeatUnconscious} />
      <Stack.Screen name="HyperthermiaConscious" component={HyperthermiaConscious} />
      <Stack.Screen name="HyperthermiaUnconscious" component={HyperthermiaUnconscious} />
      <Stack.Screen name="BrokenBone" component={BrokenBone} />
      <Stack.Screen name="ForeignBodyEye" component={ForeignBodyEye} />
      <Stack.Screen name="Stroke" component={Stroke} />
      <Stack.Screen name="VitalSign" component={VitalSign} />
      <Stack.Screen name="NoseBleed" component={NoseBleed} />
      <Stack.Screen name="StrainsSprainsAndBruises" component={StrainsSprainsAndBruises} />
      <Stack.Screen name="HeadInjury" component={HeadInjury} />
      <Stack.Screen name="Attack" component={Attack} />
      <Stack.Screen name="Attackconcious" component={Attackconcious} />
      <Stack.Screen name="Meningitis" component={Meningitis} />
      <Stack.Screen name="Minorwound" component={Minorwound} />
      <Stack.Screen name="Seizures" component={Seizures} />
      <Stack.Screen name="Shock" component={Shock} />
      <Stack.Screen name="Poisons" component={Poisons} />
      <Stack.Screen name="PoisonsCons" component={PoisonsCons} />
      <Stack.Screen name="PoisonsUncons" component={PoisonsUncons} />
    
   
     
    
      
    </Stack.Navigator>
  );
};
export default StackNavigator;