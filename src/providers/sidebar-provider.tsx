import { SidebarContext, type SidebarContextValue } from "@/hooks/sidebar-hook";
import React, { useState } from "react";

export interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [currentMenu, setCurrentMenu] = useState<string>("/dashboard");

  const value: SidebarContextValue = {
    currentMenu,
    setCurrentMenu,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
