import { FETCH_DATA, LOADING_DATA } from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };

    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
