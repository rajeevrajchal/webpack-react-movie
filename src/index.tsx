import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { AppDataProvider } from './context/useAppData';
const app = (
    <ChakraProvider resetCSS={true}>
        <AppDataProvider>
            <App />
        </AppDataProvider>
    </ChakraProvider>
);
ReactDOM.render(app, document.getElementById('root'));
