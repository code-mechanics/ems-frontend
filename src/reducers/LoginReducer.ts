import { ILoginType } from '../types/ActionTypes';
import { ELoginType } from '../enums/Types';

const initialState = {
  validUser: false
};
export default function reducer(state = initialState, action:ILoginType) {
  let st = state;
  switch (action.type) {
    case ELoginType.AUTHENTICATE_USER:
      {
        st = {
          ...state,
          validUser: true
        };
        break;
      }

    default:
      {
        return st;
      }
  }
  return st;
}