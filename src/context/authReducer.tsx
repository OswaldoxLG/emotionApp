import { AuthState } from "./AuthContext";

type AuthActions = 
    | { type: 'signIn' } 
    | { type: 'logOut' } 
    | { type: 'changeProfileImage', payload: string }
    | { type: 'changeUserName', payload: string }
    | { type: 'changeRole', payload: string }
export const authReducer = ( state: AuthState, action: AuthActions ) => {

  switch( action.type ){
    case "signIn":
      return {
        ...state,
        isLoggedIn: true,
        userName: "no_name_user_yet"
    }
    case "logOut":
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteImage: undefined,
        role: undefined,
    };
    case "changeProfileImage": 
      return {
        ...state,
        favoriteImage: action.payload,
    };
    case "changeUserName": 
      return {
        ...state,
        UserName: action.payload,
    };
    case "changeRole":
      return {
        ...state,
        role: action.payload,
      };
    default:
      return { ...state };
  }  
}