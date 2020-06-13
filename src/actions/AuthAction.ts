import { ELoginType } from '../enums/Types';

const makeAction = <T extends ELoginType, P>(type: T) => (action: P) => {
  return {
    type,
    action
  };
};

export const AuthenticateUser = makeAction<ELoginType.AUTHENTICATE_USER, boolean>(ELoginType.AUTHENTICATE_USER);

interface IStringMap<T> {
  [key: string]: T;
}
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
  AuthenticateUser
};


export type IAuthType = IActionUnion<typeof actions>;