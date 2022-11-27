import React, { useState, createContext } from "react";

type AuthSearch = {
  data: ``;
  setData: () => {};
};

type SearchContextType = {
  data: AuthSearch | null;
  setData: React.Dispatch<React.SetStateAction<AuthSearch | null>>;
};

type SearchContextProviderProps = {
  children: React.ReactNode;
};

// export const UserContext = createContext<UserContextType | null>(null)
export const SearchContext = createContext({} as SearchContextType);

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [data, setData] = useState<AuthSearch | null>(null);
  return (
    <SearchContext.Provider value={{ data, setData }}>
      {children}
    </SearchContext.Provider>
  );
};
