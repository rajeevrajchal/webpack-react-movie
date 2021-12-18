import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from '@chakra-ui/react';

// external styles
import 'react-toastify/dist/ReactToastify.css';
import Landing from './views/landing';

const App = () => {
    return (
        <>
            <ToastContainer position="top-right" />
            <Container maxW={{ base: 'container.md', lg: 'container.lg' }}>
                <Landing />
            </Container>
        </>
    );
};

export default App;
