import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.app_wrapper}>
        <HeaderContainer />
        <Navbar />
        <div className={s.app_wrapper_content}>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer />}/>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            {/* <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} /> */}
            <Route path='/users' element={<UsersContainer/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
