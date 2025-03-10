import { useTranslation } from "react-i18next";

export const useFirstAidData = () => {
  const { t } = useTranslation();

  return [
    { id: 1, title: t("FirstAidHomeData.AMPUTATIONS"), src: require("../assets/firstAid/amputations.webp"), screen: "Amputations" },
    { id: 2, title: t("FirstAidHomeData.ALLERGIES_ANAPHYLAXIS"), src: require("../assets/firstAid/allergies_anaphylaxis.webp"), screen: "AllergiesAnaphylaxis"  },
    { id: 3, title: t("FirstAidHomeData.ASTHMA"), src: require("../assets/firstAid/asthma.webp"), screen: "Asthma"  },
    { id: 4, title: t("FirstAidHomeData.BLEEDING"), src: require("../assets/firstAid/bleeding.webp"), screen: "Bleeding" },
    { id: 5, title: t("FirstAidHomeData.BITES_STINGS_BEES_WASPS_HORNETS_ANTS"), src: require("../assets/firstAid/bee_stings.webp"), screen: "BleedingScreen" },
    { id: 6, title: t("FirstAidHomeData.BITES_STINGS_RED_BACK_OTHER_SPIDERS"), src: require("../assets/firstAid/spider_bites.webp") },
    { id: 7, title: t("FirstAidHomeData.BITES_STINGS_SNAKE_FUNNEL_WEB"), src: require("../assets/firstAid/snake_bite.webp") },
    { id: 8, title: t("FirstAidHomeData.BITES_STINGS_TICK"), src: require("../assets/firstAid/tick_bite.webp") },
    { id: 9, title: t("FirstAidHomeData.BROKEN_BONE_FRACTURE"), src: require("../assets/firstAid/fracture.webp"), screen :"BrokenBoneFacture" },
    { id: 10, title: t("FirstAidHomeData.BURNS_CHEMICAL"), src: require("../assets/firstAid/chemical_burn.webp") },
    { id: 11, title: t("FirstAidHomeData.BURNS_FIRE_STOVE_STEAM_SUNBURN"), src: require("../assets/firstAid/fire_burn.webp") },
    { id: 12, title: t("FirstAidHomeData.CHOKING"), src: require("../assets/firstAid/choking.webp") },
    { id: 13, title: t("FirstAidHomeData.CPR_BASIC_LIFE_SUPPORT"), src: require("../assets/firstAid/cpr.webp") },
    { id: 14, title: t("FirstAidHomeData.DIABETIC_EMERGENCY"), src: require("../assets/firstAid/diabetic_emergency.webp") },
    { id: 15, title: t("FirstAidHomeData.EXPOSURE_COLD_HYPOTHERMIA"), src: require("../assets/firstAid/hypothermia.webp") },
    { id: 16, title: t("FirstAidHomeData.EXPOSURE_HEAT_HYPERTHERMIA"), src: require("../assets/firstAid/hyperthermia.webp") },
    { id: 17, title: t("FirstAidHomeData.EXPOSURE_HEAT_STROKE"), src: require("../assets/firstAid/heat_stroke.webp") },
    { id: 18, title: t("FirstAidHomeData.FOREIGN_BODY_EYE"), src: require("../assets/firstAid/foreign_body_eye.webp") },
    { id: 19, title: t("FirstAidHomeData.HEAD_INJURY"), src: require("../assets/firstAid/head_injury.webp") },
    { id: 20, title: t("FirstAidHomeData.HEART_ATTACK"), src: require("../assets/firstAid/heart_attack.webp") },
    { id: 21, title: t("FirstAidHomeData.MENINGITIS"), src: require("../assets/firstAid/meningitis.webp") },
    { id: 22, title: t("FirstAidHomeData.MINOR_WOUNDS"), src: require("../assets/firstAid/minor_wounds.webp") },
    { id: 23, title: t("FirstAidHomeData.NOSE_BLEED"), src: require("../assets/firstAid/nose_bleed.webp"), screen:"NoseBleed" },
    { id: 24, title: t("FirstAidHomeData.POISONS"), src: require("../assets/firstAid/poisons.webp") },
    { id: 25, title: t("FirstAidHomeData.RECOVERY_POSITION"), src: require("../assets/firstAid/recovery_position.webp") },
    { id: 26, title: t("FirstAidHomeData.SEIZURES"), src: require("../assets/firstAid/seizures.webp") },
    { id: 27, title: t("FirstAidHomeData.SHOCK"), src: require("../assets/firstAid/shock.webp") },
    { id: 28, title: t("FirstAidHomeData.STRAINS_SPRAINS_BRUISES"), src: require("../assets/firstAid/sprains_strains.webp"), screen:"StrainsSprainsAndBruises" },
    { id: 29, title: t("FirstAidHomeData.STROKE"), src: require("../assets/firstAid/stroke.webp"), screen:"Stroke" },
    { id: 30, title: t("FirstAidHomeData.VITAL_SIGNS"), src: require("../assets/firstAid/vital_signs.webp"), screen:"VitalSign" }
  ];
};
