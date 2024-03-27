import React, {useState}  from 'react'

import './Counter.css'

  function Counter () {

  const [number, setNumber] = useState(0);

  const handleDecrement = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  const handleIncrement = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const handleInputChange = (e) => {
    const inputvalue = parseInt(e.target.value);
    if(!isNaN (inputvalue)) {
        setNumber(inputvalue);
    }
  };


    return (
      <div className="main">
        <h2>WelCome To The Counter</h2>
        <div className="main-container">
            
            <div className="main-container-left">
                <button id='btn1' onClick={handleDecrement} className="negative">-</button>
            </div>
            <div className="main-container-center">
                <input type='number' placeholder='Enter Number' className="input" value={number} onChange={handleInputChange} id="input" />
            </div>
            <div className="main-container-right">
                <button id='btn2' onClick={handleIncrement} className="positive">+</button>
            </div>
        </div>
      </div>
    )
}

export default Counter