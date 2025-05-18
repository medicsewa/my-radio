import { NavLink } from "react-router";

const SettingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <NavLink
        to="/dashboard"
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-2xl text-gray-500"
      >
        Dashboard
      </NavLink>
    </div>
  );
};

export default SettingPage;
