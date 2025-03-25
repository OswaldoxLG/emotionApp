import { useReducer } from "react";
import { useUsuarioApi } from "./useUsuarioApi";

export interface FormUsuarioData{
  id_usuario:       number | string;
  username:         string;
  nombre:           string;
  app:              string;
  apm:              string;
  email:            string;
  pass:             string;
  sexo:             string;
  fecha_nac:        string;
  telefono:         string;
  rol:              string;
  imagenPerfil:     string;
}

  //valor inicial del formulario
  export const InitialStateUserForm: FormUsuarioData = {
    id_usuario:    '',
    username:      '',
    nombre:        '',
    app:           '',
    apm:           '',
    email:         '',
    pass:          '',
    sexo:          '',
    fecha_nac:     '',
    telefono:      '',
    rol:           '',
    imagenPerfil:  '',
  };

  type Action =
    { type: 'handleInputChange', payload: { fieldName: keyof FormUsuarioData, value: string | number} };

  const formReducer = ( state: FormUsuarioData, action: Action) => {
    switch (action.type) {
      case 'handleInputChange':
        return {
          ...state,
          [ action.payload.fieldName ] : action.payload.value
        }
        default: 
          return {
            ...state
          }
    }
  }

  export const useFormUsuario = () => {
    const [ state, dispatch ] = useReducer( formReducer, InitialStateUserForm );

    const { createUsuario, updateUsuario, deleteUsuario } = useUsuarioApi();

    const handleInputChange = ( fieldName: keyof FormUsuarioData, value: string | number ) => {
      dispatch({ type: 'handleInputChange', payload: { fieldName, value }} )
    }

    const handleSubmit = () => {
      ( state.id_usuario !== '' )
      ? updateUsuario( state )
      : createUsuario( state );
    }

    const handleDelete = () => {
      deleteUsuario( state );
    }

    return {
      state,
      handleInputChange,
      handleSubmit,
      handleDelete
    }
  }