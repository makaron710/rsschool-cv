var urlHash = location.hash;
if(urlHash.length > 0) {
  var firstActive = document.querySelector('a[href="' + urlHash + '"]');
  firstActive.classList.add('active');
}

var links = document.querySelectorAll('.minu__item-link');

links.forEach(e => {
  //console.log(window.innerWidth);
  e.addEventListener('click', l => {
    links.forEach(s => {
      if(s.classList.contains('active'));
      s.classList.remove('active');
    })

    var doActiv = document.querySelector('a[href="' + l.target.hash + '"]');
    doActiv.classList.add('active');

    if(window.innerWidth <= 991) {
      aside.classList.toggle('burger-out');
      asideShedow.classList.toggle('visible');
    }
  })
})

/* burger */
var closeBurder = document.querySelector('.close-burger');
var aside = document.querySelector('aside');
var asideShedow = document.querySelector('.m_shadow');
var openBurger = document.querySelector('.m_menu-on');

closeBurder.addEventListener('click', () => {
  aside.classList.toggle('burger-out');
  asideShedow.classList.toggle('visible');
})
asideShedow.addEventListener('click', () => {
  aside.classList.toggle('burger-out');
  asideShedow.classList.toggle('visible');
})
openBurger.addEventListener('click', () => {
  aside.classList.toggle('burger-out');
  asideShedow.classList.toggle('visible');
})