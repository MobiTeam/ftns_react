export const logIn = (payload) => {
	return {
		type: 'LOGIN',
		payload
	}
}

export const logInSuccess = (payload) => {
	return {
		type: 'LOGIN_SUCCESS',
		payload
	}
}

export const logOut = () => {
	return {
		type: 'LOGOUT'
	}
} 