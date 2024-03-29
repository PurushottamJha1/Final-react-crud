import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { ContactService } from '../../../services/ContactService';

let ContactList =() =>{

    let [state,setState]=useState({
        loading : false,
        contacts :[],
        errorMessage : ''
    });
  
    useEffect(
       
        ()=>{
       const fn=async () =>{
        setState({...state,loading : true});
        const getVal=await ContactService.getAllContacts();
         setState({...state,
            loading:false,
        contacts: getVal.data});
       }


       fn();
       
    },[]);

    let {loading,contacts,errorMessage}=state;

    return (
        <React.Fragment>
          
           <section className='contact-search p-3'>
             <div className="container">
                 <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">Contact Manager
                               <Link to={'/contacts/add'} className='btn btn-primary ms-2'> 
                               <i className='fa fa-plus-circle me-2'/> 
                               New</Link>
                            </p>
                        
                        <p className="fst-italic">Broad view of all contacts saved</p>
                        </div>
                    </div>
                <div className="col-md-6">
                    <form className='row'>
                     
                     <div className="col">
                     <div className="mb-2">
                            <input type="text"className='form-control' placeholder='Search Names' />
                        </div>
                     </div>

                        <div className="col">
                        <div className="mb-2">
                        <input type="submit" className='btn btn-outline-dark' value='Search'/>
                     </div>

                        </div>
                    

                    </form>
                </div>

                 </div>
             </div>
           </section>
      {
        loading ? <spinner/> : <React.Fragment>
          <section className="contact-list">
            <div className="container">
                <div className="row">

                      {
                         contacts.length>0 && contacts.map(contact =>{
                            return (
                                  
                    <div className="col-md-6 key={contact.id}">
                    <div className="card my-2">
                        <div className="card-body">
                          
                          <div className="row align-items-center d-flex justify-content-around">

                          <div className="col-md-4">
                          <img src={contact.photo} alt=""className='img-fluid contact-img' />
                            </div>
                           
                           <div className="col-md-7">
                            <ul className='list-group'>
                                <li className='list-group-item list-group-item-action'>
                                 Name : <span className='fw-bold'>{contact.name}</span>
                                </li>

                                <li className='list-group-item list-group-item-action'>
                                 Mobile : <span className='fw-bold'>{contact.mobile}</span>
                                </li>

                                <li className='list-group-item list-group-item-action'>
                                 Email : <span className='fw-bold'>{contact.email}</span>
                                </li>

                            </ul>

                           </div>
                           
                           <div className="col-md-1 d-flex flex-column align-items-center ">
                              <Link to={`/contacts/view/${contact.id}`}className='btn btn-warning my-1'> 
                              <i className='fa fa-eye' />
                              </Link>
                              
                              <Link to={`/contacts/edit/:contactId`}className='btn btn-primary my-1'> 
                              <i className='fa fa-pen' />
                              </Link>

                              <button className='btn btn-danger my-1'> 
                              <i className='fa fa-trash' />
                              </button>

                           </div>
                          </div>
                        </div>
                    </div>
                </div>


                /* <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                          
                          <div className="row align-items-center d-flex justify-content-around">

                          <div className="col-md-4">
                          <img src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png" alt=""className='img-fluid contact-img' />
                            </div>
                           
                           <div className="col-md-7">
                            <ul className='list-group'>
                                <li className='list-group-item list-group-item-action'>
                                 Name : <span className='fw-bold'>Purushottam</span>
                                </li>

                                <li className='list-group-item list-group-item-action'>
                                 Mobile : <span className='fw-bold'>9508685458</span>
                                </li>

                                <li className='list-group-item list-group-item-action'>
                                 Email : <span className='fw-bold'>Purushottam@gmail.com</span>
                                </li>

                            </ul>

                           </div>
                           
                           <div className="col-md-1 d-flex flex-column align-items-center ">
                              <Link to={`/contacts/view/:contactId`}className='btn btn-warning my-1'> 
                              <i className='fa fa-eye' />
                              </Link>
                              
                              <Link to={`/contacts/edit/:contactId`}className='btn btn-primary my-1'> 
                              <i className='fa fa-pen' />
                              </Link>

                              <button className='btn btn-danger my-1'> 
                              <i className='fa fa-trash' />
                              </button>

                           </div>
                          </div>
                        </div>
                    </div>
                </div> */

                            )
                         })
                      }
                    
                </div>
            </div>
          </section>


</React.Fragment>

      }
          
        </React.Fragment>
    )
};
export default ContactList;