document.addEventListener("DOMContentLoaded", function () {
  let figure = document.querySelector('figure');
  let figImage = figure.querySelector('img');
  let images = document.querySelectorAll('li a');
  let currentBorder = document.querySelector('li a img')
  
  currentBorder.classList.add('active');

  function setFigure(event) {
    event.preventDefault();
    currentBorder.classList.remove('active');
    let self = event.target.closest('a');
    currentBorder = event.target.closest('img');
    currentBorder.classList.add('active');
    figImage.src = self.dataset.imageSource;
  }

  images.forEach(image => image.addEventListener('click', setFigure))
});