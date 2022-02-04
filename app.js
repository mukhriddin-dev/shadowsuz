const loader_hide=document.querySelector('.loader');
const close=document.querySelector('.close');
close.addEventListener('click',()=>{
    loader_hide.classList.toggle('loader_hide')
});
