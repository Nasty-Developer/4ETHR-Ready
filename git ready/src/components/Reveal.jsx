import { useRef, useState, useEffect } from 'react';

export default function Reveal({children,d=0,as:T="div",className="",...p}){
 const r=useRef();const[on,setOn]=useState(false);
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);o.disconnect()}},{threshold:.12});o.observe(r.current);return()=>o.disconnect()},[]);
 return <T ref={r} className={"rv "+(on?"in ":"")+className} style={{"--d":d+"s"}} {...p}>{children}</T>}
