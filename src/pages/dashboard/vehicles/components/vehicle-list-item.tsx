import dayjs from "dayjs";
import { useMemo } from "react";

type VehicleListItemProps = {
  vehicle: Vehicle;
};

const VehicleListItem = ({ vehicle }: VehicleListItemProps) => {
  const getAvailabilityClass = (availability: string) => {
    switch (availability) {
      case "available":
        return "text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-xs font-semibold";
      case "assigned":
        return "text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full text-xs font-semibold";
      case "out_of_order":
        return "text-red-700 bg-red-100 px-2 py-0.5 rounded-full text-xs font-semibold";
      default:
        return "";
    }
  };

  const availabilityClass = getAvailabilityClass(vehicle.availability);

  const availabilityText = useMemo(() => {
    switch (vehicle.availability) {
      case "available":
        return "Available";
      case "assigned":
        return "Assigned";
      case "out_of_order":
        return "Out of Order";
      default:
        return "";
    }
  }, [vehicle.availability]);

  return (
    <div className="col-span-3">
      <div className="card flex flex-col">
        <div className="vehicle-image h-42 rounded-2xl p-8">
          <img
            src={
              vehicle.image_url ||
              "https://www.pngplay.com/wp-content/uploads/7/White-Car-Transparent-Free-PNG.png"
            }
            alt="Vehicle"
            className="w-full h-full object-contain rounded-t-2xl"
          />
        </div>
        <div className="p-4 flex flex-col space-y-1">
          <div className="flex justify-between items-center pb-4">
            <div className="flex flex-col">
              <span>{vehicle.name}</span>
              <span className="text-xs text-gray-500">{vehicle.model}</span>
            </div>
            <span className={`${availabilityClass}`}>{availabilityText}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span>Orders Completed</span>
            <span className="text-gray-500">
              {vehicle.total_order_completed}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span>Last Online</span>
            <span className="text-gray-500">
              {dayjs(vehicle.last_checked_in_out).format("DD MMM, YYYY")}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span>Max Capacity</span>
            <span className="text-gray-500">
              {vehicle.max_capacity} persons
            </span>
          </div>
          {/* <div className="flex items-center justify-between text-xs">
            <span>Current Location</span>
            <span className="text-gray-500">Lagos, Nigeria</span>
          </div> */}
          <div className="flex items-center justify-between text-xs">
            <span>Driver</span>
            <span className="text-gray-500">{vehicle.driver_name}</span>
          </div>
          <div className="button mt-4">View Details</div>
        </div>
      </div>
    </div>
  );
};

export default VehicleListItem;
