var urlHash = location.hash;
if(urlHash.length > 0) {
  var firstActive = document.querySelector('a[href="' + urlHash + '"]');
  firstActive.classList.add('active');
}

var links = document.querySelectorAll('.minu__item-link');

links.forEach(e => {
  e.addEventListener('click', l => {
    links.forEach(s => {
      if(s.classList.contains('active'));
      s.classList.remove('active');
    })

    var doActiv = document.querySelector('a[href="' + l.target.hash + '"]');
    doActiv.classList.add('active');
  })
})