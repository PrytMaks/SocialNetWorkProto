import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "./components/hoc/withRouter";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";

import Preloader from "./components/common/preloader/Preloader";

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, [props]);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (


<div className={s.app_wrapper}>
<HeaderContainer />
<Navbar />
<div className={s.app_wrapper_content}>
  <Routes>
    <Route path="/profile/:userId?" element={<ProfileContainer />} />
    <Route path="/dialogs/*" element={<DialogsContainer />} />
    {/* <Route path="/news" element={<News />} />
  <Route path="/music" element={<Music />} />
  <Route path="/settings" element={<Settings />} /> */}
    <Route path="/users" element={<UsersContainer />} />
    <Route path="/login" element={<Login />} />
  </Routes>
</div>
</div>
  );
};
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
