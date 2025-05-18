import { createContext, useContext } from "react";

export interface SidebarContextValue {
  currentMenu: string;
  setCurrentMenu: React.Dispatch<React.SetStateAction<string>>;
}

export const SidebarContext = createContext<SidebarContextValue>(
  {} as SidebarContextValue
);

export const useSidebar = () => {
  return useContext(SidebarContext);
};
