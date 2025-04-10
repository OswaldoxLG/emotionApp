import { useState, useEffect } from "react";
import { emotionApi } from "../api/emotionApi";

interface BpmData {
  id: number;
  bpm: number;
  createdAt: string;
}

export const useBpmApi = (limit: number = 1) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<BpmData[]>([]);

  const apiUrl: string = 'api.luminux.xdn.com.mx';

  const loadBpmData = async () => {
    setIsLoading(true);
    try {
      const response = await emotionApi.get<BpmData>(`${apiUrl}/bpm`);
      
      const responseData = Array.isArray(response.data) ? response.data : [response.data];
      const sliced = responseData.slice(-limit);

      const normalized = sliced.map((item: BpmData) => ({
        id: item.id,
        bpm: item.bpm,
        createdAt: item.createdAt,
      }));

      setData(normalized);
    } catch (error) {
      console.error('Error BPM data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadBpmData();
  }, [limit]);

  return { data, isLoading, loadBpmData };
};