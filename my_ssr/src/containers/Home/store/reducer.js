import { CHANGE_LIST } from "./constants";

const defaultState = {
  name: 'sanyuan',
  newsList: []
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST:
      const newState = {
        ...state,
        newsList: action.list
      };
      return newState;
    default:
      return state;
  }
}