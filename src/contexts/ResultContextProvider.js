import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const baseUrl = "https://google-search26.p.rapidapi.com/api/v1";
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  //video,/search, /images, /news
  const getResults = async (url) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2186bbc6f5mshc18f87ec62fe161p13cc60jsnf011350c3d9e",
        "X-RapidAPI-Host": "google-search26.p.rapidapi.com",
      },
    });
    const data = await response.json();
    setResults(data);
    console.log(data);
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchItem, setSearchItem, loading, setLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};
export const useResultContext = () => useContext(ResultContext);
