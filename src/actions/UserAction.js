import {
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_SIGNIN_FAIL,
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNOUT,
} from "../constants/UserConstant";

export const register =
	(name, email, password, city, address, accountType) => async (dispatch) => {
		dispatch({
			type: USER_REGISTER_REQUEST,
			payload: { name, email, password, city, address, accountType },
		});
		try {
			const data = { name, email, password, city, address, accountType };
			localStorage.removeItem("userInfo");
			dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
			localStorage.setItem("userInfo", JSON.stringify(data));
			dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
		} catch (error) {
			dispatch({
				type: USER_REGISTER_FAIL,
				payload:
					error.response && error.response.data?.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const signin = (email, password) => async (dispatch) => {
	dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
	try {
		const data = localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null;
		// const { data } = await Axios.get(`${URL}`, {
		// 	email,
		// 	password,
		// });
		dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_SIGNIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const signout = () => (dispatch) => {
	localStorage.removeItem("userInfo");
	dispatch({ type: USER_SIGNOUT });
};
