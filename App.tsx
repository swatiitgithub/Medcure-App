import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DrawerNavigator from "./src/navigations/CustomDrawerContent"; 
import i18n from "./src/localization/i18n";
import { useSelector } from "react-redux";
import { RootState } from "./src/redux/store"; 

const MainApp = () => {
  const isHindi = useSelector((state: RootState) => state.language.isHindi);
  const language = isHindi ? "hi" : "en";
  i18n.changeLanguage(language);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const App = () => {
  return (
    <Provider store={store}>  
      <MainApp /> 
    </Provider>
  );
};

export default App;
