import React from 'react'
import props from 'react'
 
import './Sale.css'
import './N.css'
import './Top.css'
 function Sale() {
    const person = {
        price: "1k$",
        sales: 'Total sales',
        Yes: '+8% from yesterday'
      };

      const order = {
        Totalorder: "300",
        sales: 'Total Order',
        Yes: '+5% from yesterday'
      };
      const product = {
        price: "5",
        sales: 'product sold',
        Yes: '+10% from yesterday'
      };
      const coustmers = {
        price: "8",
        sales: 'New coustmers',
        Yes: '+15% from yesterday'
      };
        const sales={
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
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>

  <div className="all12">
    
        <div className="Today">
<div className="today">
    <h3>Todays Sale</h3>
</div>
<div className="todays">
    <button>Upload</button>
</div>
</div>



    <div className="sales">

      <div className="sale1">
      <p> {person.price}</p>
      <p>{person.sales}</p>
      <p1>{person.Yes}</p1>
      
      </div>

      <div className="sale2">
      <p> {order.Totalorder}</p>
      <p>{order.sales}</p>
      <p1>{person.Yes}</p1>
      </div>

      <div className="sale2">
      <p> {product.price}</p>
      <p>{product.sales}</p>
      <p1>{product.Yes}</p1>
      </div>

      <div className="sale2">
      <p> {coustmers.price}</p>
      <p>{coustmers.sales}</p>
      <p1>{coustmers.Yes}</p1>
      </div>  
      </div> 

      </div>
      <div style={{
        height:'200px'
      }}>
        <div className="AA">

        <div className='A'>
        <div className="All3">

        <h5>Top products</h5>

        <div className="list233">
            # <br />
            1 <br />
            2<br />
            3<br />
            4<br />
            5
           
        </div>
        <div className="name">
            <h5>Important Things</h5>
            <p>Home decor</p>
            <p> Rolex watches</p>
            <p>cars and bikes</p>
            <p>Developer setup</p>

        </div>
         <div className="Range">
        <div class="slidecontainer">
  <h5>Default range </h5>
  <input type="range"></input>
    <input type="range" min="1" max="100" ></input>
  <input type="range" min="1" max="100" ></input>

  <input type="range" min="1" max="100" ></input>
  
  

      </div>

           
    
    
      </div>


      <div className="sales6">
        <h3>sales</h3>
        <p>45%</p>
        <p>29%</p>
        <p>18%</p>
        <p>25%</p>
      </div>


        </div>

        
      
    </div>
      </div>

</div>
     
</div>



  
  )
}

export default Sale
