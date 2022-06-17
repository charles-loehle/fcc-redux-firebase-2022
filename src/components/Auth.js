import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Auth = () => {
	// hook to call functions in the redux store
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		// call login() in auth-slice reducer
		dispatch(authActions.login());
	};

	return (
		<div className="container">
			<h1>Login</h1>{' '}
			<form onSubmit={handleSubmit}>
				<label htmlFor="id">Id</label>
				<input type="text" name="id" id="id" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<button className="login-btn" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default Auth;
