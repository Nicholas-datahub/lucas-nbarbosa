// main.js
CustomEase.create("cubic", "0.83, 0, 0.17, 1");
let isAnimating=false;
function splitText(selector){ document.querySelectorAll(selector).forEach(el=>{ el.innerHTML=el.innerText.split("").map(c=>`<span>${c===' ' ? '&nbsp;':c}</span>`).join(""); }); }
function initCards(){ const cards=[...document.querySelectorAll('.slider .card')]; gsap.set(cards,{zIndex:i=>cards.length-i}); gsap.to(cards,{y:(i)=>-15+15*i+'%',z:i=>15*i,duration:1,ease:'cubic',stagger:-0.1}); }
document.addEventListener('DOMContentLoaded',()=>{
  splitText('.copy h1'); initCards();
  gsap.set('h1 span',{y:-200}); gsap.set('.slider .card:last-child h1 span',{y:0});
  document.getElementById('year').textContent=new Date().getFullYear();
  document.querySelector('.slider').addEventListener('click',()=>{
    if(isAnimating) return; isAnimating=true;
    const slider=document.querySelector('.slider'); let cards=[...slider.querySelectorAll('.card')]; const last=cards.pop(),next=cards[cards.length-1];
    gsap.to(last.querySelectorAll('h1 span'),{y:200,duration:0.75,ease:'cubic'});
    gsap.to(last,{y:'150%',duration:0.75,ease:'cubic',onComplete:()=>{ slider.prepend(last); initCards(); gsap.set(last.querySelectorAll('h1 span'),{y:-200}); setTimeout(()=>isAnimating=false,1000); }});
    gsap.to(next.querySelectorAll('h1 span'),{y:0,duration:1,ease:'cubic',stagger:0.05});
  });
});