import React, { useState, useEffect} from "react";
import { emotionApi } from "../api/emotionApi";

type SensorType = 'bpm' | 'gsr';

interface SensorData {
  id: number;
  value: number;
  createdAt: string;
} 

export const useSensorApi = (sensorType: SensorType, limit: number = 1) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<SensorData[]>([]);

  const apiUrl : string = 'https://api.luminux.xdn.com.mx';

  const loadData = async () => {
    try {
      setIsLoading(true);
      
      const response = await emotionApi.get<SensorData>(`${apiUrl}/${sensorType}`);
      
      const responseData = Array.isArray(response.data) ? response.data : [response.data];
      
      const sliced = responseData.slice(-limit);
      
      const normalized = sliced.map((item: any) => ({
        id: item.id || item.id_gsr,
        value: item.bpm ?? item.gsr,
        createdAt: item.createdAt || item.created_at,
      }));
      setData(normalized);
    } catch (error) {
      console.error('Error en la petición:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [sensorType, limit]);

  return { data, isLoading, loadData };
};
