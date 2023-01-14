
import {React,useState} from 'react'
import './App.css';
import Modal from './components/Modal';


function App() {

  const [openModal,setOpenModal] =useState(false)
 
 

  return (
    <>
    <div className='App'>
      <h1>click here !!!!</h1>
      <button className='openModalBtn' onClick={()=>{
        setOpenModal(true);
      }} >Open</button>
      { openModal && <Modal closeModal={setOpenModal}/>}
    </div>
    </>
  );
}

export default App;
