import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Text, Spinner, Center } from '@chakra-ui/react';

import MovieCard from '../components/MovieCard';
import { useAppData } from '../context/useAppData';
import { MoviesType } from '../types/movie';

const Landing = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const {
        movieReducer: { getMovies, movies },
    } = useAppData();

    useEffect(() => {
        setLoading(true);
        getMovies()
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return (
            <Center display="grid" placeContent="center">
                <Spinner
                    size="xl"
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                />
            </Center>
        );
    }
    return (
        <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={6}
            marginTop={16}
        >
            {Boolean(movies.length) ? (
                movies.map((movie: MoviesType, index: number) => (
                    <GridItem key={`${movie.id}-${movie.title}-${index}`}>
                        <MovieCard movie={movie} />
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
