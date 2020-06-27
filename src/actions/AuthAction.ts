import { ELoginType } from '../enums/Types';

const makeAction = <T extends ELoginType, P>(type: T) => (action: P) => {
  return {
    type,
    action
  };
};

export const AuthenticateUser = makeAction<ELoginType.AUTHENTICATE_USER, boolean>(ELoginType.AUTHENTICATE_USER);

export const LogoutUser = makeAction<ELoginType.LOGOUT_USER, boolean>(ELoginType.LOGOUT_USER);

interface IStringMap<T> {
  [key: string]: T;
}
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
  AuthenticateUser,
  LogoutUser
};


export type IAuthType = IActionUnion<typeof actions>;