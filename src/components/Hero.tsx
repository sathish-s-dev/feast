import { Button } from '@material-tailwind/react';
import { heroBg } from '../assets';

const Hero = () => {
	return (
		<div className='relative isolate'>
			<div className='min-h-[90vh] flex flex-col justify-center items-center text-center max-w-xl mx-auto gap-6'>
				<span className='text-sm text-slate-300 tracking-wider'>
					Best sushi in town
				</span>
				<h1 className='text-4xl font-semibold text-accent uppercase font-cinzel tracking-wider'>
					Taste the rich flavor of high quality sushi
				</h1>
				<p className='text-slate-300'>
					We only use the five star quality for our menu, come and get the
					richness in every food we serve.
				</p>
				<Button
					placeholder={''}
					variant='outlined'
					className='text-accent border-accent hover:bg-accent hover:text-black transition-all duration-300'>
					Go to menu
				</Button>
			</div>
			<img
				src={heroBg}
				alt=''
				className='w-full absolute inset-0 h-full opacity-30 object-cover -z-10'
			/>
			<div className='w-full h-full absolute inset-0 bg-gradient-to-t from-black -z-[1] via-transparent to-black' />
		</div>
	);
};

export default Hero;
