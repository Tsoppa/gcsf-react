import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomePage/HomeLayout";
import AboutPage from "./components/AboutPage";
import MainLayout from "./components/MainLayout";
import NewsFeed from "./components/NewsPage/NewsFeed";
import SingleNews from "./components/NewsPage/SingleNews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path={"/news/:id"} element={<SingleNews />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
