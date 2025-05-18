import { Route, Routes } from "react-router";
import HomePage from "./pages/home.page";
import DashboardLayout from "./layouts/dashboard-layout";
import DashboardPage from "./pages/dashboard/index.page";
import MonitorPage from "./pages/dashboard/monitor.page";
import SettingPage from "./pages/dashboard/setting.page";
import NotificationPage from "./pages/dashboard/notification.page";
import VehiclesPage from "./pages/dashboard/vehicles/index.page";

const TrackerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="vehicles" element={<VehiclesPage />} />
        <Route path="monitor" element={<MonitorPage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="notifications" element={<NotificationPage />} />
      </Route>
    </Routes>
  );
};
export default TrackerRoutes;
