const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', ()=>{
  burger.classList.toggle('show');
  burger.classList.add('show');
  menu.classList.toggle('show');
})