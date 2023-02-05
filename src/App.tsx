import { Route, Routes } from "react-router-dom";
import Header from "./components/HomePage/Header";
import Landing from "./components/HomePage/Landing";
import Layout from "./components/HomePage/Layout";
import SingleNews from "./components/NewsPage/SingleNews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header /><Landing /><Layout /></>} />
        <Route path="/news" element={<SingleNews />} />
      </Routes>
    </div>
  );
}

export default App;
