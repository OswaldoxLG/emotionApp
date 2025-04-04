import { AuthState } from "./AuthContext";

type AuthActions = 
    | { type: 'signIn', payload: { userName: string, profileImage: string, role: string, id_user: string|number } } 
    | { type: 'logOut' } 
    | { type: 'changeProfileImage', payload: string }
    | { type: 'changeUserName', payload: string }
export const authReducer = ( state: AuthState, action: AuthActions ) => {

  switch( action.type ){
    case "signIn":
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload.userName,
        profileImage: action.payload.profileImage,
        role: action.payload.role,
        id_user: action.payload.id_user
    }
    case "logOut":
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        profileImage: undefined,
        role: undefined,
        id_user: undefined,
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
    default:
      return { ...state };
  }  
}