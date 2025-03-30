import { useReducer, useState, useEffect, useContext } from "react";
import { emotionApi } from "../api/emotionApi";
import { LoginResponse } from "../interfaces/userInterfaces";
import { AuthContext } from "../context/AuthContext";

export interface SignUpData{
  email: string;
  username: string;
  password: string;
  repeatPass: string;
}

const initialSignUpData: SignUpData = {
  email: '',
  username: '',
  password: '',
  repeatPass: ''
}

type Action = { type: 'handleInputChange', payload: { fieldName: keyof SignUpData, value: string } }

const dataReducer = ( state: SignUpData, action: Action ) => {
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

export const useSignUp = () => {

  const [ loading, setLoading ] = useState<boolean>(true);
  const [ state, dispatch] = useReducer( dataReducer, initialSignUpData);
  const [ request, setRequest] = useState<LoginResponse>();
  const { signIn, changeUserName, changeProfileImage, changeRole} = useContext( AuthContext );

  const handleInputChange = ( fieldName: keyof  SignUpData, value: string) => {
    dispatch( { type: "handleInputChange", payload: { fieldName, value}})
  }

  const handleSignUp = async () => {
    setLoading(true);

    if (state.password !== state.repeatPass) {
      alert('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    const apiUrl = 'http://192.168.1.4:3000/api/v1/usuario/signup';

    const dataBody = {
      email: state.email,
      username: state.username,
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
    handleSignUp, 
    handleInputChange, 
    request 
  };
}

