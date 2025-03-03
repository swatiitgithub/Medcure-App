import { CHANGE_LANGUAGE, LanguageActionTypes } from "../actions/languageActions";

interface LanguageState {
  isHindi: boolean;
}

const initialState: LanguageState = {
  isHindi: true,
};

const languageReducer = (state = initialState, action: LanguageActionTypes): LanguageState => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        isHindi: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
