import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserProfile() {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	return (
		<div className="userProfile">
			<Container className="pt-5 w-75 mx-auto text-white">
				<h1 className="text-center mb-3"> Welcome {userInfo?.name}</h1>
				<Row className="m-2">
					<Col xs={4}>Email:</Col>
					<Col xs={8}>{userInfo?.email}</Col>
				</Row>
				<Row className="m-2">
					<Col xs={4}>Account Type:</Col>
					<Col xs={8}>{userInfo?.accountType}</Col>
				</Row>
				<Row className="m-2">
					<Col xs={4}>Address:</Col>
					<Col xs={8}>{userInfo?.address}</Col>
				</Row>
				<Row className="mb-5 mx-auto text-center fixed-bottom w-50">
					<Link
						to="/"
						className="text-decoration-none border-3 rounded-3 shadow-lg text-white p-2 bg-primary"
					>
						{" "}
						Back to Home{" "}
					</Link>
				</Row>
			</Container>
		</div>
	);
}

export default UserProfile;
