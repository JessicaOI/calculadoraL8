import './Calculadora.css';

import {useState} from 'react';

//refereniqa de codigo: https://www.youtube.com/watch?v=CMwt6Nwjf9g&ab_channel=BetoMoedano


function Calculadora() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  /*no repite operadores*/
  const updateCalc = value => {
    if(
      ops.includes(value) && calc === ''||
      ops.includes(value) && ops.includes(calc.slice(-1))
    )
    {
      return;
    }

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
    setCalc(calc + value);

  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if(calc == '')
    {
      return;
    }
    const value = calc.slice(0,-1);

    setCalc(value);
  }

  const deleteAll = () => {
    if(calc == '')
    {
      return;
    }
    const value = '';

    setCalc(value);
    setResult(value);
  }

  return (
    <div className="App">
      <div className = "calculator-grid">
        <div className = "output">
          <div className = "numAnterior">{result ? result: ''}</div>
          <div className = "numActual">{calc || "0"}</div>
        </div>
        <button className = "dosEspacios" onClick={deleteAll}>AC</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={()=> updateCalc('/')}>/</button>
        <button onClick={()=> updateCalc('7')}>7</button>
        <button onClick={()=> updateCalc('8')}>8</button>
        <button onClick={()=> updateCalc('9')}>9</button>
        <button onClick={()=> updateCalc('*')}>*</button>
        <button onClick={()=> updateCalc('4')}>4</button>
        <button onClick={()=> updateCalc('5')}>5</button>
        <button onClick={()=> updateCalc('6')}>6</button>
        <button onClick={()=> updateCalc('+')}>+</button>
        <button onClick={()=> updateCalc('1')}>1</button>
        <button onClick={()=> updateCalc('2')}>2</button>
        <button onClick={()=> updateCalc('3')}>3</button>
        <button onClick={()=> updateCalc('-')}>-</button>
        <button onClick={()=> updateCalc('.')}>.</button>
        <button onClick={()=> updateCalc('0')}>0</button>
        <button onClick = {calculate} className = "dosEspacios">=</button>

      </div>
      
    </div>
  );
}

export default Calculadora;
