import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <App />,
			},
		],
	},
]);
