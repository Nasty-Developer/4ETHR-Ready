import { useState } from 'react';
import Reveal from './Reveal';
import { SITE } from '../data/site';

export default function Contact(){
 const[v,setV]=useState({name:"",email:"",message:""});const[e,setE]=useState({});const[done,setDone]=useState(false);
 const submit=ev=>{ev.preventDefault();const x={};
  if(!v.name.trim())x.name="Enter your name.";
  if(!/^\S+@\S+\.\S+$/.test(v.email))x.email="Enter a valid email address.";
  if(v.message.trim().length<10)x.message="Write at least 10 characters.";
  setE(x);if(!Object.keys(x).length)setDone(true)};
 const F=(k,l,T="input",p={})=><label>{l}<T {...p} value={v[k]} onChange={ev=>setV({...v,[k]:ev.target.value})} aria-invalid={!!e[k]}/><span className="err" role="alert">{e[k]}</span></label>;
 return <section id="contact"><div className="wrap ct">
  <Reveal><h2>Let's build.</h2><p style={{marginTop:20,color:"var(--mute)",maxWidth:"36ch"}}>Have a product, a pitch or a strange idea? Tell us about it.</p>{SITE.email&&<a className="em" href={"mailto:"+SITE.email}>{SITE.email}</a>}</Reveal>
  <Reveal d={.15}>{done?<div className="glass ok"><h3>Message ready, {v.name.split(" ")[0]}.</h3><p>Thanks for reaching out. This demo keeps your message in the browser only.</p><button className="btn" style={{marginTop:20}} onClick={()=>{setDone(false);setV({name:"",email:"",message:""})}}>Write another</button></div>
  :<form className="glass" onSubmit={submit} noValidate>{F("name","Name","input",{autoComplete:"name"})}{F("email","Email","input",{type:"email",autoComplete:"email"})}{F("message","Message","textarea",{rows:4})}<button className="btn" style={{justifySelf:"start"}}>Send message ↗</button></form>}</Reveal></div></section>}
