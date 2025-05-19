type Vehicle = {
  id: number;
  name: string;
  model: string;
  availability: "available" | "assigned" | "out_of_order";
  total_order_completed: number;
  last_checked_in_out: string; // ISO 8601 format (e.g., "2025-05-19T06:30:00+0545")
  max_capacity: number;
  driver_name: string;
  image_url?: string;
};
