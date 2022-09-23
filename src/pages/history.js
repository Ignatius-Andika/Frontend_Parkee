import React, { useState, useEffect } from "react";
import axios from "axios";

const History = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Plate</th>
              <th>Location</th>
              <th>Checkin</th>
              <th>Checkout</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => user.checkout && user.total_price ? (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.vehicle_plate}</td>
                <td>{user.location}</td>
                <td>{user.checkin}</td>
                <td>{user.checkout}</td>
                <td>{user.total_price}</td>
              </tr>
            ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;