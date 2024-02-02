import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { Logo } from '../assets';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, gooleProvider } from '../../firebase.config';
import { useUserStore } from '../store/userStore';

const Header = () => {
	const navLinks = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'About',
			path: '/about',
		},
		{
			name: 'Contact',
			path: '/contact',
		},
		{
			name: 'Book a Table',
			path: '/book',
		},
		{
			name: 'place order',
			path: '/order',
		},
	];

	const user = useUserStore((state) => state.user);

	console.log(user, 'header');

	return (
		<header className='flex text-white bg-black justify-between max-w-7xl mx-auto p-4 items-center'>
			<div>
				<img
					src={Logo}
					alt=''
					className='h-12 w-12'
				/>
			</div>
			<nav className='md:flex hidden'>
				<ul className='flex gap-4'>
					{navLinks.map(({ name, path }) => (
						<li key={path}>
							<Link to={path}>{name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className='flex gap-6'>
				{user?.displayName ? (
					<div className='flex gap-4 items-center'>
						<img
							src={user.photoURL!}
							alt=''
							className='w-8 h-8 rounded-full'
						/>
						<Button
							className='bg-accent py-2 text-black'
							placeholder={'Sign in'}
							onClick={async () => {
								signOut(auth);
							}}>
							Logout
						</Button>
					</div>
				) : (
					<div>
						<Button
							className='bg-accent py-2 text-black'
							placeholder={'Sign in'}>
							sign up
						</Button>
						<Button
							className='bg-accent py-2 text-black'
							placeholder={'Sign in'}
							onClick={async () => {
								try {
									const user = await signInWithPopup(auth, gooleProvider);
									console.log(user);
								} catch (error) {
									console.log(error);
								}
							}}>
							Login
						</Button>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
