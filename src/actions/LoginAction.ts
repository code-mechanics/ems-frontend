import axios from 'axios';
import { ELoginType } from '../enums/Types';
import { EMSUrl } from './ActionUrl';

export const Configs = {
    CONFIG: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  };

export function authUser() {
    return function (dispatch:any) {
        axios.get(EMSUrl.AUTHUSERS).then(response => {
            console.log(response.data);
            dispatch({
                type:
                    ELoginType.AUTHENTICATE_USER,
                    vaildUser: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    };
}