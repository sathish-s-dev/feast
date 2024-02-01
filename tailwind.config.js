import withMT from '@material-tailwind/react/utils/withMT';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				accent: '#f5be32',
				slate: colors.slate,
			},
			fontFamily: {
				cinzel: ['Cinzel', 'serif'],
			},
		},
	},
	plugins: [],
};

export default withMT(config);
