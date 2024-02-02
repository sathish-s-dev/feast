import { Button } from '@material-tailwind/react';
import {
	Arrow1,
	Arrow2,
	chickPea,
	spaghetti,
	spinach,
	star,
	sweetPotato,
} from '../assets';

const TodoaySpecial = () => {
	const specialItems = [
		{
			name: 'Spinach & Mushroom Quiche',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
			image: spinach,
			rating: 5,
		},
		{
			name: 'Sweet Potato',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
			image: sweetPotato,
			rating: 4,
		},
		{
			name: 'Spaghetti',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
			image: spaghetti,
			rating: 5,
		},
		{
			name: 'Chickpea Curry',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.',
			image: chickPea,
			rating: 4,
		},
	];
	return (
		<section className='w-full gap-24 flex-col text-center p-24 max-w-7xl mx-auto flex justify-center items-center h-full'>
			<div className='grid gap-3 relative w-full'>
				<img
					src={Arrow2}
					alt=''
					className='absolute h-24 w-24 rotate-45 md:rotate-0  md:h-36 md:w-36 lg:left-24 -left-16 lg:-top-6'
				/>
				<h3 className='text-3xl font-bold tracking-widest text-slate-300 font-cinzel'>
					Today&apos;s Special
				</h3>
				<p className='text-sm md:text-xl max-w-md mx-auto'>
					Special menu oftenly comes different everyday, this is our special
					food for today
				</p>
				<img
					src={Arrow1}
					alt=''
					className='absolute w-24 h-24 -rotate-45 md:rotate-0 md:w-36 md:h-36 lg:right-24 -right-12 lg:-top-6'
				/>
			</div>
			<div className='gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{specialItems.map((item) => (
					<FoodCard {...item} />
				))}
			</div>
		</section>
	);
};

export default TodoaySpecial;

function FoodCard({
	name,
	description,
	image,
	rating,
}: {
	name: string;
	description: string;
	image: string;
	rating: number;
}) {
	return (
		<div className='grid gap-4 place-items-start text-start max-w-64  border-slate-200/20 overflow-clip rounded-2xl'>
			<img
				src={image}
				alt=''
				className='aspect-[4/3] object-cover rounded-lg'
			/>
			<div className='grid gap-4 p-2'>
				<abbr
					title={name}
					className='md:text-lg font-semibold line-clamp-1'>
					{name}
				</abbr>
				<p className='md:text-sm text-xs line-clamp-3 text-slate-300'>
					{description}
				</p>
				<div className='flex gap-2 content-start'>
					{Array(rating)
						.fill('')
						.map((_, index) => {
							return (
								<img
									key={index}
									src={star}
									alt=''
									className='w-6 h-6'
								/>
							);
						})}
				</div>
				<Button
					placeholder={''}
					className='bg-accent text-black'>
					Order Now
				</Button>
			</div>
		</div>
	);
}
