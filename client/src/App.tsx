import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './app.css';

function App() {
	return (
		<div className="App w-screen h-screen flex justify-center items-center">
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
