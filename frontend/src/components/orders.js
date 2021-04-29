import React from 'react';
import { useAuth } from '../contexts/authContext';
import { useHistory } from "react-router-dom";

export default function Order() {

  const { currentUser, logout } = useAuth();
  console.log('user from orders: ', currentUser);

  const history = useHistory();

  async function handleLogout() {
    console.log('logout triggered');

    try {
      await logout();
      history.push('/orders');
    } catch {
      console.log('User cannot be logged out');
    }
    
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <p>{currentUser.uid}</p>
      <p>Orders</p>
    </div>
  )
}
