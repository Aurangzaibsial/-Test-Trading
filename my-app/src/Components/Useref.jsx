import React, { useState, useRef, useEffect } from 'react';

function Neww() {
  const [count, setCount] = useState(0);

  function Add() {
    setCount(count + 1);
  }
  function minus(){
    setCount(count-1);
  }
  function reset(){
    setCount(count==0);
  }

  const a = useRef(0);
  const buttonRef=useRef()

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`value is ${a.current}`)
    buttonRef.current.style.backgroundColor='blue';
  });
 
  return (
    <div>
      <p>Count: {count}</p>
      <button ref={buttonRef} onClick={Add}>Add</button>
      <button ref={buttonRef} onClick={minus}>Minus</button>
      <button ref={buttonRef} onClick={reset}>Reset</button>
    </div>
  );
}


export default Neww;
