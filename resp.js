let burger=document.querySelector('.burger')
let navbar=document.querySelector('.navbar')
let rightnav=document.querySelector('.rightnav')
let leftnav=document.querySelector('.leftnav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    leftnav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})