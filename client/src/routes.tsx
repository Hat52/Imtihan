import { createBrowserRouter } from 'react-router-dom';
import { Login, Signup, Setup, Test } from './pages';

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
	},
	{
		path: '/test',
		element: <Test />
	}
]);
