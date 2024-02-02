import './App.css';
import BookNowSection from './components/BookNowSection';
import DiningEvents from './components/DiningEvents';
import Hero from './components/Hero';
import OurSpecial from './components/OurSpecial';
import TodoaySpecial from './components/TodoaySpecial';

function App() {
	return (
		<main className='text-white'>
			<Hero />
			<TodoaySpecial />
			<OurSpecial />
			<DiningEvents />
			<BookNowSection />
		</main>
	);
}

export default App;
