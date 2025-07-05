import './App.css';
import Header from './components/header/header';
import { BrowserRouter } from "react-router-dom"
import Works from './components/main/works';
import ContactUs from './components/footer/contactUs'
import Footer from './components/footer/footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import Services from './components/pages/services';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import CompanyProjects from './components/pages/companyProjects'
import Admin from './components/pages/admin'
import { PostContext, ModalContext, RequestCall } from './components/context/postContext';
import { useEffect, useState } from 'react';
import PostPage from './components/pages/post'
import { ModalWindows } from './components/elements/modal/ModalWindows.jsx';
import { ModalContact } from './components/elements/modal/modalContactUs';
import { ScrollRestoration } from "react-router-dom"
import ScrollToUp from './components/elements/scrollToTop'
import {Animated} from "react-animated-css";
import Btncall from './components/elements/btnCall/btncall';


function App() {
  const [postContext, setPostContext] = useState([]);
  const [modalContext, setModalContext] = useState([1]);
  const [requestCall, setRequestCall] = useState('');
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/'){
      
    } else {
      ScrollToUp()
    }
  }, [location.pathname])

  return (
    <>
    <RequestCall.Provider value={[requestCall, setRequestCall]}>
    <PostContext.Provider value={[postContext, setPostContext]}>
    <ModalContext.Provider value={[modalContext, setModalContext]}>
      <ModalWindows/>
      <ModalContact/>
      <Btncall/>
      <Header/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='companyProjects' element={<CompanyProjects/>}/>
      <Route path='companyProjects/:id' element={<PostPage/>}/>
      <Route path='admin' element={<Admin/>}/>
    </Routes>
    {/* <button onClick={() => {ScrollToUp('UsWorks')}}>to Up</button> */}
      <ContactUs />
      <Footer />
      </ModalContext.Provider>
      </PostContext.Provider>
      </RequestCall.Provider>
    </>
  );
}

export default App;
