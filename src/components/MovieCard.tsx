import React, { useState } from 'react';
import { Box, Text, Stack, Heading, Image, Button } from '@chakra-ui/react';

import { MoviesType } from '../types/movie';

interface MovieCardProps {
    addToFavourite: (obj: string | number) => void;
    movie: MoviesType;
}

const MovieCard = (props: MovieCardProps) => {
    // props
    const {
        addToFavourite,
        movie: { id, title, author, description, image, isFavourite },
    } = props;

    const [movieCardExpand, setMovieCardExpand] = useState<boolean>(false);

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
                transform: 'scale(1.05)',
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
                    <Heading as="h2" fontSize="xl">
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
                        colorScheme="blue"
                        marginTop={8}
                        onClick={(e) => {
                            e.stopPropagation();
                            addToFavourite(id);
                        }}
                    >
                        {isFavourite
                            ? 'Remove from favourite'
                            : 'Add to favourite'}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default MovieCard;
