import './style.scss'

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-bar').classList.toggle('open');
})


document.querySelectorAll('.accordion-item_head').forEach(function (item) {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active')
        item.children[1].classList.toggle('active')
    })
})