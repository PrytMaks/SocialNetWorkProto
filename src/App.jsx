import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/DIalogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.app_wrapper}>
        <Header />
        <Navbar />
        <div className={s.app_wrapper_content}>
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/dialogs/*" element={<Dialogs/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
