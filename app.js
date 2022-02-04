const loader_hide=document.querySelector('.loader');
const close=document.querySelector('.close');
const bar=document.querySelector('.bar');
const navbar=document.querySelector('.navbar_menu')
close.addEventListener('click',()=>{
    loader_hide.classList.toggle('loader_hide')
});
bar.addEventListener('click',()=>{
   navbar.classList.toggle('hide')
})