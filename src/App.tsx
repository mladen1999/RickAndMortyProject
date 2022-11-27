import "./App.css";
import Characters from "./components/Characters/Characters";
import { SearchContextProvider } from "./components/context/SearchContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <Navbar />
        <Characters />
      </SearchContextProvider>
    </div>
  );
}

export default App;
