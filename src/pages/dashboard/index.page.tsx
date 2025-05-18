import BusIcon from "@/components/icons/ambulance-icon copy 3";

const DashboardPage = () => {
  return (
    <div className="flex flex-col h-screen w-full p-8 space-y-4">
      <div className="w-full">
        <h1 className="text-2xl font-bold">iTrack</h1>
      </div>
      <div className="w-full pt-8 grid grid-cols-12 gap-4">
        <div className="col-span-6 grid grid-cols-2 gap-4">
          <div>
            <div className="h-[152px] bg-gray-50 rounded-2xl flex flex-col">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center space-x-2">
                  <BusIcon className="size-5 text-blue-900" />
                  <h2 className="font-semibold text-blue-900">
                    Active Vehicles
                  </h2>
                </div>
                <span className=" text-green-700 text-sm">+10%</span>
              </div>
              <div className="flex items-center justify-center h-full">
                <h1 className="text-4xl font-bold">1,234</h1>
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                {/* <span className="text-gray-500">Last 30 days</span> */}
                {/* <span className="text-gray-500">+10%</span> */}
              </div>
            </div>
          </div>
          <div>
            <div className="h-[152px] bg-gray-50 rounded-2xl"></div>
          </div>
          <div>
            <div className="h-[152px] bg-gray-50 rounded-2xl"></div>
          </div>
          <div>
            <div className="h-[152px] bg-gray-50 rounded-2xl"></div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="h-[320px] bg-gray-50 rounded-2xl"></div>
        </div>
        <div className="col-span-3">
          <div className="h-[320px] bg-gray-50 rounded-2xl"></div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-6 grid grid-cols-2 gap-4">
          <div>
            <div className="h-[152px] bg-gray-50 rounded-2xl"></div>
          </div>
          <div>
            <div className="h-[152px] bg-gray-50 rounded-2xl"></div>
          </div>
          <div>
            <div className="h-[152px] bg-gray-50 rounded-2xl"></div>
          </div>
          <div>
            <div className="h-[152px] bg-gray-50 rounded-2xl"></div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="h-[320px] bg-gray-50 rounded-2xl"></div>
        </div>
        <div className="col-span-3">
          <div className="h-[320px] bg-gray-50 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
