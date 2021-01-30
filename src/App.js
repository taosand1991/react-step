import React, {useState} from 'react'
import AddressInfo from './components/registration/AddressInfo';
import CompanyInfo from './components/registration/CompanyInfo';
import PersonalInfo from './components/registration/PersonalInfo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

  




function App() {
  const [state, setState] = useState({currentIndex:0, prevPage:true, nextPage:false})

  const increaseIndex = (e) => {
    e.preventDefault();
    const box = document.querySelectorAll('.box')
    const steps = document.querySelectorAll('.steps');
    steps[registration.length - 1].classList.add('change')
    box[registration.length - 1].classList.add('change');
  }

  
  const increasePage = () => {
    if(state.currentIndex < registration.length - 1){
      const box = document.querySelectorAll('.box')
      const steps = document.querySelectorAll('.steps');
      const line = document.querySelectorAll('.line');
      steps[state.currentIndex].classList.add('change')
      box[state.currentIndex].classList.add('change');
      line[state.currentIndex].classList.add('change');

      return setState({...state, currentIndex: state.currentIndex + 1, prevPage: false})
    }else{
      return setState({...state, nextPage:true, prevPage:false})
    }  
  }

  const decreasePage = () => {
    const box = document.querySelectorAll('.box')
    const steps = document.querySelectorAll('.steps');
    const line = document.querySelectorAll('.line');
    steps[state.currentIndex].classList.remove('change')
    box[state.currentIndex].classList.remove('change');
    line[state.currentIndex].classList.remove('change');
      return setState({currentIndex: state.currentIndex - 1})
}

const registration = [
  {name:'personal', page:<PersonalInfo increasePage={increasePage} decrease={decreasePage}/>},
  {name:'address', page:<AddressInfo increasePage={increasePage} decreasePage={decreasePage}/>},
  {name:'company', page:<CompanyInfo increaseIndex={increaseIndex} decreasePage={decreasePage}/>},
]

  return (
    <div className="main-page">
      <div className='personal-headings'>
         <h5>Welcome to your registration page</h5>
      </div>
      <div className="counter-stage">
        <div className='steps'>
          <div className='box'>
            <i className='fa fa-user'/>
          </div>
          <h5>Personal Info</h5>
          <div className='line'></div>
        </div>
        <div className='steps'>
        <div className='box'>
            <i className='fa fa-address-book-o'/>
          </div>
          <h5>Address Info</h5>
          <div className='line'></div>
        </div>
        <div className='steps'>
        <div className='box'>
            <i className='fa fa-building'/>
          </div>
          <h5>Company Info</h5>
          <div className='line'></div>
        </div>
      </div>
      {/* <div onClick={decreasePage} className={state.currentIndex <= 0 ? 'left-arrow dissapear' : 'left-arrow'}>
        <i className='fa fa-arrow-left'/>
      </div> 
      <div onClick={increasePage} className={state.currentIndex === registration.length - 1 ? 'right-arrow dissapear' : 'right-arrow'}>
        <i className='fa fa-arrow-right'/>
      </div> */}
      {registration[state.currentIndex].page}
    </div>
  );
}

export default App;
