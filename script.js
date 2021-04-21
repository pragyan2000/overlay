'use strict';
const btnShowModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModel = document.querySelector('.close-modal');

//close model function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// open the window
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

//handling clicking overlay area
overlay.addEventListener('click', closeModal);
btnCloseModel.addEventListener('click', closeModal);

//handlisg the Escpace

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
