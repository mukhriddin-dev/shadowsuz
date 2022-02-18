const loader_hide=document.querySelector('.loader');
const close=document.querySelector('.close');
const bar=document.querySelector('.bar');
const navbar=document.querySelector('.navbar_menu');
const call=document.querySelectorAll('.call');
const call_modal=document.querySelector('.call_modal');
const call_close=document.querySelector('.call_modal_close');
const search_icon=document.querySelectorAll('.carusel_icon');
const model=document.querySelector('.three-d');
const model_close=document.querySelector('.model_close');
const registration=document.querySelector('.registration');
const login_btn=document.querySelector('.login_btn');

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

search_icon.forEach(element=>
element.addEventListener('click',()=>{
    model.classList.toggle('model_hide')
}));
model_close.addEventListener('click',()=>{
    model.classList.toggle('model_hide')
});
login_btn.addEventListener('click',()=>{
    registration.classList.toogle('registration_hide')
});