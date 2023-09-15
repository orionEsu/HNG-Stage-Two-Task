import Navbar from '../components/Navbar/Navbar';
import useMovies from '../hooks/useMovies';
import './header.scss';

/* 


*/
const Header = () => {
	const { data, error } = useMovies();
	const headerElement = data?.results[Math.trunc(Math.random() * 20)];
	console.log(headerElement);
	return (
		<header
			className='header'
			style={{
				backgroundImage: error
					? `url(src/assets/poster.png)`
					: `url(https://image.tmdb.org/t/p/original${headerElement?.backdrop_path})`,
			}}
		>
			<Navbar />

			<div className='header__description'>
				<h1 className='heading-1 header__description--header'>
					{error ? 'The Dark Knight' : headerElement?.title}
				</h1>
				<div className='header__description--ratings'>
					<div className='ratings'>
						<img
							src='/src/assets/imbd-icon.svg'
							alt='IMDB Logo'
						/>
						<p className='ratings__text'>8.5/10</p>
					</div>
					<div className='ratings'>
						<img
							src='/src/assets/cherry-icon.svg'
							alt='Cherry Logo'
						/>
						<p className='ratings__text'>97%</p>
					</div>
				</div>

				<p className='header__description--text description--text'>
					{error
						? 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.'
						: headerElement?.overview}
				</p>

				<button
					title=''
					className='header__description--btn'
				>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z'
							fill='white'
						/>
					</svg>
					Watch Trailer
				</button>
			</div>
		</header>
	);
};

export default Header;
