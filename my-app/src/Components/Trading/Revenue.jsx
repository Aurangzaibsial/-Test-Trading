import React from 'react'
import './Revenue.css'

const Revenue = () => {
    const sales={
        price:'400',
        price1:'300',
        price3:'100',
        price4:'200',
        price5:'100'
      }
      const Monthh={
        jan:'Mon',
        feb:'Tue',
        Mar:'wed',apr:'Thur',may:'Fri',june:'Sat'
      }
  
  return (
    <div>

<div className="sale22">
      <p> {sales.price}</p>
      <p>{sales.price1}</p>
      <p>{sales.price2}</p>
      <p>{sales.price3}</p>
      <p>{sales.price4}</p>
      <p>{sales.price5}</p>
      </div>

      <div className="sale23">
      <p>{Monthh.jan}</p>
      <p>{Monthh.feb}</p>
      <p>{Monthh.Mar}</p>
      <p>{Monthh.may}</p>
      <p>{Monthh.june}</p>
      
    
      </div>
      
    </div>
  )
}

export default Revenue
