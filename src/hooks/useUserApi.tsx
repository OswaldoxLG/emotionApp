import { useEffect, useState } from "react";
import { emotionApi } from "../api/emotionApi";
import { UserResponse } from "../interfaces/userInterfaces";
import { FormUserData } from "./useFormUser";

export const useUserApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listUser, setListUser] = useState<UserResponse>({} as UserResponse);

  const apiUrl: string = 'http://192.168.0.195:3000/api/v1/user';

  const loadUsers = async () => {
    setIsLoading(true);
    const response = await emotionApi.get<UserResponse>(apiUrl);
    setListUser(response.data);
    setIsLoading(false);
  }

  const createUser = async (data: FormUserData) => {
    //console.log(data);
    const dataBody = {
      rol: data.rol,
      username: data.username,
      name: data.name,
      lastname: data.lastname,
      sex: data.sex,
      email: data.email,
      password: data.password,
      phone: data.phone,
      image: data.image
    }
    await emotionApi.post( apiUrl, dataBody );
  }

  const updateUser = async (data: FormUserData) => {
    console.log(data);
    const dataBody = {
      rol: data.rol,
      username: data.username,
      name: data.name,
      lastname: data.lastname,
      sex: data.sex,
      email: data.email,
      phone: data.phone,
      image: data.image
    }

    //si el password no esta vacio, se agrega al objeto dataBody
    const dataPass = 
      ( data.password !== '' ) 
      ? { ...dataBody, password: data.password } 
      : dataBody;

    await emotionApi.patch( apiUrl + `/${data.id_user}`, dataPass );
  }

  const deleteUser = async (data: FormUserData) => {
    await emotionApi.delete( apiUrl + `/${data.id_user}` );
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    isLoading,
    listUser,
    loadUsers,
    createUser,
    updateUser,
    deleteUser
  }
}

