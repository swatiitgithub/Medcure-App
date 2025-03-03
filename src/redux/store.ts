import { createStore, combineReducers } from "redux";
import languageReducer from "./reducers/languageReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  language: languageReducer,
  theme: themeReducer,
});

export const store = createStore(rootReducer);

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
