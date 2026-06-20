// progress bar + sticky header
var hdr=document.getElementById('hdr'),prog=document.getElementById('progress');
function onScroll(){var y=window.scrollY||document.documentElement.scrollTop;if(hdr)hdr.classList.toggle('scrolled',y>40);if(prog){var h=document.documentElement.scrollHeight-document.documentElement.clientHeight;prog.style.width=(h>0?(y/h*100):0)+'%';}}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
// mobile menu
var burger=document.getElementById('burger'),menu=document.getElementById('mobileMenu'),ov=document.getElementById('overlay');
function toggleMenu(){if(!menu)return;var open=menu.classList.toggle('open');burger.classList.toggle('active',open);if(ov)ov.classList.toggle('show',open);document.body.style.overflow=open?'hidden':'';}
if(burger)burger.addEventListener('click',toggleMenu);
if(ov)ov.addEventListener('click',toggleMenu);
if(menu)menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){if(menu.classList.contains('open'))toggleMenu();});});
// reveal on scroll
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:0.12,rootMargin:'0px 0px -7% 0px'});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
// doctor filter
var filts=document.querySelectorAll('.filt');
if(filts.length){filts.forEach(function(b){b.addEventListener('click',function(){document.querySelector('.filt.active').classList.remove('active');b.classList.add('active');var f=b.getAttribute('data-filter');document.querySelectorAll('.doc').forEach(function(d){var show=(f==='all')||d.getAttribute('data-spec').split(' ').indexOf(f)>-1;d.classList.toggle('hide',!show);});});});}
// treatment cost calculator
var calc=document.getElementById('calc');
if(calc){var fmt=function(n){return n.toLocaleString('ru-RU')+' \u20bd';};var recalc=function(){var sum=0;calc.querySelectorAll('input[type=checkbox]:checked').forEach(function(i){sum+=parseInt(i.getAttribute('data-price'),10);});var t=document.getElementById('calcTotal');t.textContent=sum>0?fmt(sum):'0 \u20bd';var c=document.getElementById('calcCount');if(c)c.textContent=calc.querySelectorAll('input[type=checkbox]:checked').length;};calc.querySelectorAll('input[type=checkbox]').forEach(function(i){i.addEventListener('change',recalc);});recalc();}
// booking form
var form=document.getElementById('bookForm');
if(form)form.addEventListener('submit',function(e){e.preventDefault();form.style.display='none';var s=document.getElementById('success');if(s)s.classList.add('show');});
