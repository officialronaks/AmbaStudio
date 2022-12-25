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
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contactus" element={<Contactus/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/page" element={<Page/>}/>
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
