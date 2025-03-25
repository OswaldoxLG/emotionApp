import { useEffect, useState } from "react";
import { emotionApi } from "../api/emotionApi";
import { UsuarioResponse } from "../interfaces/usuarioInterfaces";
import { FormUsuarioData } from "./useFormUsuario";

export const useUsuarioApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listUsuario, setListUsuario] = useState<UsuarioResponse>({} as UsuarioResponse);

  const apiUrl: string = 'http://192.168.1.2:3000/api/v1/usuario';

  const loadUsuarios = async () => {
    setIsLoading(true);
    const response = await emotionApi.get<UsuarioResponse>(apiUrl);
    setListUsuario(response.data);
    setIsLoading(false);
  }

  const createUsuario = async (data: FormUsuarioData) => {
    console.log(data);
    const dataBody = {
      username: data.username,
      nombre: data.nombre,
      app: data.app,
      apm: data.apm,
      email: data.email,
      pass: data.pass,
      sexo: data.sexo,
      fecha_nac: data.fecha_nac,
      telefono: data.telefono,
      rol: data.rol,
      imagenPerfil: data.imagenPerfil
    }
    await emotionApi.post( apiUrl, dataBody );
  }

  const updateUsuario = async (data: FormUsuarioData) => {
    const dataBody = {
      username: data.username,
      nombre: data.nombre,
      app: data.app,
      apm: data.apm,
      email: data.email,
      pass: data.pass,
      sexo: data.sexo,
      fecha_nac: data.fecha_nac,
      telefono: data.telefono,
      rol: data.rol,
      imagenPerfil: data.imagenPerfil
    }

    //si el password no esta vacio, se agrega al objeto dataBody
    const dataPass = 
      ( data.pass !== '' ) 
      ? { ...dataBody, pass: data.pass } 
      : dataBody;

    await emotionApi.patch( apiUrl + `/${data.id_usuario}`, dataPass );
  }

  const deleteUsuario = async (data: FormUsuarioData) => {
    await emotionApi.delete( apiUrl + `/${data.id_usuario}` );
  }

  useEffect(() => {
    loadUsuarios();
  }, []);

  return {
    isLoading,
    listUsuario,
    loadUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
  }
}

