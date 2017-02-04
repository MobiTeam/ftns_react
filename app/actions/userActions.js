export const logOut = () => {
	return {
		type: 'LOGOUT'
	}
} 

export const logIn = (payload) => {
	return {
		type: 'LOGIN',
		payload
	}
}
