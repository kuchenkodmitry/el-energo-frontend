import './App.css';
import Header from './components/header/header';
import ContactUs from './components/footer/contactUs'
import Footer from './components/footer/footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import Services from './components/pages/service/index.'
import Contact from './components/pages/contact';
import About from './components/pages/about';
import CompanyProjects from './components/pages/examples/index.'
import { PostContext, ModalContext, RequestCall } from './components/context/postContext';
import { useEffect, useState } from 'react';
import Post from './components/pages/post/index'
import { ModalWindows } from './components/elements/modal/ModalWindows.jsx';
import { ModalContact } from './components/elements/modal/modalContactUs';
import ScrollToUp from './components/elements/scrollToTop'
import Btncall from './components/elements/btnCall/btncall';
import Admin from './components/pages/admin/admin'
import { PreviousLocationProvider } from './components/context/PreviousLocationContext';
import { fetchPosts } from './redux/slices/posts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchexamples } from './redux/slices/examples';
import { fetchContact } from './redux/slices/contact';

function App() {
  const [postContext, setPostContext] = useState([]);
  const [modalContext, setModalContext] = useState([1]);
  const [requestCall, setRequestCall] = useState('');
  const location = useLocation();

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchexamples());
    dispatch(fetchContact())
  },[])

  useEffect(() => {
    if (location.pathname === '/'){
      
    } else {
      ScrollToUp()
    }
  }, [location.pathname])

  
  return (
    <>
    <PreviousLocationProvider>
    <RequestCall.Provider value={[requestCall, setRequestCall]}>
    <PostContext.Provider value={[postContext, setPostContext]}>
    <ModalContext.Provider value={[modalContext, setModalContext]}>
      <ModalWindows/>
      <ModalContact/>
      <Btncall/>
      {location.pathname.indexOf('admin') === 1 ? "" : <Header/>}
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='services/:id' element={<Post/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='companyProjects' element={<CompanyProjects/>}/>
      <Route path='companyProjects/:id' element={<Post/>}/>
      <Route path="admin" element={<Admin/>}/>
      <Route path='/admin/:params' element={<Admin/>}/>
    </Routes>
    {/* <button onClick={() => {ScrollToUp('UsWorks')}}>to Up</button> */}
      {location.pathname.indexOf('admin') === 1 ? "" : <>
        <ContactUs />
        <Footer />
      </>}

      </ModalContext.Provider>
      </PostContext.Provider>
      </RequestCall.Provider>
      </PreviousLocationProvider>
    </>
  );
}

export default App;
