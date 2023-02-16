import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './app.css';

function App() {
	return (
		<div className="">
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
