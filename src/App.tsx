import { Route, Routes } from "react-router-dom";
import SingleNews from "./components/NewsPage/SingleNews";
import HomeLayout from "./components/HomePage/HomeLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/news" element={<SingleNews />} />
      </Routes>
    </div>
  );
}

export default App;
