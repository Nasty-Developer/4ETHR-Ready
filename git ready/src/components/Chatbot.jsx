import { useState, useEffect, useRef } from 'react';
import { SITE } from '../data/site';
import { TEAM } from '../data/team';
import { PROJECTS } from '../data/projects';

export default function Chatbot({close}){
 const Q={"Who is 4ETHR?":SITE.purpose+" "+SITE.nameMeaning,
 "Who is Tanvi?":()=>TEAM[0].name+" is a "+TEAM[0].role+". "+TEAM[0].intro,
 "Who is Sharanya?":()=>TEAM[1].name+" is a "+TEAM[1].role+". "+TEAM[1].intro,
 "Who is Yash?":()=>TEAM[2].name+" is a "+TEAM[2].role+". "+TEAM[2].intro,
 "What projects do you have?":()=>"We have "+PROJECTS.length+" projects: "+PROJECTS.map(p=>p.title).join(", ")+".",
 "What technologies do you use?":()=>[...new Set(PROJECTS.flatMap(p=>p.tech).concat(TEAM.flatMap(t=>t.skills)))].join(", ")+".",
 "How can I contact you?":()=>SITE.email?"Email "+SITE.email+" or use the form in the Contact section.":"Use the form in the Contact section."};
 const[log,setLog]=useState([{b:1,t:"Welcome to the 4ETHR concept lab. Ask about the team, our work, or the tools we use."}]);
 const[input,setInput]=useState("");const[typing,setTyping]=useState(false);
 const end=useRef();const first=useRef();const timer=useRef();
 useEffect(()=>{first.current?.focus();const k=e=>e.key==="Escape"&&close();addEventListener("keydown",k);return()=>{removeEventListener("keydown",k);clearTimeout(timer.current)}},[close]);
 useEffect(()=>{if(end.current)end.current.scrollTop=end.current.scrollHeight},[log,typing]);
 const answerFor=q=>{const a=Q[q];return a?(typeof a==="function"?a():a):"That is outside this small demo, but the Contact section is a good place to start a conversation with 4ETHR."};
 const ask=q=>{
   const clean=q.trim();if(!clean||typing)return;
   setInput("");setTyping(true);setLog(l=>[...l,{t:clean}]);
   timer.current=setTimeout(()=>{setLog(l=>[...l,{b:1,t:answerFor(clean)}]);setTyping(false)},520);
 };
 const submit=e=>{e.preventDefault();ask(input)};
 return <div className="glass chat" role="dialog" aria-modal="false" aria-label="4ETHR AI concept assistant">
   <div className="chat-head">
    <div className="chat-brand"><div className="ai-mark" aria-hidden="true"><i/><i/><i/></div><div><b>4ETHR AI</b><span>Frontend concept · local demo</span></div></div>
    <button className="chat-close" onClick={close} aria-label="Close AI assistant">Close</button>
   </div>
   <div className="ai-visual" aria-label="Abstract monochrome AI network visual" role="img">
    <div className="ai-grid"/><div className="ai-orbit ai-orbit-a"/><div className="ai-orbit ai-orbit-b"/><div className="ai-core"><span>4E</span></div>
    <span className="ai-node n1"/><span className="ai-node n2"/><span className="ai-node n3"/><span className="ai-node n4"/>
   </div>
   <div className="chat-note">A curated interface for exploring our people and projects. Responses are simulated in your browser.</div>
   <div className="msgs" ref={end} aria-live="polite">{log.map((m,i)=><div key={i} className={"m "+(m.b?"b":"u")}>{m.t}</div>)}{typing&&<div className="m b typing" aria-label="Assistant is composing"><i/><i/><i/></div>}</div>
   <div className="qs">{Object.keys(Q).slice(0,4).map((q,i)=><button key={q} ref={i?null:first} onClick={()=>ask(q)} disabled={typing}>{q}</button>)}</div>
   <form className="chat-compose" onSubmit={submit}>
    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask something about 4ETHR" aria-label="Ask the 4ETHR AI concept" disabled={typing}/>
    <button className="chat-send" type="submit" disabled={!input.trim()||typing} aria-label="Send question">Send</button>
   </form>
 </div>}
