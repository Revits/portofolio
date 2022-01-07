'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

function openModalWindow(){
    console.log('Button Clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}; 

for(let i=0; i < btnsShowModal.length; i++)
btnsShowModal[i].addEventListener('click', openModalWindow);

function closeModalWindow(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('.hidden')){
        closeModalWindow();
    };
});

