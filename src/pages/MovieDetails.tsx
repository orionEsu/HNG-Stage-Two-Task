import { useParams, Link } from 'react-router-dom';
import { useCredits, useIdDetails } from '../hooks/useMovieDetails';
import './moviedetails.scss';

const MovieDetails = () => {
	const { id } = useParams();

	const { data: idDetails, error } = useIdDetails(id);
	const { data: credits } = useCredits(id);

	const director = credits?.crew.filter((el) => el.job === 'Director');
	const writers = credits?.crew.filter((el) => el.department === 'Writing');
	const cast = credits?.cast.slice(0, 3);
	const date = new Date(idDetails?.release_date);

	if (error) return <p className='error'>Error Fetching Date</p>;
	return (
		<>
			<div className='sidebar'>
				<a
					href='#'
					className='sidebar__label'
				>
					<img
						src='/src/assets/logo.svg'
						alt='MovieBox Logo'
						className='sidebar__logo'
					/>
					<p className='nav__link--description sidebar__label--text'>
						MovieBox
					</p>
				</a>

				<div className='sidebar__links'>
					<Link
						to={'/'}
						className='sidebar__links--redirect'
					>
						<img
							src='/src/assets/Home.svg'
							alt='Home Icon'
						/>
						Home
					</Link>
					<a
						href=''
						className='sidebar__links--redirect active'
					>
						<img
							src='/src/assets/Movie Projector.svg'
							alt='Movie Projector Icon'
						/>
						Movies
					</a>
					<a
						href=''
						className='sidebar__links--redirect'
					>
						<img
							src='/src/assets/TV Show.svg'
							alt='TV Show Icon'
						/>
						TV Series
					</a>
					<a
						href=''
						className='sidebar__links--redirect'
					>
						<img
							src='/src/assets/Calendar.svg'
							alt='Calendar Icon'
						/>
						Upcoming
					</a>
				</div>

				<div className='play'>
					<h4 className='play__header'>
						Play movie quizes and earn free tickets
					</h4>
					<p className='play__description'>
						50k people are playing now
					</p>

					<button className='btn__play'>Start Playing</button>
				</div>

				<a
					href='#'
					className='logout sidebar__links--redirect'
				>
					<img
						src='/src/assets/Logout.svg'
						alt='Logout Icon'
					/>
					Logout
				</a>
			</div>
			<div className='movie-details'>
				<div
					className='poster'
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/original${idDetails?.backdrop_path})`,
					}}
				></div>
				<div className='movie-details__description'>
					{idDetails && (
						<div className='details'>
							<div className='details__title'>
								<h3
									className='heading-3'
									data-testid='movie-title'
								>
									{idDetails?.title}
								</h3>
								•
								<p
									className='release'
									data-testid='movie-release-date'
								>
									{date.toUTCString()}
								</p>
								•
								<p
									className='runtime'
									data-testid='movie-runtime'
								>
									{idDetails?.runtime}
								</p>
								•
								{idDetails?.genres.map((el) => (
									<p
										key={el.id}
										className='genre'
									>
										{el.name}
									</p>
								))}
							</div>
							<div className='details__ratings'>
								<img
									src='/src/assets/Star.svg'
									alt='Star Image'
								/>
								<p>
									{' '}
									<span className='details__ratings--average'>
										{idDetails?.vote_average
											.toString()
											.slice(0, 3)}
									</span>{' '}
									|{' '}
									<span className='details__ratings--total'>
										350k
									</span>
								</p>
							</div>
						</div>
					)}
					<div className='overview'>
						<div className='overview--1'>
							<p
								className='overview__text'
								data-testid='movie-overview'
							>
								{idDetails?.overview}
							</p>

							<div className='overview__cast'>
								{director && (
									<div className='overview__cast--details'>
										<p className='cast__title'>
											Directors:{' '}
										</p>
										{director?.map((el, i) =>
											i !== director?.length ? (
												<p
													key={el.id}
													className='cast__name'
												>
													{el.name}
													{', '}
												</p>
											) : (
												<p
													key={el.id}
													className='cast__name'
												>
													{el.name}
												</p>
											)
										)}
									</div>
								)}

								{writers && (
									<div className='overview__cast--details'>
										<p className='overview__card--title'>
											Writers:{' '}
										</p>
										{writers?.map((el, i) =>
											i !== writers?.length ? (
												<p
													key={el.id}
													className='cast__name'
												>
													{el.name}
													{', '}
												</p>
											) : (
												<p
													key={el.id}
													className='cast__name'
												>
													{el.name}
												</p>
											)
										)}
									</div>
								)}
								{cast && (
									<div className='overview__cast--details'>
										<p className='overview__card--title'>
											Stars:{' '}
										</p>
										{cast?.map((el, i) =>
											i !== cast?.length ? (
												<p
													key={el.id}
													className='cast__name'
												>
													{el.name}
													{', '}
												</p>
											) : (
												<p
													key={el.id}
													className='cast__name'
												>
													{el.name}
												</p>
											)
										)}
									</div>
								)}
							</div>
						</div>
						<div className='overview--2'>
							<button className='showtime'>
								<img
									src='/src/assets/Two Tickets.svg'
									alt='Tickets'
								/>
								See Showtime
							</button>
							<button className='options'>
								<img
									src='/src/assets/List.svg'
									alt='List'
								/>
								More Watch Options
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
