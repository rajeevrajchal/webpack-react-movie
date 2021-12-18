import { useState } from 'react';
import { toast } from 'react-toastify';

import { MoviesType } from '../types/movie';
import { callAxios } from '../plugins/call.axios';

const useMovie = () => {
    // states
    const [movies, setMovies] = useState<MoviesType[]>([]);

    // functions
    const getMovies = async () => {
        const response = await callAxios({
            url: 'movies',
            method: 'GET',
        });
        if (response && response.status === 'success') {
            setMovies([...response.movies]);
        } else {
            toast.error('Fetching movie failed');
        }
    };
    const addToFavourite = async (movieID: string | number) => {
        const response = await callAxios({
            url: `movies/${movieID}`,
            method: 'PUT',
        });
        console.log('the response', response);
        // refetch the data
        if (response && response.status === 'success') {
            getMovies();
            toast.success(
                response.movie.isFavourite
                    ? 'Movie marked as favourite'
                    : 'Movie removed from favourite'
            );
        } else {
            // case of error
            toast.error('Action failed');
        }
    };

    return {
        movies,
        getMovies,
        addToFavourite,
    };
};

export default useMovie;
