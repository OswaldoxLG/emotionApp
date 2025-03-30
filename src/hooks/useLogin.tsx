import { useReducer, useState, useEffect, useContext } from "react";
import { emotionApi } from "../api/emotionApi";
import { LoginResponse } from "../interfaces/userInterfaces";
import { AuthContext } from "../context/AuthContext";

export interface LoginData{
  email: string;
  password: string;
}

const initialLoginData: LoginData = {
  email: '',
  password: ''
}

type Action = { type: 'handleInputChange', payload: { fieldName: keyof LoginData, value: string } }

const dataReducer = ( state: LoginData, action: Action ) => {
  switch( action.type ){
    case 'handleInputChange':
      return{
        ...state,
        [ action.payload.fieldName ] : action.payload.value
      };
      default:
        return{
          ...state
        };
  }
}

export const useLogin = () => {

  const [ loading, setLoading ] = useState<boolean>(true);
  const [ state, dispatch] = useReducer( dataReducer, initialLoginData);
  const [ request, setRequest] = useState<LoginResponse>();
  const { signIn, changeUserName, changeProfileImage, changeRole} = useContext( AuthContext );


  const handleInputChange = ( fieldName: keyof  LoginData, value: string) => {
    dispatch( { type: "handleInputChange", payload: { fieldName, value}})
  }

  const handleLogin = async () => {
    setLoading(true);
    const apiUrl = 'http://192.168.1.4:3000/api/v1/usuario/login';

    const dataBody = {
      email: state.email,
      password: state.password
    }

    try{
      const response = await emotionApi.post<LoginResponse>(apiUrl, dataBody);

      ( response.data !== false) && ( () => {
        signIn();
        changeProfileImage( response.data.image);
        changeUserName( response.data.username );
        changeRole( response.data.rol );
        setRequest( response.data );
      })()
    }catch(error){
      console.log(error);
      setRequest(false);
    }
    setLoading(false);
  }


  return { 
    loading, 
    state, 
    handleLogin, 
    handleInputChange, 
    request 
  };
}

