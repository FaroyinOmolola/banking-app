import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeScreen() {
	return (
		<div>
			<div
				className=" d_style"
				style={{
					backgroundImage: "url(/images/mm-background-2.png)",
					backgroundSize: "100 auto",
					backgroundRepeat: "no-repeat",
					minHeight: "100vh",
					backgroundColor: "black",
				}}
			>
				<Container className="text-white home w-75 mt-5 ">
					<h1 className="mb-3">Lotim Bank Plc</h1>
					<p className=" fst-italic">
						We secure your financial assets for you, with us your
						future is green.
					</p>
					<Button
						variant="default"
						type="button"
						className="btn w-75  mb-2 px-2  border-3 rounded-3 shadow-lg bg-white"
					>
						<Link
							to="/register"
							className="text-decoration-none text-dark"
						>
							Open Account Now
						</Link>
					</Button>
					<div className="mt-2">
						<span>Aready have an account? </span>
						<Link
							to="/signin"
							className="text-decoration-none border-3 rounded-3 shadow-lg text-white p-2 bg-primary"
						>
							Sign in
						</Link>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default HomeScreen;
