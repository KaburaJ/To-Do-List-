import React from 'react';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


function Calenda(){
    const [date, setDate] = useState(new Date());
    return(
<div className='calendar'>
      <Calendar onChange={setDate} value={date}/>
      {/* {console.log({...setDate})} */}
      {console.log({date})}
      </div>
    )
    
      
}

export default Calenda;