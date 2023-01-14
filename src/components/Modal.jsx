import {React} from 'react'
import "./Modal.css"


const Modal = ({closeModal}) => {
  return (
    <>
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
            <button onClick={()=>closeModal(false)}>x</button>
            </div>
           
            <div className='title'>
                <h1> Are you sure</h1>
            </div>
            <div className='body'>next page </div>
           <div className='footer'>
            <button onClick={()=>closeModal(false)} id="cancelBtn">Cancel</button>
            <button>Continue</button>
           </div>
         </div>
    </div>
    </>
  )
}

export default Modal