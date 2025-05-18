/* eslint-disable @typescript-eslint/no-explicit-any */
// import Direction from "@/components/direction";
import { useGeolocation } from "@/hooks/geolocation-hook";
import { Map } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const MonitorPage = () => {
  const { latitude, longitude } = useGeolocation();
  const [coordinate, setCoodinate] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    if (latitude && longitude) {
      setCoodinate({ lat: latitude, lng: longitude });
    }
  }, [latitude, longitude]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={coordinate}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {/* <Direction /> */}
      </Map>
    </div>
  );
};

export default MonitorPage;
