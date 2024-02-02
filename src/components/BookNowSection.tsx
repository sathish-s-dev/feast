import { Button, Option, Select } from '@material-tailwind/react';
import { TopTextSection } from './OurSpecial';

const BookNowSection = () => {
	return (
		<section className='p-6 md:p-24 gap-y-6 grid'>
			<TopTextSection
				smallText='Book Now'
				title='Book A Table'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. '
			/>
			<div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto  w-full'>
				<Select
					color='orange'
					className=''
					label='Book Now'
					placeholder='Book Now'>
					<Option value='1'>1 person</Option>
					<Option value='1'>2 person</Option>
					<Option value='1'>3 person</Option>
					<Option value='1'>4 person</Option>
				</Select>
				<Select
					color='orange'
					className=''
					label='Select Date'
					placeholder=''>
					<Option value='1'>02/02/2024</Option>
					<Option value='1'>03/02/2024</Option>
					<Option value='1'>04/02/2024</Option>
					<Option value='1'>05/02/2024</Option>
				</Select>
				<Select
					color='orange'
					className=''
					label='Book Now'
					placeholder='Book Now'>
					<Option value='1'>06:00 PM</Option>
					<Option value='1'>07:00 PM</Option>
					<Option value='1'>08:00 PM</Option>
					<Option value='1'>09:00 PM</Option>
				</Select>
				<Button
					placeholder={''}
					className='bg-accent text-slate-900'>
					Book Now
				</Button>
			</div>
		</section>
	);
};

export default BookNowSection;
