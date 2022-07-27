import React, { createContext, useContext, useState } from 'react';
const StateContext = createContext();
const baseUrl = 'https://google-search26.p.rapidapi.com/api/v1';
export const ResultContextProvider = ({ children }) => {
    const[results, setResults] = useState([]);
    const[loading, setLoading] = useState(false);
    const[search, setSearch] = useState('');
}
