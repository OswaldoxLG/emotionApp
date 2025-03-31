import { useState, useEffect } from "react";
import { UserResponse } from "../interfaces/userInterfaces";
import { emotionApi } from "../api/emotionApi";

interface useUser{
  isLoading: boolean;
  userOne: UserResponse
}

export const useOneUser = ( id_user:number | string): useUser => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ userOne, setUser ] = useState<UserResponse>({} as UserResponse);

  const loadUser = async () => {
    try{
      setIsLoading(true);
      const response = await emotionApi.get<UserResponse[]>(`http://192.168.1.4:3000/api/v1/user/${id_user}`);
      if (response.data && response.data.length > 0){
        setUser(response.data[0]); //extrae el primer elemento del array
      }
    }catch(error){
      console.log(`error peticion por id: ${error}`)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    loadUser();
  },[]);

  return { isLoading, userOne}
}