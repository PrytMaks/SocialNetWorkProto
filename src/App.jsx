import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header/Header';
//import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/DIalogs";

const App = () => {
  return (
    <div className={s.app_wrapper}>
      <Header/>
      <Navbar/>
      <div className={s.app_wrapper_content}>
        <Dialogs/>
        {/* <Profile/> */}
      </div>
      
     
    </div>
  );
};

export default App;
