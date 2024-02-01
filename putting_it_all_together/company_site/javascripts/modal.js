document.addEventListener("DOMContentLoaded", function () {
  let modal = document.querySelector('#modal');
  let modalLayer = document.querySelector('#modal-layer');
  let modalTitle = modal.querySelector('h3');
  let modalImage = modal.querySelector('img');
  let modalText = modal.querySelector('p');
  let teamLinks = document.querySelectorAll('#team li > a');

  function showModal(event) {
    event.preventDefault();
    let link = event.target.closest('a');
    modalTitle.textContent = link.dataset.name;
    modalImage.src = link.dataset.imageSource;
    modalText.textContent = link.dataset.text;
    modal.setAttribute('class', 'show');
    modalLayer.setAttribute('class', 'show');
  }

  function hideModal(event) {
    event.preventDefault();
    modalTitle.textContent = '';
    modalImage.src = '';
    modalText.textContent = '';
    modal.classList.replace('show', 'hide');
    modalLayer.classList.replace('show', 'hide');
  }

  teamLinks.forEach(link => link.addEventListener("click", showModal))
  document.querySelector('#modal-layer').addEventListener('click', hideModal);
  document.querySelector('#modal a.close').addEventListener('click', hideModal);
  document.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.key === 'Escape') {
      hideModal(event);
    }
  });
});