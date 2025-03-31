import { AuthState } from "./AuthContext";

type AuthActions = 
    | { type: 'signIn', payload: { userName: string, profileImage: string, role: string } } 
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
        userName: action.payload.userName,
        profileImage: action.payload.profileImage,
        role: action.payload.role 
    }
    case "logOut":
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        profileImage: undefined,
        role: undefined,
    };
    case "changeProfileImage": 
      return {
        ...state,
        profileImage: action.payload,
    };
    case "changeUserName": 
      return {
        ...state,
        userName: action.payload,
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