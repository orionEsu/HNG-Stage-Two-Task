import { useQuery } from '@tanstack/react-query';

const useRes = (val) => {
	useQuery({
		queryKey: [`search-${val}`],
		queryFn: () => {
			console.log('sent');
		},
	});
};

export default useRes;
