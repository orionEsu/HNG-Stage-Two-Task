import { Link } from 'react-router-dom';
import './card.scss';

// type moviesProp = {
// 	id: number;
// 	title: string;
// 	release_date: string;
// 	poster_path: string;
// };

const Card = ({ movie, error }) => {
	if (error) return <p>{error?.message}</p>;

	return (
		<Link
			to={`movies/${movie.id}`}
			className='movie-card'
			data-testid='movie-card'
		>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt=''
				className='movie-card__poster'
				data-testid='movie-poster'
			/>
			<p
				className='movie-card__releasedate'
				data-testid='movie-release-date'
			>
				{movie.release_date}
			</p>
			<h3
				className='movie-card__title'
				data-testid='movie-title'
			>
				{movie.title}
			</h3>
		</Link>
	);
};

export default Card;
