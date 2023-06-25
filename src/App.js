import { Navigate, Route, Routes} from "react-router";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import PhotoContextProvider from "./context/PhotoContext";

function App() {
  return (
    <PhotoContextProvider>
    <HashRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Navigate to="/mountain"/>}/>
          <Route path="/mountain" element={<Item searchTerm={"mountain"}/>}/>
          <Route path="/beach" element={<Item searchTerm={"beach"}/>}/>
          <Route path="/bird" element={<Item searchTerm={"bird"}/>}/>
          <Route path="/food" element={<Item searchTerm={"food"}/>}/>
          <Route path="search/:searchInput" element={<Search/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
