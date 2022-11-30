import { QueryClientProvider, QueryClient } from "react-query";

// Components
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import { Status } from "./components/Status";

// Context
import { SearchContextProvider } from "./context/SearchContext";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App ">
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <Navbar />
          <Status />
          <Characters />
        </SearchContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
