import React from 'react'
import './Visit.css'

 function Visit() {
    const saless={
        price:'400',
        price1:'300',
        price3:'100',
        price4:'200',
        price5:'100'
      }
      const Month={
        jan:'jan',
        feb:'feb',
        Mar:'mar',apr:'Apr',may:'may',june:'jun'
      }
  return (
    <div>

<div className="Graph">
      <div className="visit">
        <h3>Visitor insight</h3>
      </div>

      <div className="visit1">
        <p>{saless.price}</p>
        <p>{saless.price1}</p>
        <p>{saless.price2}</p>
        <p>{saless.price3}</p>
        <p>{saless.price4}</p>

      </div>


      <div className="visit2">
        <p>{Month.jan}</p>
        <p>{Month.feb}</p>
        <p>{Month.Mar}</p>
        <p>{Month.apr}</p>
        <p>{Month.may}</p>
        <p>{Month.june}</p>
      </div>
    </div>

      
    </div>
        
      
    
  )
}

export default Visit
