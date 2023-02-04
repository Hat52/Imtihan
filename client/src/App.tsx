import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, Signup } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />
	},
	{
		path: '/signup',
		element: <Signup />
	}
]);

function App() {
	return (
		<div className="App w-screen h-screen flex justify-center items-center">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
