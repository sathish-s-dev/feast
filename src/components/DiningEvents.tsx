import { Button } from '@material-tailwind/react';
import { cn } from '../utils/cn';
import { TopTextSection } from './OurSpecial';

const DiningEvents = () => {
	return (
		<section className='md:p-24 p-6 gap-24 grid'>
			<div className='w-full flex justify-center items-center flex-col gap-4'>
				<TopTextSection
					title='Dining Events'
					description='We provide dining event for your speacial day with your important people'
					smallText='choose your Events'
				/>
				<div className='flex gap-10'>
					<Button
						placeholder={''}
						className='bg-accent text-black border-white'>
						Private Events
					</Button>
					<Button
						placeholder={''}
						className='text-accent border-white hover:border-transparent focus:ring-0 hover:bg-accent hover:text-white'
						variant='outlined'>
						Corporate Events
					</Button>
				</div>
			</div>
			<DiningCard />
			<DiningCard isRight={true} />
			<DiningCard />
			<DiningCard isRight={true} />
			<DiningCard />
		</section>
	);
};

export default DiningEvents;

function DiningCard({ isRight }: { isRight?: boolean }) {
	return (
		<div
			className={cn(
				'relative w-full h-64 isolate flex  items-center p-4',
				isRight ? 'justify-end' : 'justify-start'
			)}>
			<img
				src='/dining-1.png'
				alt=''
				className='w-full h-full max-h-64 object-cover -z-10 absolute'
			/>
			<div
				className={cn(
					'absolute inset-0  from-black via-black/80 to-transparent -z-[9]',
					isRight ? '	bg-gradient-to-l' : '	bg-gradient-to-r'
				)}
			/>
			<div
				className={cn('flex gap-10 h-full', isRight ? '' : 'flex-row-reverse')}>
				<h3 className='self-end text-accent font-cinzel text-4xl font-semibold'>
					$500
				</h3>
				<div
					className={cn(
						'grid gap-5 content-start',
						isRight ? 'text-right' : ''
					)}>
					<p className='text-3xl font-cinzel'>Dining Events</p>
					<p className='text-slate-300 max-w-[250px] text-sm'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>
		</div>
	);
}
