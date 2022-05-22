import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const CountsContext = createContext();

const CountContextComponent = ({ children }) => {
    const [counts, SetCounts] = useState({
        pending: 0,
        confirmed: 0,
        declined: 0
    });


    const updateCounts = async () => {
        const { data } = await axios.get('api/registration/getcounts');
        SetCounts(data);
    }

    useEffect(() => {
        updateCounts();
    }, [])

    return (
        <CountsContext.Provider value={{ counts, updateCounts }}>
            {children}
        </CountsContext.Provider>
    )
}
const UseCounts = () => {
    return useContext(CountsContext);
}
export { CountContextComponent, UseCounts };
