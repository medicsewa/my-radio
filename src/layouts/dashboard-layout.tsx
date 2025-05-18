import { Outlet } from "react-router";
import { APIProvider } from "@vis.gl/react-google-maps";

import Sidebar from "./sidebar";
import { GeolocationProvider } from "@/providers/geolocation-provider";
import { SidebarProvider } from "@/providers/sidebar-provider";
// import { useGeolocation } from "@/hooks/geolocation-hook";
// import { useEffect, useState } from "react";

// https://visgl.github.io/react-google-maps/examples/basic-map
const DashboardLayout = () => {
  return (
    <div className="flex flex-row h-screen relative">
      <SidebarProvider>
        <APIProvider apiKey="AIzaSyArMgHtIlZLJXSXN82wvCG9RTOe89HznQ0">
          <GeolocationProvider>
            <Sidebar />
            <div className="flex-1 flex flex-col items-center justify-center">
              <Outlet />
            </div>
          </GeolocationProvider>
        </APIProvider>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
