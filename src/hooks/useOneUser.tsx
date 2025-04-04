import { useState, useEffect } from "react";
import { UserResponse } from "../interfaces/userInterfaces";
import { emotionApi } from "../api/emotionApi";
import { FormUserData } from "./useFormOneUser";

interface OneUser {
  id_user: number | string | undefined;
}

export const useOneUser = ({ id_user }: OneUser) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userOne, setUserOne] = useState<UserResponse | null>(null);

  const apiUrl: string = `http://192.168.1.3:3000/api/v1/user/`;

  const loadUser = async () => {
    try {
      setIsLoading(true);
      const response = await emotionApi.get<UserResponse[]>(apiUrl + id_user);
      if (response.data && response.data.length > 0) {
        setUserOne(response.data[0]); //extrae el primer elemento del array
      }
    } catch (error) {
      console.log(`error peticion por id: ${error}`);
    }
    setIsLoading(false);
  };

  const updateUser = async (data: FormUserData) => {
    //console.log(data);
    const dataBody = {
      username: data.username,
      name: data.name,
      lastname: data.lastname,
      sex: data.sex,
      email: data.email,
      phone: data.phone,
      image: data.image,
    };

    const dataPass =
      data.password !== ""
        ? { ...dataBody, password: data.password }
        : dataBody;

    await emotionApi.patch<UserResponse>(apiUrl + data.id_user, dataPass);
    
    await loadUser();
  };

  useEffect(() => {
    loadUser();
  }, [id_user]);

  return { isLoading, userOne, updateUser, loadUser};
};
