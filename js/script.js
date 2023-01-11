const btnBlur = document.querySelector('#blur');
const btnShadow = document.querySelector('#shadow');
const btnInvert = document.querySelector('#invert');
const btnOpacity = document.querySelector('#opacity');
const btnSepia = document.querySelector('#sepia');
const showFilter = document.querySelector('.paragraphF');


function blur(){
    let all =['invert', 'drop-shadow', 'opacity', 'sepia'];
    showFilter.classList.add('blur');
    showFilter.classList.remove(...all);
}

function shadow(){
    let all =['invert', 'blur', 'opacity', 'sepia'];
    showFilter.classList.add('drop-shadow');
    showFilter.classList.remove(...all);
}

function invert(){
    let all =['blur', 'drop-shadow', 'opacity', 'sepia'];
    showFilter.classList.add('invert');
    showFilter.classList.remove(...all);
}

function opacity(){
    let all =['blur', 'drop-shadow', 'invert', 'sepia'];
    showFilter.classList.add('opacity');
    showFilter.classList.remove(...all);
}

function sepia(){
    let all =['blur', 'drop-shadow', 'invert', 'opacity'];
    showFilter.classList.add('sepia');
    showFilter.classList.remove(...all);
}

function removeAll(){
    let all =['blur', 'drop-shadow', 'invert', 'opacity', 'sepia'];
    showFilter.classList.remove(...all);
}

btnBlur.addEventListener('click', blur );
btnShadow.addEventListener('click', shadow);
btnInvert.addEventListener('click', invert);
btnOpacity.addEventListener('click', opacity);
btnSepia.addEventListener('click', sepia);
showFilter.addEventListener('click', removeAll);

////////////////////////////////////////////////////////////////

const btnBefore = document.querySelector('#before');
const btnAfter = document.querySelector('#after');
const btnFirstLetter = document.querySelector('#first-letter');
const btnBFirstLine = document.querySelector('#first-line');
const showPseudo = document.querySelector('.paragraphP');


btnBefore.addEventListener('click', e =>{
    let all = ['pseudo2', 'pseudo3', 'pseudo4'];
    showPseudo.classList.add('pseudo1');
    showPseudo.classList.remove(...all); 
});

btnAfter.addEventListener('click', e =>{
    let all = ['pseudo1', 'pseudo3', 'pseudo4'];
    showPseudo.classList.add('pseudo2');
    showPseudo.classList.remove(...all); 
});

btnFirstLetter.addEventListener('click', e =>{
    let all = ['pseudo1', 'pseudo2', 'pseudo4'];
    showPseudo.classList.add('pseudo3');
    showPseudo.classList.remove(...all); 
});

btnBFirstLine.addEventListener('click', e =>{
    let all = ['pseudo1', 'pseudo2', 'pseudo3'];
    showPseudo.classList.add('pseudo4');
    showPseudo.classList.remove(...all); 
});

showPseudo.addEventListener('click', e =>{
    let all = ['pseudo1', 'pseudo2', 'pseudo3', 'pseudo4'];
    showPseudo.classList.remove(...all); 
});
