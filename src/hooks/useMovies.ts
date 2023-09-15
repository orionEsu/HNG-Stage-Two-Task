import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie/',
	headers: {
		Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjI1ZjVjYjIxODQ3OTEzMTU5YjY1ZmM1ZDkxMDljNCIsInN1YiI6IjY0ZmU5OGViZmE0MDQ2MDBmZTg0YjQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qd3_Srw1efYWR4Z1GWue88gBlqk_65g5aNqIFSCwGAQ`,
		'Content-Type': 'application/json',
	},
});

const useMovies = () =>
	useQuery({
		queryKey: ['movies'],
		queryFn: () => instance.get('top_rated').then((res) => res.data),
	});

export default useMovies;
