import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useHistory } from "react-router-dom";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

export default function NewOrder() {
  console.log("new order loaded");

  const { currentUser } = useAuth();
  console.log(useAuth);
  const history = useHistory();
  const [name, setName] = useInput([""]);
  const [title, setTitle] = useInput([""]);
  const [address, setAddress] = useInput([""]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name, title, address);

    const newOrderObject = {
      address: {
        city: address,
      },
      bookingDate: Date.now(),
      customer: {
        name: name,
      },
      title: title,
      uid: currentUser.uid
    };

    console.log(newOrderObject);

    const fetchOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
			  "Accept": "application/json"
      },
      body: JSON.stringify(newOrderObject)
    };

    try {
      await fetch('/make-new-order', fetchOptions)
      history.push("/orders");
    } catch {
      console.log("Order cannot be made.");
    }
  }

  return (
    <div>
      <p>Please place a new order</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="customersName"
          type="name"
          value={name}
          onChange={setName}
          required
        />
        <input
          placeholder="Title"
          type="title"
          value={title}
          onChange={setTitle}
          required
        />

        <input
          placeholder="City"
          type="title"
          value={address}
          onChange={setAddress}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
