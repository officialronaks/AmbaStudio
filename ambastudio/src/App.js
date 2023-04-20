import './App.css';
import Contactus from './components/contactus';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Page from './components/page';
import Signup from './components/signup';
import Login from './components/login';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
function App() {
  return (
    <>
    <div className='space-x-40 space-y-40 bg-slate-600 text-white'>
      <Header/>
    </div>

    <div>
    <BrowserRouter>
        <Routes>
          <Route exact path="/AmbaStudio" element={<Home/>} />
          <Route exact path="/AmbaStudio/contactus" element={<Contactus/>} />
          <Route exact path="/AmbaStudio/login" element={<Login/>} />
          <Route exact path="/AmbaStudio/signup" element={<Signup/>} />
          <Route exact path="/AmbaStudio/page" element={<Page/>}/>
        </Routes>
    </BrowserRouter>
    </div>

    <div>
      <Footer/>
    </div>
    </> 
  );
}

export default App;
