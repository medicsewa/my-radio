import { GeolocationContext } from "@/hooks/geolocation-hook";
import React, { useState, useEffect } from "react";

export interface GeolocationProviderProps {
  children: React.ReactNode;
}

export const GeolocationProvider: React.FC<GeolocationProviderProps> = ({
  children,
}) => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setIsLoading(false);
    };

    const errorCallback = (err: GeolocationPositionError) => {
      setError(err.message);
      setIsLoading(false);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, errorCallback);
    } else {
      setError("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }
  }, []);

  return (
    <GeolocationContext.Provider
      value={{ latitude, longitude, isLoading, error }}
    >
      {children}
    </GeolocationContext.Provider>
  );
};
