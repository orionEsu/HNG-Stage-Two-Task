import './navbar.scss';

const Navbar = () => {

	return (
		<nav className='nav'>
			<div className='nav__flex'>
				<a
					href='#'
					className='nav__link'
				>
					<img
						src='src/assets/logo.svg'
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
					src='src/assets/Menu.svg'
					alt='Hamburger Menu'
				/>
			</div>
		</nav>
	);
};

export default Navbar;
