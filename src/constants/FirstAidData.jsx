import { useTranslation } from "react-i18next";

export const useFirstAidData = () => {
  const { t } = useTranslation();

  return [
    { id: 1, title: t("FirstAidHomeData.AMPUTATIONS"),  screen: "Amputations" },
    { id: 2, title: t("FirstAidHomeData.ALLERGIES_ANAPHYLAXIS"),  screen: "AllergiesAnaphylaxis"  },
    { id: 3, title: t("FirstAidHomeData.ASTHMA"), src: require("../assets/firstAid/Asthma.webp"), screen: "Asthma"  },
    { id: 4, title: t("FirstAidHomeData.BLEEDING"),  screen: "Bleeding" },
    { id: 5, title: t("FirstAidHomeData.BITES_STINGS_BEES_WASPS_HORNETS_ANTS"),  screen: "Bees" },
    { id: 6, title: t("FirstAidHomeData.BITES_STINGS_RED_BACK_OTHER_SPIDERS"),  screen: "Redback" },
    { id: 7, title: t("FirstAidHomeData.BITES_STINGS_SNAKE_FUNNEL_WEB"),  screen: "Funnelspider" },
    { id: 8, title: t("FirstAidHomeData.BITES_STINGS_TICK"),  screen: "Bitetick" },
    { id: 9, title: t("FirstAidHomeData.BROKEN_BONE_FRACTURE"),  },
    { id: 10, title: t("FirstAidHomeData.BURNS_CHEMICAL"),  screen: "Burns" }, 
    { id: 11, title: t("FirstAidHomeData.BURNS_FIRE_STOVE_STEAM_SUNBURN"),  },
    { id: 12, title: t("FirstAidHomeData.CHOKING"),  },
    { id: 13, title: t("FirstAidHomeData.CPR_BASIC_LIFE_SUPPORT"),  },
    { id: 14, title: t("FirstAidHomeData.DIABETIC_EMERGENCY"),  },
    { id: 15, title: t("FirstAidHomeData.EXPOSURE_COLD_HYPOTHERMIA"), src: require("../assets/firstAid/cold.webp") },
    { id: 16, title: t("FirstAidHomeData.EXPOSURE_HEAT_HYPERTHERMIA"),  },
    { id: 17, title: t("FirstAidHomeData.EXPOSURE_HEAT_STROKE"), src: require("../assets/firstAid/Heat.webp") },
    { id: 18, title: t("FirstAidHomeData.FOREIGN_BODY_EYE"),  },
    { id: 19, title: t("FirstAidHomeData.HEAD_INJURY"), src: require("../assets/firstAid/head.webp") },
    { id: 20, title: t("FirstAidHomeData.HEART_ATTACK"), src: require("../assets/firstAid/Atak.webp") },
    { id: 21, title: t("FirstAidHomeData.MENINGITIS"),  },
    { id: 22, title: t("FirstAidHomeData.MINOR_WOUNDS"),  },
    { id: 23, title: t("FirstAidHomeData.NOSE_BLEED"),  },
    { id: 24, title: t("FirstAidHomeData.POISONS"),  },
    { id: 25, title: t("FirstAidHomeData.RECOVERY_POSITION"),  },
    { id: 26, title: t("FirstAidHomeData.SEIZURES"),  },
    { id: 27, title: t("FirstAidHomeData.SHOCK"),  },
    { id: 28, title: t("FirstAidHomeData.STRAINS_SPRAINS_BRUISES"),  },
    { id: 29, title: t("FirstAidHomeData.STROKE"),  },
    { id: 30, title: t("FirstAidHomeData.VITAL_SIGNS"),  }
  ];
};
