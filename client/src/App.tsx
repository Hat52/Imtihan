import { Login } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />
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
