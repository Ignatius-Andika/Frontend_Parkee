import React, { useState, useEffect } from "react";
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CheckoutUpdate = () => {
	const [name, setName] = useState("");
	const [vehicle_plate, setPlate] = useState("");
	const [phone, setPhone] = useState("");
	const [location, setLocation] = useState("");
	const [vehicle_type, setType] = useState("Car");
	const [checkin, setCheckin] = useState("");
	const [checkout, setCheckout] = useState("");
	const [total_price, setPrice] = useState("");
	const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setPlate(response.data.vehicle_plate);
    setPhone(response.data.phone);
    setLocation(response.data.location);
    setType(response.data.vehicle_type);
    setCheckin(response.data.checkin);
    setCheckout(response.data.checkout);
    setPrice(response.data.total_price)
    console.log("INI DATA: ", response.data);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        vehicle_plate,
        phone,
        location,
        vehicle_type,
        checkin,
        checkout,
        total_price
      });
      navigate("/history");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section">
    <div className="container">
        <div className="title">CHECK OUT</div>
        <div className="subtitle">Checkout your vehicle</div>
        <div className="space"></div>
        <form onSubmit={updateUser}>
            <div className="group">
                <div className="field field-2">
                    <label className="label">Full Name</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                            readOnly
                        />
                    </div>
                </div>
                <div className="field field-2">
                    <label className="label">Vehicle Plate</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            value={vehicle_plate}
                            onChange={(e) => setPlate(e.target.value)}
                            placeholder="Vehicle Plate"
                            readOnly
                        />
                    </div>
                </div>
                <div className="field field-2">
                    <label className="label">Phone</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                            readOnly
                        />
                    </div>
                </div>
                <div className="field field-2">
                    <label className="label">Location</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location"
                            readOnly
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Vehicle Type</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            value={vehicle_type}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="Vehicle Type"
                            readOnly
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Checkin</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            value={checkin}
                            onChange={(e) => setCheckin(e.target.value)}
                            placeholder="Checkin"
                            readOnly
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Checkout</label>
                    <div className="control">
                        <input
                            type="datetime-local"
                            className="input"
                            value={checkout}
                            onChange={(e) => setCheckout(e.target.value)}
                            placeholder="Checkout"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Total Price</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            value={total_price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Total Price"
                        />
                    </div>
                </div>
                <div className="field-1">
                    <div className="control">
                        <button type="submit" className="submit">CONFIRM</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
  );
};

export default CheckoutUpdate;