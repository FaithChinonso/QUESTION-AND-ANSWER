let btn = document.querySelectorAll(".toggle");
let wrap = document.querySelectorAll(".wrap");

for (let x = 0; x < btn.length; x++) {
    btn[x].addEventListener('click', function () {
        wrap[x].classList.toggle('active');
    })
}