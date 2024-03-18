import React from 'react';
import {Link} from 'react-router-dom';

let ViewContact =() =>{
    return (
        <React.Fragment>
           <section className="view-contact-intro p-3">
           <div className="container">
              <div className="row">
                <div className="col">
                    <p className="h3 text-warning fw-bold">View Contact</p>
                    <p className="fst-italic">You can view the profile of individuals here by click on eye button</p>
                </div>
              </div>
           </div>
           </section>
          
          <section className="view-contact mt-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulDSF3olTEVxK5pO15lf9pQxBSBdtBin8pM9woDkK-O8P3k7fCeKYLSaUD_Z1on8dzhI&usqp=CAU" alt="" className='contact-img'/>
                    </div>
                    <div className="col-md-8">
                    <ul className='list-group'>
                                    <li className='list-group-item list-group-item-action'>
                                     Name : <span className='fw-bold'>Purushottam Jha</span>
                                    </li>

                                    <li className='list-group-item list-group-item-action'>
                                     Mobile : <span className='fw-bold'>9508685458</span>
                                    </li>

                                    <li className='list-group-item list-group-item-action'>
                                     Email : <span className='fw-bold'>Purushottam@gmail.com</span>
                                    </li>

                                    <li className='list-group-item list-group-item-action'>
                                     Company : <span className='fw-bold'>Accolite x Bounteous digital</span>
                                    </li>

                                    <li className='list-group-item list-group-item-action'>
                                     Title : <span className='fw-bold'>Software engineer intern</span>
                                    </li>

                                    <li className='list-group-item list-group-item-action'>
                                     Group : <span className='fw-bold'>Friend</span>
                                    </li>

                                </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                      <Link to={`/contacts/list`} className='btn btn-warning mg-4'>Back</Link>
                    </div>
                </div>

            </div>
          </section>


        </React.Fragment>
    )
};
export default ViewContact;