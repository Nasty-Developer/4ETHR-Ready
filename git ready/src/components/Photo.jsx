import { useState } from 'react';

export default function Photo({m}){
  const [available,setAvailable]=useState(Boolean(m.photo));
  return <div className="ph">
    {available
      ? <img src={m.photo} alt={m.name} onError={()=>setAvailable(false)}/>
      : <span aria-hidden="true">{m.name[0]}</span>}
  </div>
}
