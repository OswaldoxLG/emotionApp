import { useState, useEffect } from "react";
import { emotionApi } from "../api/emotionApi";

interface GsrData {
  id_gsr: number;
  gsr: number;
  created_at: string;
}

export const useGsrApi = (limit: number = 1) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<GsrData[]>([]);

  const apiUrl: string = 'api.luminux.xdn.com.mx';

  const loadGsrData = async () => {
    setIsLoading(true);
    try {
      const response = await emotionApi.get<GsrData>(`${apiUrl}/gsr`);
      
      const responseData = Array.isArray(response.data) ? response.data : [response.data];
      const sliced = responseData.slice(-limit);

      const normalized = sliced.map((item: GsrData) => ({
        id_gsr: item.id_gsr,
        gsr: item.gsr,
        created_at: item.created_at,
      }));

      setData(normalized);
    } catch (error) {
      console.error('Error GSR data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadGsrData();
  }, [limit]);

  return { data, isLoading, loadGsrData };
};