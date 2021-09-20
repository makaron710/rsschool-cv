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

/* self-assessment */
console.log('Score: 145 / 150')
console.log('- [x] вёрстка валидная +10');
console.log('- [x] вёрстка семантическая +20');
console.log('- [x] для оформления СV используются css-стили +10');
console.log('- [x] контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы +10');
console.log('- [x] вёрстка адаптивная +10');
console.log('- [±] есть бургер-меню. Но оно присутствует только в mobile версии +5');
console.log('- [x] на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt +10');
console.log('- [x] контакты для связи и перечень навыков оформлены в виде списка ul > li +10');
console.log('- [x] CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10');
console.log('- [x] CV содержит пример кода с сайта codewars с подсветкой кода +10');
console.log('- [x] CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10');
console.log('- [x] CV выполнено на английском языке +10');
console.log('- [x] выполнены требования к Pull Request');
console.log('- [ ] нет видеорезюме автора -10');
console.log('- [x] дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10');