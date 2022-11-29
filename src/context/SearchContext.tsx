import React, {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";

// Type
type AuthSearch = {
  character: ``;
  setCharacter: () => {};
  characterStatus: string;
  setCharacterStatus: () => null;
};

// Type
type SearchContextType = {
  character: AuthSearch | null;
  setCharacter: React.Dispatch<React.SetStateAction<AuthSearch | null>>;
  characterStatus: any;
  setCharacterStatus: Dispatch<SetStateAction<string>>;
};

// Type
type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContext = createContext({} as SearchContextType);

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [character, setCharacter] = useState<AuthSearch | null>(null);
  const [characterStatus, setCharacterStatus] = useState("");
  return (
    <SearchContext.Provider
      value={{ character, setCharacter, characterStatus, setCharacterStatus }}
    >
      {children}
    </SearchContext.Provider>
  );
};
