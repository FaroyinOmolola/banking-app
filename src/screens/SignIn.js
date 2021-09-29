import React, { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signin } from "../actions/UserAction";
import { useSelector } from "react-redux";

function SignIn(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validated, setValidated] = useState(false);
	const [inCorrectDetails, setIncorrectDetails] = useState(false);

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
			e.stopPropagation();
		} else {
			// history.push("./userProfile");
			if (userInfo?.email === email && userInfo?.password === password) {
				setValidated(true);
				dispatch(signin(email, password));
				history.push("./userProfile");
			} else {
				setIncorrectDetails(true);
			}
		}
	};

	// const redirect = props.location.search ? "/userProfile" : "/";
	let history = useHistory();
	// useEffect(() => {

	// }, [history, userInfo]);

	return (
		<div>
			<Container className="">
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
					<div className="mb-3 text-center ">
						<h1>Sign In</h1>
					</div>
					{inCorrectDetails && (
						<Alert
							variant="danger"
							className=""
							onClose={() => setIncorrectDetails(false)}
							dismissible
						>
							<small>invalid email or password</small>
						</Alert>
					)}

					<Form.Group className="mb-md-3 mb-2">
						<Form.Label htmlFor="email">Email address</Form.Label>
						<Form.Control
							type="email"
							id="email"
							placeholder="Enter email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<Form.Control.Feedback type="invalid">
							Please enter a valid email e.g. abc@example.com
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className="mb-md-3 mb-2">
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
						<Form.Control.Feedback type="invalid">
							Password should be a 4 digit number.
						</Form.Control.Feedback>
					</Form.Group>

					<Button className="w-100 " type="submit">
						Sign In
					</Button>

					<Row className="mt-3">
						<Col>No account? </Col>
						<Col className="mt-3">
							<Link
								className="mb-md-3 mb-2 text-decoration-none border-3 rounded-3 shadow-lg text-white p-2 bg-primary"
								to="/register"
							>
								Register
							</Link>{" "}
						</Col>
					</Row>
				</Form>
			</Container>
		</div>
	);
}

export default SignIn;
