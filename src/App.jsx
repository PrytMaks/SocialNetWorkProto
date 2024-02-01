import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";

import Login from "./components/Login/Login";
import { useEffect, lazy } from "react";
import { connect } from "react-redux";
import { withRouter } from "./components/hoc/withRouter";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import { withSuspence } from "./components/hoc/withSuspence";


const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);

const DialogsContainerWithSuspence = withSuspence(DialogsContainer);
const ProfileContainerWithSuspence = withSuspence(ProfileContainer);

const App = (props) => {

  useEffect(() => {
    props.initializeApp();

    const catchAllUnhandleErrors = () => {
      alert('Some error occured')
    }
    window.addEventListener('unhandledrejection', catchAllUnhandleErrors);
    return ()=>{
      window.removeEventListener('unhandledrejection', catchAllUnhandleErrors);
    }
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
          <Route path='/'
            element={<Navigate to='/profile'></Navigate>}
          />
          <Route
            path="/profile/:userId?"
            element={<ProfileContainerWithSuspence/>}
          />
          <Route
            path="/dialogs/*"
            element={<DialogsContainerWithSuspence/>}
          />
          <Route
            path="*"
            element={<div>404 not found</div>}
          />
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
