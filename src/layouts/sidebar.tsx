import BusIcon from "@/components/icons/arrow-right-round-icon";
import DashboardIcon from "@/components/icons/dashboard-icon";
import MapIcon from "@/components/icons/map-icon";
import NotificationIcon from "@/components/icons/notification-icon";
import SettingIcon from "@/components/icons/setting-icon";
import { useSidebar } from "@/hooks/sidebar-hook";
import { useCallback, useMemo } from "react";
import { NavLink } from "react-router";
import VehicleTrackingSidebar from "./sidebars/vehicle-tracking-sidebar";

const Sidebar = () => {
  // const nvigator = useNavigate();
  const { currentMenu, setCurrentMenu } = useSidebar();

  const isMenuExtended = useMemo(() => {
    return !["/dashboard", "/dashboard/vehicles"].includes(currentMenu);
  }, [currentMenu]);

  const ExtendedMenu = useCallback(() => {
    if (!isMenuExtended) return null;
    if (!currentMenu) return null;
    if (currentMenu === "/dashboard/monitor") return <VehicleTrackingSidebar />;
    return (
      <div className="absolute top-2 -left-[420px] w-[320px] group-hover:left-0 transition-all duration-200 clear-both">
        <div className="ml-[66px] w-full bg-white rounded-2xl p-8 group-hover:left-[60px] transition-all duration-200 clear-both shadow-lg border border-gray-200">
          <span>Title</span>
          <p className="clear-both">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            minima accusantium ex! Ullam et rerum, iure saepe nemo optio nisi
            veniam numquam quaerat doloribus, eveniet eligendi labore! Autem,
            nisi ad.
          </p>
        </div>
      </div>
    );
  }, [currentMenu, isMenuExtended]);

  const handleMenuClick = (menu: string) => {
    setCurrentMenu(menu);
  };

  return (
    <aside
      className={`flex-none transition-all duration-300 flex flex-row h-screen relative bg-transparent ${
        isMenuExtended ? "w-64" : "w-16"
      }`}
    >
      <div className="w-16 bg-gray-200 h-screen flex flex-col items-center justify-center">
        <div className="py-4 flex items-center justify-center relative group">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="absolute top-2 -left-[420px] w-[320px] group-hover:left-0 transition-all duration-200 clear-both">
            <div className="ml-[66px] w-full bg-white rounded-2xl p-8 group-hover:left-[60px] transition-all duration-200 clear-both shadow-lg border border-gray-200">
              <span>Title</span>
              <p className="clear-both">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione minima accusantium ex! Ullam et rerum, iure saepe nemo
                optio nisi veniam numquam quaerat doloribus, eveniet eligendi
                labore! Autem, nisi ad.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          {/* <div className="w-10 h-10 bg-gray-300 rounded-full mb-4"></div> */}
          <nav className="flex flex-col space-y-2 items-center">
            <NavLink
              to="/dashboard"
              className=""
              onClick={() => handleMenuClick("/dashboard")}
            >
              <DashboardIcon className="size-8 p-1" />
            </NavLink>
            <NavLink
              to="/dashboard/vehicles"
              className=""
              onClick={() => handleMenuClick("/dashboard/vehicles")}
            >
              <BusIcon className="size-8 p-1" />
            </NavLink>
            <NavLink
              to="/dashboard/monitor"
              className=""
              onClick={() => handleMenuClick("/dashboard/monitor")}
            >
              <MapIcon className="size-8 p-1" />
            </NavLink>
            <NavLink
              to="/dashboard/settings"
              className=""
              onClick={() => handleMenuClick("/dashboard/settings")}
            >
              <SettingIcon className="size-8 p-1" />
            </NavLink>
            <NavLink
              to="/dashboard/notifications"
              className=""
              onClick={() => handleMenuClick("/dashboard/notifications")}
            >
              <NotificationIcon className="size-8 p-1" />
            </NavLink>
          </nav>
        </div>
        <div className="flex-none h-16 flex items-center justify-center">
          <div className="size-8 bg-gray-400 rounded-full"></div>
        </div>
      </div>
      <ExtendedMenu />
    </aside>
  );
};
export default Sidebar;
