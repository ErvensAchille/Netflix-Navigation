// open and close button by element with the class open-btn

const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', function (e) {
  nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', function() {
  nav.forEach(nav_el => nav_el.classList.remove('visible'))

});
