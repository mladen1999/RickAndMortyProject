import "./App.css";
import Characters from "./components/Characters/Characters";
import { SearchContextProvider } from "./components/context/SearchContext";
import Navbar from "./components/Navbar/Navbar";
import { QueryClientProvider, QueryClient } from "react-query";
import { Status } from "./components/Status/Status";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
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
