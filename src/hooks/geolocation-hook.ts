import { createContext, useContext } from "react";

interface GeolocationContextType {
  latitude: number | null;
  longitude: number | null;
  isLoading: boolean;
  error: string | null;
}

export const GeolocationContext = createContext<GeolocationContextType>({
  latitude: null,
  longitude: null,
  isLoading: true,
  error: null,
});

export const useGeolocation = () => {
  return useContext(GeolocationContext);
};
