import Card from '../components/Card';
import useMovies from '../hooks/useMovies';
import './main.scss';

const MainSection = () => {
	const { data, error } = useMovies();

	return (
		<main className='main movies'>
			<div className='movies__header'>
				<h2 className='heading-2'>Featured Movies</h2>
				<div className='movies__header--more'>
					<a href='#'>See More</a>
					<img
						src='/src/assets/chevron-right.svg'
						alt='Right arrow'
					/>
				</div>
			</div>
			{!error ? (
				<div className='movies__grid'>
					{data?.results?.length !== 0 &&
						data?.results?.slice(0, 10).map((el) => (
							<Card
								key={el.id}
								movie={el}
								error={error}
							/>
						))}
				</div>
			) : (
				<p className='error'>Error Fetching Data</p>
			)}
		</main>
	);
};

export default MainSection;
