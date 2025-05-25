// main.js
CustomEase.create("cubic","0.83,0,0.17,1");
let anim=false;
function splitSpans(sel){document.querySelectorAll(sel).forEach(el=>{el.innerHTML=el.textContent.split('').map(c=>`<span>${c===' ' ? '&nbsp;':c}</span>`).join('');});}
function init(){splitSpans('.copy h1');const c=[...document.querySelectorAll('.slider .card')];gsap.set(c,{zIndex:i=>c.length-i});gsap.to(c,{y:i=>-15+15*i+'%',z:i=>15*i,duration:1,ease:'cubic',stagger:-0.1});gsap.set('h1 span',{y:-200});gsap.set('.slider .card:last-child h1 span',{y:0});}
document.addEventListener('DOMContentLoaded',()=>{init();document.getElementById('year').textContent=new Date().getFullYear();document.querySelector('.slider').addEventListener('click',()=>{if(anim)return;anim=true;const s=document.querySelector('.slider'),c=[...s.querySelectorAll('.card')],l=c.pop(),n=c[c.length-1];gsap.to(l.querySelectorAll('h1 span'),{y:200,duration:.75,ease:'cubic'});gsap.to(l,{y:'150%',duration:.75,ease:'cubic',onComplete:()=>{s.prepend(l);init();anim=false;}});gsap.to(n.querySelectorAll('h1 span'),{y:0,duration:1,ease:'cubic',stagger:.05});});});
