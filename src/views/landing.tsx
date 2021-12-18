import React, { useEffect } from 'react';
import { Grid, GridItem, Center, Text } from '@chakra-ui/react';

import MovieCard from '../components/MovieCard';
import { useAppData } from '../context/useAppData';
import { MoviesType } from '../types/movie';

const Landing = () => {
    const {
        movieReducer: { getMovies, addToFavourite, movies },
    } = useAppData();

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={6}
            marginTop={16}
        >
            {Boolean(movies.length) ? (
                movies.map((movie: MoviesType) => (
                    <GridItem key={movie.id}>
                        <MovieCard
                            key={movie.id}
                            addToFavourite={addToFavourite}
                            movie={movie}
                        />
                    </GridItem>
                ))
            ) : (
                <Center>
                    <Text>No Movies</Text>
                </Center>
            )}
        </Grid>
    );
};

export default Landing;
