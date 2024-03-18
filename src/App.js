import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import NavBar from './components/Navbar/navbar';
import ContactList from './components/contacts/ContactList/contactlist';
import ViewContact from './components/contacts/ViewContact/viewcontact';
import AddContact from './components/contacts/AddContact/addcontact';
import EditContact from './components/contacts/EditContact/editcontact';
import Spinner from './components/spinner/Spinner';
let App = () => {
  return (
    <React.Fragment>
      {/* <Spinner/> */}
     <NavBar/>
     <Routes>
      <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/> 
      <Route path={'/contacts/list'} element={<ContactList/>}/>
      <Route path={'/contacts/add'} element={<AddContact/>}/>
      <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
      <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
     

     </Routes>
      </React.Fragment>
  );
}

export default App;
