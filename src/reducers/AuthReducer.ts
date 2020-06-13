import { ELoginType } from '../enums/Types';
import { IAuthType } from "../actions/AuthAction";

const initState: IState = {
    validUser: false
};

export interface IState {
    validUser: boolean;
}

export const reducer = (state: IState = initState, action: IAuthType): IState => {
  switch (action.type) {
    case ELoginType.AUTHENTICATE_USER:
      return { ...state, validUser: action.action };

    default:
      return state;
  }
};
