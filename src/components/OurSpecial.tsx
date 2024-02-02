import { Button } from '@material-tailwind/react';
import { useState } from 'react';

type Category = {
	id: string;
	name: string;
};

const OurSpecial = () => {
	const categories: Category[] = [
		{
			id: '1',
			name: 'speacialities',
		},
		{
			id: '2',
			name: 'drinks',
		},
		{
			id: '3',
			name: 'sides',
		},
		{
			id: '4',
			name: 'salads',
		},
		{
			id: '5',
			name: 'desserts',
		},
		{
			id: '6',
			name: 'wine',
		},
	];
	const [defaultCategory, setDefaultCategory] = useState(categories[0].name);

	const handleDefaultCategoryChange = (newCategory: string) => {
		setDefaultCategory(newCategory);
	};

	return (
		<section className='grid place-items-center gap-4 md:p-24 text-center'>
			<TopTextSection
				smallText='Quality food for you'
				title='Our Specialities'
				description='Authentic food from our restaurant served with high quality ingredients'
			/>
			<CategoryList
				categories={categories}
				defaultCategory={defaultCategory}
				handleChange={handleDefaultCategoryChange}
			/>
			<CategorySection />
		</section>
	);
};

export default OurSpecial;

function CategoryList({
	categories,
	defaultCategory,
	handleChange,
}: {
	categories: Category[];
	defaultCategory: string;
	handleChange: (value: string) => void;
}) {
	return (
		<div className='flex gap-4 flex-wrap justify-center items-center'>
			{categories.map((category) => (
				<Button
					placeholder={''}
					className={`text-accent hover:text-white border-accent hover:bg-accent hover:border-accent transition-all duration-300 focus:ring-0 ${
						category.name === defaultCategory &&
						'bg-accent text-white border-accent'
					}`}
					onClick={() => handleChange(category.name)}
					variant='outlined'>
					{category.name}
				</Button>
			))}
		</div>
	);
}

function CategorySection() {
	return (
		<div className='grid'>
			<SpeacialItemCard />
			<SpeacialItemCard isRight={true} />
			<SpeacialItemCard />
			<SpeacialItemCard isRight={true} />
			<SpeacialItemCard />
			<SpeacialItemCard isRight={true} />
		</div>
	);
}

function SpeacialItemCard({ isRight = false }: { isRight?: boolean }) {
	return (
		<div
			className={`flex justify-center items-center flex-col md:flex-row gap-10 border border-slate-50/5 p-4`}>
			<div className={`${isRight ? 'order-last' : ''}`}>
				<img
					src='/sushi.png'
					alt='sushi'
					className=' aspect-video w-full max-w-3xl self-center object-cover'
				/>
			</div>
			<div className='grid gap-2 text-start max-w-xs md:max-w-sm'>
				<h3 className='font-cinzel text-accent text-2xl'>Sushi</h3>
				<p className='text-sm md:text-md'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
					imperdiet lectus.
				</p>
				<p className='text-accent text-3xl font-cinzel'>$10</p>
			</div>
		</div>
	);
}

export function TopTextSection({
	title,
	description,
	smallText,
}: {
	title: string;
	description: string;
	smallText: string;
}) {
	return (
		<div className='grid gap-4 text-center place-items-center'>
			<p className='text-sm'>{smallText}</p>
			<h3 className='font-cinzel text-accent text-3xl'>{title}</h3>
			<p className='text-sm md:text-lg max-w-xl text-center'>
				{description}
			</p>{' '}
		</div>
	);
}
