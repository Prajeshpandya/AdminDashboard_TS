export type OrderItemType = {
  photo: string;
  name: string;
  price: number;
  quantity: number;
  _id: string;
};
export type OrderType = {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: number;
  _id: string;
  status:"Processing" | "Shipped" | "Delivered";
  subTotal:number;
  discount:number;
  shippingCharges:number;
  tax:number;
  total:number;
  orderItems:OrderItemType[];
};
