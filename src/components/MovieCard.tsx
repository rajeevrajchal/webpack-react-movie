/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Box, Text, Stack, Heading, Image, Button } from '@chakra-ui/react';

import { MoviesType } from '../types/movie';
import MovieModal from './MovieModal';
import MovieAuthor from './MovieAuthor';
import { useAppData } from '../context/useAppData';

interface MovieCardProps {
    movie: MoviesType;
}

const MovieCard = (props: MovieCardProps) => {
    // props
    const {
        movie: { id, title, author, description, image, isFavourite },
    } = props;

    const {
        movieReducer: { addToFavourite },
    } = useAppData();

    const [modal, setModal] = useState<boolean>(false);
    const [loadingBtn, setLoadingBtn] = useState<boolean>(false);
    const [movieCardExpand, setMovieCardExpand] = useState<boolean>(false);

    const handleAuthorModal = (e) => {
        e.stopPropagation();
        setModal(true);
    };

    const handleAuthorModalClose = () => {
        setModal(false);
    };
    return (
        <Box
            boxShadow="2xl"
            p="6"
            rounded="md"
            bg="white"
            cursor="pointer"
            onClick={() => setMovieCardExpand(!movieCardExpand)}
            transition="all 100ms ease-in"
            _hover={{
                transform: 'scale(1)',
            }}
        >
            <Stack direction="row" spacing={8}>
                <Box width={'150px'} height={'100px'}>
                    <Image
                        src={image}
                        alt={title || 'movie name'}
                        objectFit={'cover'}
                        height={'100%'}
                        width={'100%'}
                    />
                </Box>
                <Stack direction="column" spacing={4}>
                    <Heading as="h2" fontSize="xl">
                        {title || 'movie name'}
                    </Heading>
                    <Heading as="h5" fontSize="lg" color="gray.500">
                        A space movie
                    </Heading>
                    <Heading
                        as="h2"
                        fontSize="xl"
                        _hover={{
                            color: 'gray.500',
                        }}
                        onClick={(e: any) => handleAuthorModal(e)}
                    >
                        {author || 'author'}
                    </Heading>
                </Stack>
            </Stack>
            {movieCardExpand && (
                <Box marginTop={8}>
                    <Text>
                        {description ||
                            ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodimaxime velit atque, voluptate alias cumque aperiam voluptatem cupiditate, qui sit mollitia fugit. Cupiditate suscipit nobisexercitationem possimus similique. Iusto, facere.'}
                    </Text>
                    <Button
                        colorScheme={isFavourite ? 'blue' : 'teal'}
                        marginTop={8}
                        isLoading={loadingBtn}
                        onClick={(e) => {
                            e.stopPropagation();
                            setLoadingBtn(true);
                            addToFavourite(id)
                                .then(() => setLoadingBtn(false))
                                .catch(() => setLoadingBtn(false));
                        }}
                    >
                        {isFavourite
                            ? 'Remove from favourite'
                            : 'Add to favourite'}
                    </Button>
                </Box>
            )}
            <MovieModal
                isOpen={modal}
                title={author}
                onClose={() => handleAuthorModalClose()}
                children={<MovieAuthor />}
            />
        </Box>
    );
};

export default MovieCard;
