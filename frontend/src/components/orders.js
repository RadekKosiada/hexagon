import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useHistory } from "react-router-dom";

export default function Order() {
  const { currentUser, logout } = useAuth();
  console.log("user from orders: ", currentUser);

  const history = useHistory();
  const [title, setTitle] = useState(["waiting for title"]);
  const [bookingDate, setBookingDate] = useState(["waiting for booking date"]);

  async function handleLogout() {
    console.log("logout triggered");

    try {
      await logout();
      history.push("/orders");
    } catch {
      console.log("User cannot be logged out");
    }
  }

  useEffect(() => {
    let isMounted = true;

    fetch("/orders" + currentUser.uid)
      .then(response => {
        if (response.ok && isMounted) {
          return response.json();
        }
      })
      .then(jsonResponse => {
        console.log(jsonResponse.title);
        console.log(jsonResponse.bookingDate);

        setBookingDate(jsonResponse.bookingDate);
        setTitle(jsonResponse.title);
      })
      .catch(err => console.log(err.message));
    return () => {
      isMounted = false;
    };
  });

  function goToOrderDetails(event) {
    let orderId = event.target.getAttribute('data-id');
    console.log('order details clicked', orderId);
    // history.push("/orderDetails/" + orderId);
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <div 
      key={0} 
      data-id={0}
      onClick={goToOrderDetails}
      >
        <p>Order title: {title}</p>
        <p>Booking date: {bookingDate}</p>
      </div>
      <p>{title}</p>
    </div>
  );
}
