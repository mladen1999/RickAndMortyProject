import React, {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";

type AuthSearch = {
  data: ``;
  setData: () => {};
  status: string;
  setStatus: () => null;
};

type SearchContextType = {
  data: AuthSearch | null;
  setData: React.Dispatch<React.SetStateAction<AuthSearch | null>>;
  status: any;
  setStatus: Dispatch<SetStateAction<string>>;
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
  const [status, setStatus] = useState("");
  return (
    <SearchContext.Provider value={{ data, setData, status, setStatus }}>
      {children}
    </SearchContext.Provider>
  );
};
