import { LogIn } from './types';

export const doLogin = (data) => {
  return {
    type: LogIn,
    payload: data
  }
}