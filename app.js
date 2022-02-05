const loader_hide=document.querySelector('.loader');
const close=document.querySelector('.close');
const bar=document.querySelector('.bar');
const navbar=document.querySelector('.navbar_menu');
const call=document.querySelectorAll('.call');
const call_modal=document.querySelector('.call_modal')
const call_close=document.querySelector('.call_modal_close')

close.addEventListener('click',()=>{
    loader_hide.classList.toggle('loader_hide');
});

bar.addEventListener('click',()=>{
   navbar.classList.toggle('hide');
});

call.forEach(element =>
    element.addEventListener('click',()=>{
        call_modal.classList.toggle('call_hide');
    }));

call_close.addEventListener('click',()=>{
    call_modal.classList.toggle('call_hide');
});