import './navbar.scss';
// import useRes from '../../hooks/useSearchMovies';
// import { useState } from 'react';

const Navbar = () => {
	// const [value, setValue] = useState('');

	// const handleChange = (e) => {
	// 	setValue((val) => e.target.value);
	// 	const response = useRes(value);
	// 	console.log(response);
	// };

	return (
		<nav className='nav'>
			<div className='nav__flex'>
				<a
					href='#'
					className='nav__link'
				>
					<img
						src='/src/assets/logo.svg'
						alt='MovieBox Logo'
						className='logo'
					/>
					<p className='nav__link--description'>MovieBox</p>
				</a>
				<input
					type='search'
					name='search'
					id='search'
					className='nav__search'
					placeholder='What do you want to watch...'
				/>
			</div>

			<div className='nav__burger'>
				<a
					href='#'
					className='sign-in'
				>
					Sign In
				</a>
				<img
					src='/src/assets/Menu.svg'
					alt='Hamburger Menu'
				/>
			</div>
		</nav>
	);
};

export default Navbar;
