import React, { useState } from "react";
import { Container, Form, Button, Alert, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { register } from "../actions/UserAction";

function Register(props) {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [accountType, setAccountType] = useState("");

	const [validated, setValidated] = useState(false);
	const [show, setShow] = useState(false);
	const [userExist, setUserExist] = useState(false);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
			e.stopPropagation();
		} else {
			if (password !== confirmPassword) {
				setShow(true);
			} else {
				setValidated(true);
				dispatch(register(name, email, password, city, address, accountType));
				if (userInfo?.email === email) {
					setUserExist(true);
					setValidated(true);
				} else if (userInfo?.email !== email) {
					history.push("./userProfile");
				}
			}
		}
	};

	let history = useHistory();
	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo } = userRegister;

	return (
		<div>
			<Container>
				<Link to="" className="text-decoration-none pt-3 text-dark">
					{" "}
					Back to Home{" "}
				</Link>
				<Form
					onSubmit={submitHandler}
					noValidate
					validated={validated}
					className=" mb-3 mx-auto border-3 rounded-3 shadow-lg text-white p-5 pt-4"
				>
					<div className="mb-3 text-center">
						<h1>Create Account</h1>
					</div>
					{userExist && (
						<Alert
							variant="danger"
							className=""
							onClose={() => setUserExist(false)}
							dismissible
						>
							<small>User alredy exist.</small>
						</Alert>
					)}
					<Form.Group className="mb-3">
						<Form.Label htmlFor="name">Name</Form.Label>
						<Form.Control
							type="text"
							id="name"
							placeholder="Enter name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a name
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="email">Email address</Form.Label>
						<Form.Control
							type="email"
							id="email"
							placeholder="Enter email"
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a valid email e.g. abc@example.com
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="address">Address</Form.Label>
						<Form.Control
							type="text"
							id="address"
							placeholder="Enter Home address"
							required
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter your address
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="city">City</Form.Label>
						<Form.Control
							type="text"
							id="city"
							placeholder="Enter city"
							required
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter your city
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="accountType">Account Type</Form.Label>
						<Form.Select
							id="accountType"
							required
							value={accountType}
							onChange={(e) => {
								setAccountType(e.target.value);
							}}
						>
							<option value="" disabled>
								Select Account Type
							</option>
							<option value="Savings">Savings account</option>
							<option value="Current">Current account</option>
						</Form.Select>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="password">Password</Form.Label>
						<Form.Control
							type="password"
							id="password"
							value={password}
							placeholder="Password"
							pattern="(?=.*\d).{4}"
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Form.Text className="text-white">
							password should be a 4 digit number.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="confirmPassword"> Confirm Password</Form.Label>
						<Form.Control
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							placeholder=" Confirm Password"
							pattern="(?=.*\d).{4}"
							required
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<Form.Text className="text-white">
							should match password entered above.
						</Form.Text>
					</Form.Group>
					{show && (
						<Alert
							variant="danger"
							className=""
							onClose={() => setShow(false)}
							dismissible
						>
							<small>password and confirm password does not match</small>
						</Alert>
					)}

					<Button className="w-100" type="submit">
						Register
					</Button>

					<Row className="mt-3">
						<Col>Already have an account? </Col>
						<Col className="mt-3">
							<Link
								className="text-decoration-none border-3 rounded-3 shadow-lg text-white p-2 bg-primary"
								to="/signin"
							>
								Sign In
							</Link>{" "}
						</Col>
					</Row>
				</Form>
			</Container>
		</div>
	);
}

export default Register;
