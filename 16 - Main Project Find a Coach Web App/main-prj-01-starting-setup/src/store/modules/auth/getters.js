export default{
	userId(state){
		return state.userId;
	},
	token(state){
		return state.token;
	},
	isAuthenticated(state){
		return state.token ? true : false;
	},
	didAutoLogout(state){
		return state.didAutoLogout;
	}
}