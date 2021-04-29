import React from 'react';
import { useAuth } from '../contexts/authContext';

export default function Order() {

  const { currentUser } = useAuth();
  console.log('user from orders: ', currentUser);
  return (
    <div>
      <button>Logout</button>
      <p>{currentUser.uid}</p>
      <p>Orders</p>
    </div>
  )
}
