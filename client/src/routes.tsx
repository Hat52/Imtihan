import { createBrowserRouter } from 'react-router-dom';
import { Login, Signup, Setup, Test, Dashboard } from './pages';

const Hoc = ({ children }: any) => {
	return <div className="App w-screen h-screen flex justify-center items-center">{children}</div>;
};

export const routes = createBrowserRouter([
	{
		path: '/',
		element: (
			<Hoc>
				<Login />
			</Hoc>
		)
	},
	{
		path: '/signup',
		element: (
			<Hoc>
				<Signup />
			</Hoc>
		)
	},
	{
		path: '/setup',
		element: <Setup />
	},
	{
		path: '/test',
		element: <Test />
	},
	{
		path: '/dashboard',
		element: <Dashboard />
	}
]);
