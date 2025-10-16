import './App.css';
import Header from './components/header/header';
import ContactUs from './components/footer/contactUs'
import Footer from './components/footer/footer';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import { fetchexamples } from './redux/slices/examples';
import { fetchContact } from './redux/slices/contact';

function App() {
  const [postContext, setPostContext] = useState([]);
  const [modalContext, setModalContext] = useState([1]);
  const [requestCall, setRequestCall] = useState('');
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchexamples());
    dispatch(fetchContact());
  }, [dispatch])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const acknowledged = window.localStorage.getItem('privacyNoticeAcknowledged');
      if (!acknowledged) {
        setShowPrivacyNotice(true);
      }
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/'){
      
    } else {
      ScrollToUp()
    }
  }, [location.pathname])

  
  const acknowledgePrivacy = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('privacyNoticeAcknowledged', 'true');
    }
    setShowPrivacyNotice(false);
  };

  return (
    <>
    {showPrivacyNotice && (
      <div className="privacyNoticeOverlay">
        <div className="privacyNoticeCard">
          <h3>Мы бережно относимся к данным</h3>
          <p>Сайт работает без форм обратной связи и не запрашивает ваши персональные данные. Свяжитесь с нами напрямую через указанные контакты.</p>
          <button className="privacyNoticeButton" onClick={acknowledgePrivacy}>Понятно</button>
        </div>
      </div>
    )}
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
