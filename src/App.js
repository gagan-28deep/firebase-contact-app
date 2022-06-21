import React , {useReducer , useEffect} from 'react';
import { Container, Col, Row } from "reactstrap";
import {BrowserRouter , Route , Routes} from 'react-router-dom'

// React Toast
import {ToastContainer , toast} from 'react-toastify'
// import 'react-toast/dist/ReactToast.min.css'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// Firebase
// import secrets from './secrets'
import {storage , db , app} from './fireAuth'
import {doc , setDoc ,collection } from 'firebase/firestore';


// Components
import Footer from './layout/Footer';
import Header from './layout/Header';
import AddContact from './pages/AddContact';
import Contacts from './pages/Contacts';
import ViewContact from './pages/ViewContact';
import PageNotFound from './pages/PageNotFound';

// Context ApI Stuff
import reducer from './context/reducer'
import {ContactContext} from './context/GlobalContext'
import {SET_CONTACT , SET_LOADING} from './context/actions.types'

// first state to provide in react-router
const initialState = {
  contacts: [],
  contact: {},
  contactToUpdate: null,
  contactToUpdateKey: null,
  isLoading: false
};


const App = ()=> {
  const [state, dispatch] = useReducer(reducer, initialState);
  // will get contacts from firebase and set it on state contacts array
  // const getContacts = async () => {
  //   dispatch({
  //     type: SET_LOADING,
  //     payload : true
  //   })

  //   const contactsRef = await setDoc(db('contacts'), {
  //     name 
  //     email
  //     phone
  //     type
  //     uid
  //   })
  //   console.log(contactsRef)
  //   dispatch({
  //     type: SET_CONTACT,
  //     payload: contactsRef
  //   })
  // }


   // getting contact  when component did mount
  //  useEffect(() => {
  //   getContacts();
  // }, []);

  return (
    <BrowserRouter>
      <ContactContext.Provider value={{state, dispatch}}>
        <ToastContainer />
        <Header/>
        <Container>
          <Routes>
            <Route path='contact/add' element = {<AddContact/>} />
            <Route path='contact/view' element = {<ViewContact/>} />
            <Route path='/' element = {<Contacts/>} />
            <Route path='*' element = {<PageNotFound/>} />
          </Routes>
        </Container>
        <Footer/>
      </ContactContext.Provider>
    </BrowserRouter>
  );
}

export default App;
