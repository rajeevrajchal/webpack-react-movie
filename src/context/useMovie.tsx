import { useState } from 'react';
import { toast } from 'react-toastify';

import { MoviesType } from '../types/movie';

const useMovie = () => {
    // states
    const [movies, setMovies] = useState<MoviesType[]>([]);

    // functions
    const getMovies = () => {
        console.log('getting movies');
        setMovies([
            {
                id: 38552,
                image: 'https://yts.mx/assets/images/movies/13_2010/background.jpg',
                title: 'Man in the Saddle',
                title_long: 'Man in the Saddle (1951)',
                isFavourite: false,
                author: 'lorem',
                description:
                    'A small farmer and rancher is being harassed by his mighty and powerfull neighbour. When the neighbour even hires gunmen to intimidate him he has to defend himself and his property by means of violence. —Volker Boehm',
            },
        ]);
    };

    const addToFavourite = (movieID: string | number) => {
        console.log('hello world', {
            movieID,
        });
        toast.success('Moved added to favourite');
    };

    return {
        movies,
        getMovies,
        addToFavourite,
    };
};

export default useMovie;
