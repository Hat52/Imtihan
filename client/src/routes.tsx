import { createBrowserRouter } from 'react-router-dom';
import { Login, Signup, Setup } from './pages';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Login />
	},
	{
		path: '/signup',
		element: <Signup />
	},
	{
		path: '/setup',
		element: <Setup />
	}
]);
