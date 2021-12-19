import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const MovieAuthor = () => {
    return (
        <Box>
            <Box>
                <Image
                    src={
                        'https://media.gettyimages.com/photos/keanu-reeves-attends-the-john-wick-special-screenings-at-ham-yard-on-picture-id1146739180?s=612x612'
                    }
                    alt={'john wicxkey'}
                    objectFit={'cover'}
                    height={{ base: '50%', lg: "100%'" }}
                    width={'100%'}
                />
            </Box>
            <Box marginTop={8}>
                <Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Placeat veritatis natus nesciunt ratione assumenda facilis
                    quidem corporis pariatur qui, amet ea quas possimus nihil
                    incidunt accusamus. Autem voluptatum assumenda cupiditate.
                </Text>
            </Box>
        </Box>
    );
};

export default MovieAuthor;
