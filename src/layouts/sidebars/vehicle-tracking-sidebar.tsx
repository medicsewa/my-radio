import ArrowRightRoundIcon from "@/components/icons/arrow-right-round-icon";

const VehicleTrackingSidebar = () => {
  return (
    <div className="flex flex-col w-full p-4 bg-primary-500/20">
      <span>Vehicle Monitoring</span>
      <p className="text-xs text-gray-500 mt-2">
        Monitor the location and status of your vehicles in real-time.
      </p>

      <div className="mt-4">
        {/* Menu Items */}
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-gray-700 w-full p-1 flex items-center space-x-2">
              <ArrowRightRoundIcon className="size-4" />{" "}
              <span>Live Tracking</span>
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-gray-700 w-full p-1">
              Route History
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-gray-700 w-full p-1">
              Alerts
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-gray-700 w-full p-1">
              Settings
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleTrackingSidebar;
