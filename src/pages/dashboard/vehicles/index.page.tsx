import PerfectScrollbar from "react-perfect-scrollbar";
import VehicleListItem from "./components/vehicle-list-item";

const VehiclesPage = () => {
  const vehicles: Array<Vehicle> = [
    {
      id: 1,
      name: "Van-01",
      model: "Toyota HiAce 2023",
      availability: "available",
      total_order_completed: 142,
      last_checked_in_out: "2025-05-18T09:30:00+0545",
      max_capacity: 15,
      driver_name: "Ramesh Shrestha",
      image_url:
        "https://www.pelago.com/img/products/ID-Indonesia/hire-luxury-van-15-seat-toyota-hiace/09bb4f09-3eaf-498e-8913-8fb8aaf7731b_hire-luxury-van-15-seat-toyota-hiace.jpg",
    },
    {
      id: 2,
      name: "Truck-03",
      model: "Isuzu NPR 2022",
      availability: "assigned",
      total_order_completed: 89,
      last_checked_in_out: "2025-05-19T05:15:00+0545",
      max_capacity: 2,
      driver_name: "Sanjay Gurung",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNOP-IrsAJAYbBB3o6anRkiWJs6TYO4ccdA&s",
    },
    {
      id: 3,
      name: "Bus-02",
      model: "Tata Marcopolo 2021",
      availability: "out_of_order",
      total_order_completed: 205,
      last_checked_in_out: "2025-05-10T14:20:00+0545",
      max_capacity: 40,
      driver_name: "Hari Bahadur Thapa",
      image_url:
        "https://i.pinimg.com/736x/ef/0a/03/ef0a0317a0134b4908ef83693dafe576.jpg",
    },
    {
      id: 4,
      name: "Car-05",
      model: "Hyundai Creta 2024",
      availability: "available",
      total_order_completed: 67,
      last_checked_in_out: "2025-05-17T16:45:00+0545",
      max_capacity: 5,
      driver_name: "Anita Karki",
      image_url: "https://i.cdn.newsbytesapp.com/images/l4120240108114326.png",
    },
    {
      id: 5,
      name: "Van-04",
      model: "Ford Transit 2023",
      availability: "assigned",
      total_order_completed: 123,
      last_checked_in_out: "2025-05-19T06:00:00+0545",
      max_capacity: 12,
      driver_name: "Bikash Lama",
      image_url:
        "https://vehicle-images.dealerinspire.com/stock-images/ford/005456d8d11ff521247b33edc2c7a501.png",
    },
    {
      id: 6,
      name: "Bus-06",
      model: "Volvo B7R 2022",
      availability: "available",
      total_order_completed: 178,
      last_checked_in_out: "2025-05-18T20:10:00+0545",
      max_capacity: 50,
      driver_name: "Prem KC",
      image_url:
        "https://images.91trucks.com/buses/models/81/1771/volvo-b9r-482952155.jpg",
    },
    {
      id: 7,
      name: "Truck-07",
      model: "Ashok Leyland 2023",
      availability: "out_of_order",
      total_order_completed: 95,
      last_checked_in_out: "2025-05-15T11:25:00+0545",
      max_capacity: 3,
      driver_name: "Dinesh Magar",
      image_url:
        "https://commercialvehicle.in/wp-content/uploads/2022/07/image006.png",
    },
    {
      id: 8,
      name: "Car-08",
      model: "Suzuki Vitara 2024",
      availability: "assigned",
      total_order_completed: 53,
      last_checked_in_out: "2025-05-19T06:30:00+0545",
      max_capacity: 5,
      driver_name: "Sita Rai",
      image_url:
        "https://resource.digitaldealer.com.au/image/45415459564a60d790e956579775664_0_0.png",
    },
    {
      id: 9,
      name: "Van-09",
      model: "Nissan Urvan 2023",
      availability: "available",
      total_order_completed: 110,
      last_checked_in_out: "2025-05-18T15:40:00+0545",
      max_capacity: 14,
      driver_name: "Manoj Tamang",
      image_url:
        "https://nissan-nepal.com/assets/images/product/product63199454afef44a52ee06a0544379b4c7c8188904e5cb.webp",
    },
    {
      id: 10,
      name: "Minibus-10",
      model: "Mitsubishi Rosa 2022",
      availability: "assigned",
      total_order_completed: 134,
      last_checked_in_out: "2025-05-19T04:50:00+0545",
      max_capacity: 25,
      driver_name: "Laxmi Bhattarai",
      image_url:
        "https://assets.mitsubishi-fuso.com/fusoassets/2021/02/Rosa_IntroThumb.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex-none w-full p-8">
        <h1 className="text-2xl font-bold">Vehicles</h1>
        <span className="text-xs text-gray-500">
          Manage your vehicles and track their performance.
        </span>
      </div>
      <div className="flex-none flex flex-col px-8">
        <div className="flex space-x-8 text-xs border-b border-primary-500/10 font-medium">
          <div className="cursor-pointer pb-2 border-b-1 border-primary-500 text-primary-500">
            All Vehicles
            <span className="text-[8px] size-4 rounded-full border-1 p-0.5 ml-2">
              12
            </span>
          </div>
          <div className="cursor-pointer pb-2 hover:border-primary-500 hover:text-primary-500">
            Active
          </div>
          <div className="cursor-pointer pb-2 hover:border-primary-500 hover:text-primary-500">
            Inactive
          </div>
          <div className="cursor-pointer pb-2 hover:border-primary-500 hover:text-primary-500">
            Service Needed
          </div>
        </div>
      </div>
      <PerfectScrollbar className="flex-1 px-8 pb-8 pt-4">
        <div className="w-full grid grid-cols-12 gap-4">
          {vehicles.map((vehicle, index) => (
            <VehicleListItem key={index} vehicle={vehicle} />
          ))}
        </div>
      </PerfectScrollbar>
    </div>
  );
};
export default VehiclesPage;
