/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, createContext } from 'react';

import useMovie from './useMovie';

const appDataContext = createContext<any>({});
const { Provider } = appDataContext;

// setting up the state (reducers)
const useAppDataProvider = () => {
    const movieReducer = useMovie();
    return {
        movieReducer,
    };
};

// setup provider
export const AppDataProvider = ({ children }) => {
    const data = useAppDataProvider();
    return <Provider value={data}>{children}</Provider>;
};

export const useAppData = () => useContext(appDataContext);
