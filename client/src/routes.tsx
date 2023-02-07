import { createBrowserRouter } from 'react-router-dom';
import { Login, Signup } from './pages';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Login />
	},
	{
		path: '/signup',
		element: <Signup />
	}
]);
