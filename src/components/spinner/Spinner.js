import React from 'react';
import Loading_icon from '../../Assests/img/Loading_icon.gif'
let Spinner= () =>{
    return (
        <React.Fragment>
           <div>
              <img src={Loading_icon} alt="" className='d-block m-auto style={{width:1px}}'/>
           </div>

        </React.Fragment>

    )
}
export default Spinner;
