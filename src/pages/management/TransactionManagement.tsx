import { useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

export default function TransactionManagement() {
  const img =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

  const orderItems: OrderItemType[] = [
    { name: "Puma Shoes", photo: img, _id: "afdf", quantity: 4, price: 2000 },
  ];

  const [order, setOrder] = useState<OrderType>({
    name: "Abhishek Singh",
    address: "77 black street",
    city: "Newyork",
    state: "Navada",
    country: "India",
    pinCode: 23233234,
    status: "Processing",
    subTotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 20 + 0 - 1200,
    orderItems,
    _id: "hbshdbf",
  });

  const {
    name,
    address,
    city,
    state,
    country,
    pinCode,
    subTotal,
    discount,
    shippingCharges,
    tax,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="admin_container">
      <AdminSideBar />
      <main className="product_management" >
        <section style={{
        padding:"2rem"
      }}>
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </section>

        <article className="shipping_info_card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address} , ${city}, ${state},${country} ${pinCode} `}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subTotal}</p>
          <p>ShippingCharges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status: {" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>

          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
}

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transcation_product_card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      {price} X {quantity} = ${price * quantity}{" "}
    </span>
  </div>
);
