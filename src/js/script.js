/* */


const buttonRow = document.querySelectorAll('.button_line');
const images = document.querySelectorAll('.img');


buttonRow.forEach((button_line, indice) => {
    button_line.addEventListener('click', () => {
        inativeButtonSelect();
        button_line.classList.add('select');
        inativeImgActive();
        images[indice].classList.add('active');

    });
});

function inativeImgActive() {
    const imgActive = document.querySelector('.active');
    imgActive.classList.remove('active');
}

function inativeButtonSelect() {
    const buttonSelect = document.querySelector('.select');
    buttonSelect.classList.remove('select');
}
