import { useQuery } from '@tanstack/react-query';
import { instance } from './useMovies';

export const useIdDetails = (id) =>
	useQuery({
		queryKey: [`movie-details-${id}`],
		queryFn: () => instance.get(`${id}`).then((res) => res.data),
	});

export const useImdbDetails = (imdbId) =>
	useQuery({
		queryKey: [`movie-details-${imdbId}`],
		queryFn: () => instance.get(`${imdbId}`).then((res) => res.data),
	});

export const useCredits = (id) =>
	useQuery({
		queryKey: [`${id}-credits`],
		queryFn: () => instance.get(`${id}/credits`).then((res) => res.data),
	});

export const useImages = (id) =>
	useQuery({
		queryKey: [`images-${id}`],
		queryFn: () => instance.get(`${id}/images`).then((res) => res.data),
	});
