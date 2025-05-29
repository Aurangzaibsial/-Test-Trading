import React from 'react'
import './First.css'
import BELL from '../Images/zaib.jpeg'
import BELL2 from '../Images/Notifications.png'


function Tnavbar  ()  {
  return (
    <div>
      
        <div className="one">
       
            <div className="one11">
      <h3>Dabangh</h3>
      </div>

      <div className="two">
        <h3>Dashboard</h3>
      </div>
      
        <input className='three' type='search' placeholder='search here'/>
    
      <div className="four">
      <label for="cars">Choose a country:</label>

<select id="Country">
  <option value="Pakistan">Pakistan</option>
  <option value="USA">America</option>
  <option value="China">China</option>
  <option value="Russia">Russia</option>
</select>

      </div>
      <div className="pic">
<img src={BELL2} alt="bell" height='25px' />
</div>

<div className="pic">
<img src={BELL} alt="bell" height='30px' />
</div>
<div className="Text">
  <p>Aurangzaib</p>

</div>

      </div>
    </div>
  )
}

export default Tnavbar
