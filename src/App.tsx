import './App.css';
import Hero from './components/Hero';
import OurSpecial from './components/OurSpecial';
import TodoaySpecial from './components/TodoaySpecial';

function App() {
	return (
		<main className='text-white'>
			<Hero />
			<TodoaySpecial />
			<OurSpecial />
		</main>
	);
}

export default App;
