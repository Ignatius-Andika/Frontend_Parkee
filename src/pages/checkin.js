import React, { useState } from "react";
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkin = () => {
	const [name, setName] = useState("");
	const [vehicle_plate, setPlate] = useState("");
	const [phone, setPhone] = useState("");
	const [location, setLocation] = useState("");
	const [vehicle_type, setType] = useState("Car");
	const [checkin, setCheckin] = useState("");
	const navigate = useNavigate();

	const saveUser = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/users", {
				name,
				vehicle_plate,
				phone,
				location,
				vehicle_type,
				checkin
			});
			console.log("DATA INPUTED");
			  navigate("/checkout");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="section">
			<div className="container">
				<div className="title">CHECK IN</div>
				<div className="subtitle">Input your detail</div>
				<div className="space"></div>
				<form onSubmit={saveUser}>
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
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Vehicle Type</label>
							<div className="control">
									<select
										className="input"
										value={vehicle_type}
										onChange={(e) => setType(e.target.value)}
									>
										<option value="Car">Car</option>
									</select>
							</div>
						</div>
						<div className="field">
							<label className="label">Checkin</label>
							<div className="control">
								<input
									type="datetime-local"
									className="input"
									value={checkin}
									onChange={(e) => setCheckin(e.target.value)}
									placeholder="Checkin"
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

export default Checkin;