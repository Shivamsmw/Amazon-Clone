import React from "react";
import { products } from "../utility/Data";
import { createContext } from "react";
export const SearchContext = createContext();
const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = React.useState([]);
  const [sortArray, setSortArray] = React.useState(products);
  const handleSort = val => {
    setSortArray(val);
  };
  return (
    <SearchContext.Provider
      value={{ search, setSearch, sortArray, handleSort }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
