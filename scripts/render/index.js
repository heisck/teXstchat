

function renderPage() {
  if (window.innerWidth <= 600) {
    setPage('grid', 'none', 'none', 'flex', 'none');

    const messageCont = document.querySelector('#message-cont');
    const contactCont = document.querySelector('#contact-cont');    

    contactCont.addEventListener('click', (e) => {

      if (e.target.matches('.contact-card') || e.target.closest('.contact-card')) {

        setPage('none', 'grid', 'flex', 'none', 'flex');
      }
    })

    messageCont.addEventListener('click', (e) => {

      if (e.target.matches('.back-arrow')) {

        setPage('grid', 'none', 'none', 'flex', 'none');
      }
    })
  }
  else {
    setPage('grid', 'grid', 'none', 'flex', 'flex');
  }
}

renderPage();
window.addEventListener('resize', () => renderPage());

function setPage(cont, msg, bk, sec, thd) {

  const messageCont = document.querySelector('#message-cont');
  const contactCont = document.querySelector('#contact-cont');
  const backBtn = document.querySelector('.back-arrow');
  const second = document.querySelector('#header-div-2');
  const third = document.querySelector('#header-div-3');

  contactCont.style.display = cont;
  messageCont.style.display = msg;
  backBtn.style.display = bk;
  second.style.display = sec;
  third.style.display = thd;
}