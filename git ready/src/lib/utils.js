export const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
export const go=id=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
