import { auth } from '../firebase.config';
import './App.css';
import BookNowSection from './components/BookNowSection';
import DiningEvents from './components/DiningEvents';
import Hero from './components/Hero';
import OurSpecial from './components/OurSpecial';
import TodoaySpecial from './components/TodaySpecial';
import { useUserStore } from './store/userStore';
import { addUserToDb } from './utils/addUserToDb';

function App() {
	const setUser = useUserStore((state) => state.setUser);

	auth.onAuthStateChanged((user) => {
		if (user?.displayName) {
			setUser(user);
			addUserToDb({
				name: user.displayName!,
				email: user.email!,
				id: user.uid,
				image: user.photoURL!,
			});
		} else {
			setUser(null);
		}
	});
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
