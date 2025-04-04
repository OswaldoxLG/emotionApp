import React, { createContext, useReducer, ReactNode } from 'react';
import { authReducer } from './authReducer';

//Definir estructura del context
export interface AuthState {
  isLoggedIn:     boolean;
  userName:       string | undefined;
  profileImage:   string | undefined;
  role:           string | undefined;
  id_user:        number | string | undefined;
}

//Definición del estado inicial
export const AuthInitialState: AuthState = {
  isLoggedIn:     false,
  userName:       undefined,
  profileImage:   undefined,
  role:           undefined,
  id_user:        undefined,
}

//Exportacion de metodos y atributos
export interface AuthContextProps{
  authState:      AuthState;
  signIn:         ( userName: string, profileImage: string, role: string, id_user: number|string) => void;
  logOut:         () => void;
  changeUserName: ( userName: string ) => void;
  changeProfileImage: ( sourceImage: string ) => void;
}

//Creación de context
export const AuthContext = createContext( {} as AuthContextProps );

//creacion de provider
export const AuthProvider = ( { children }: { children: ReactNode} ) => {

  //reducer
  const [ authState, dispatch ] = useReducer( authReducer, AuthInitialState );

  const signIn = (userName: string, profileImage: string, role: string, id_user: number|string) => {
    dispatch({ 
      type: "signIn", 
      payload: { userName, profileImage, role, id_user } 
    });
  };

  const logOut = () => dispatch( { type: "logOut" } );

  const changeProfileImage = ( sourceImage: string ) => {
    dispatch( { type: "changeProfileImage", payload: sourceImage } );
  }

  const changeUserName = ( userName: string ) => {
    dispatch( { type: "changeUserName", payload: userName } );
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        changeProfileImage,
        changeUserName,
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}