let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");
let q3 = document.querySelector(".q3");
let first = document.querySelector(".first-js-class");
let second = document.querySelector(".second-js-class");
let third = document.querySelector(".third-js-class");
let icon = document.querySelector(".checkbox-icon");
let checkbox = document.querySelector(".checkbox");
let questionOpen = true;

checkbox.addEventListener("click", ()=> {
    if(questionOpen) {
        icon.classList.add('open')
        questionOpen = false;
    } else {
        icon.classList.remove('open');
        questionOpen = true;
    }
});

q1.addEventListener("click", ()=> {
    if(questionOpen) {
        first.classList.add('open')
        questionOpen = false;
    } else {
        first.classList.remove('open');
        questionOpen = true;
    }
});

q2.addEventListener("click", ()=> {
    if(questionOpen) {
        second.classList.add('open')
        questionOpen = false;
    } else {
        second.classList.remove('open');
        questionOpen = true;
    }
});

q3.addEventListener("click", ()=> {
    if(questionOpen) {
        third.classList.add('open')
        questionOpen = false;
    } else {
        third.classList.remove('open');
        questionOpen = true;
    }
});
