import { Action } from 'redux';
import { Authenticate } from './Authenticate.interface';
import { ELoginType } from '../enums/Types';

const makeAction = <T extends ELoginType, P>(type: T) => (action: P) => {
  return {
    type,
    action
  };
};

export interface GetOAuthUsers extends Action {
  type: ELoginType.GETOAUTH_USERS;
  oauthUsers: Authenticate[];
}

export const AuthenticateUser = makeAction<ELoginType.AUTHENTICATE_USER, boolean>(ELoginType.AUTHENTICATE_USER);

interface IStringMap<T> {
  [key: string]: T;
}
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
  AuthenticateUser
};


export type ILoginType = IActionUnion<typeof actions>;