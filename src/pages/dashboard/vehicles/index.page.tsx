import BusIcon from "@/components/icons/ambulance-icon copy 3";

const VehiclesPage = () => {
  return (
    <div className="flex flex-col h-screen w-full p-8 space-y-4">
      <div className="w-full">
        <h1 className="text-2xl font-bold">Vehicles</h1>
        <span className="text-xs text-gray-500">
          Manage your vehicles and track their performance.
        </span>
      </div>
      <div className="w-full pt-8 flex flex-col">
        <div className="flex space-x-8 text-xs border-b font-medium">
          <div className="pb-1 border-b-1 border-indigo-500 text-indigo-500">
            All Vehicles
            <span className="text-[8px] size-4 rounded-full border-1 p-0.5 ml-2">
              12
            </span>
          </div>
          <div className="pb-1">Active</div>
          <div className="pb-1">Inactive</div>
          <div className="pb-1">Service Needed</div>
        </div>
      </div>
      <div className="w-full pt-8 grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <div className="bg-gray-50 rounded-2xl flex flex-col pb-2">
            <div className="vehicle-image h-42 bg-gray-100 rounded-2xl"></div>
            <span className="p-2">Small Pickup Van</span>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Last Online</span>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Max Capacity</span>
              <span className="text-gray-500">50 persons</span>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Current Location</span>
              <span className="text-gray-500">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Last Service</span>
              <span className="text-gray-500">1 month ago</span>
            </div>
            <div className="mt-2 mx-2 text-center text-xs border border-gray-300 rounded-lg py-1">
              View Details
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-gray-50 rounded-2xl flex flex-col pb-2">
            <div className="vehicle-image h-42 bg-gray-100 rounded-2xl"></div>
            <span className="p-2">Small Pickup Van</span>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Last Online</span>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Max Capacity</span>
              <span className="text-gray-500">50 persons</span>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Current Location</span>
              <span className="text-gray-500">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Last Service</span>
              <span className="text-gray-500">1 month ago</span>
            </div>
            <div className="mt-2 mx-2 text-center text-xs border border-gray-300 rounded-lg py-1">
              View Details
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-gray-50 rounded-2xl flex flex-col pb-2">
            <div className="vehicle-image h-42 bg-gray-100 rounded-2xl"></div>
            <span className="p-2">Small Pickup Van</span>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Last Online</span>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Max Capacity</span>
              <span className="text-gray-500">50 persons</span>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Current Location</span>
              <span className="text-gray-500">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center justify-between px-2 text-xs font-medium">
              <span>Last Service</span>
              <span className="text-gray-500">1 month ago</span>
            </div>
            <div className="mt-2 mx-2 text-center text-xs border border-gray-300 rounded-lg py-1">
              View Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehiclesPage;
