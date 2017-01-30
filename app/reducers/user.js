const user = (state = null, action) => {
	switch (action.type) {
	case 'LOGIN':
		state = action.payload;
		break;
	case 'LOGOUT':
		state = null;
		break;
	}
	return state;
};

export default user;