import { useReducer, useState, useEffect, useContext } from "react";
import { emotionApi } from "../api/emotionApi";
import { LoginResponse } from "../interfaces/userInterfaces";
import { AuthContext } from "../context/AuthContext";
import { Alert } from "react-native";

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

  const [ loading, setLoading ] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(true);
  const [ state, dispatch] = useReducer( dataReducer, initialSignUpData);
  const [ request, setRequest] = useState<LoginResponse>();
  const { signIn, changeUserName, changeProfileImage} = useContext( AuthContext );

  const handleInputChange = ( fieldName: keyof  SignUpData, value: string) => {
    dispatch( { type: "handleInputChange", payload: { fieldName, value}})
  }

  const validateFields = (): boolean => {
    if (!state.email) {
      Alert.alert('Campo vacío', 'El correo electrónico es requerido');
      return false;
    }
    if (!state.username) {
      Alert.alert('Campo vacío', 'El nombre de usuario es requerido');
      return false;
    }
    if (!state.password) {
      Alert.alert('Campo vacío', 'La contraseña es requerida');
      return false;
    }
    if (!state.repeatPass) {
      Alert.alert('Campo vacío', 'Debe confirmar la contraseña');
      return false;
    }
    if (state.password !== state.repeatPass) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    setLoading(true);
    setIsEditable(false);

    if (!validateFields()) {
      setLoading(false);
      setIsEditable(true);
      return;
    }

    const apiUrl = 'http://192.168.1.4:3000/api/v1/user/signUp/';

    const dataBody = {
      email: state.email,
      username: state.username,
      password: state.password
    }

    try {
      const response = await emotionApi.post<LoginResponse>(apiUrl, dataBody);

      if (response.data !== false) {
        signIn(response.data.username, response.data.image, response.data.rol, response.data.id_user);
        setRequest(response.data);
      } else {
        Alert.alert('Error', 'No se pudo crear la cuenta');
      }
    } catch(error) {
      console.log(error);
      Alert.alert('Error', 'Hubo un problema al crear la cuenta');
      setRequest(false);
    } finally {
      setLoading(false);
      setIsEditable(true);
    }
  }

  return { 
    loading, 
    isEditable,
    state, 
    handleSignUp, 
    handleInputChange, 
    request 
  };
}

