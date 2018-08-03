import React from 'react'
import { observer } from 'mobx-react';

import '../../_core/css/Home.css';

export default observer(({item}) => (
  <li>
    <span style={{textDecoration: `${item.is_done ? "line-through" : ""}`} }>
      {item.name}
      
      <div className="about-items">
        <i style={{float: "right"}}>
          Dodano: {item.id}
        </i>
        {item.is_done && <i style={{float: "right"}}>
          Zakończono: {item.done_time}
        </i>}
        <br/>
        {!item.is_done && 
          <span 
          className="done-button" 
          onClick={item.markDone}> 
          Oznacz jako zrobione 
          </span>}
          <br/>
        {item.is_done && 
          <button 
          style={{float: "right"}} 
          className="btn btn-danger" 
          onClick={item.remove}>
          X
          </button> }<br/><br/>
      </div>
      {/* <input type="checkbox" checked={item.is_done} onChange={item.markDone}/> */}
      
      
    </span>
  </li>
))