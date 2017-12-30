import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

const FACEBOOK_TOKEN = 'fb_token';
const APP_ID = '180259855893478';

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem(FACEBOOK_TOKEN);
  if (token) {
    // Dispatch an action saying FB login is done
    dispatch(createLoginSuccess(token));
  } else {
    // Start up FB login process
    performFacebookLogin(dispatch);
  }
};

const performFacebookLogin = async dispatch => {
  let {type, token} = await Facebook.logInWithReadPermissionsAsync(APP_ID, {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({type: FACEBOOK_LOGIN_FAIL});
  }

  await AsyncStorage.setItem(FACEBOOK_TOKEN, token);
  dispatch(createLoginSuccess(token));
};

const createLoginSuccess = token => {
  return {
    type: FACEBOOK_LOGIN_SUCCESS,
    payload: token
  };
};