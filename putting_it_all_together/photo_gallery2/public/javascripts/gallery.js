document.addEventListener('DOMContentLoaded', event => {
  let templates = {};
  let photos;

  document.querySelectorAll('script[type="text/x-handlebars"]').forEach(tmpl => {
    templates[tmpl['id']] = Handlebars.compile(tmpl.innerHTML);
  });

  document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
    Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
  });

  fetch('/photos')
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      getCommentsFor(photos[0].id)
    });

  function renderPhotos() {
    let slides = document.getElementById('slides');
    // slides.insertAdjacentHTML('beforeend', templates.photos({ HandlebarsIdentifier: fetchPath }));
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(id) {
    let photo = photos.filter(item => item.id === id)[0];
    let header = document.querySelector("section > header");
    header.insertAdjacentHTML('beforeend', templates.photo_information(photo));    
  }
  
  function getCommentsFor(id) {
    fetch(`/comments?photo_id=${id}`)
      .then(response => response.json())
      .then(comment_json => {
        let comment_list = document.querySelector("#comments ul");
        comment_list.insertAdjacentHTML('beforeend', templates.photo_comments({ comments: comment_json }));
      });
  }

  function updatePhoto() {
    document.querySelector("#comments ul").innerHTML = '';
    document.querySelector("section > header").innerHTML = '';
    document.getElementById('slides').innerHTML = '';

    renderPhotoInformation(photos[0].id);
    getCommentsFor(photos[0].id)
    renderPhotos();
  }

  function goNext(event) {
    event.preventDefault();
    photos.push(photos.splice(0, 1)[0]);
    
    updatePhoto();
  }

  function goPrev(event) {
    event.preventDefault();
    photos.unshift(photos.splice(photos.lenght - 1, 1)[0]);

    updatePhoto();
  }

  function likeOrFavourite(e) {
    e.preventDefault();
    let button = e.target;
    let buttonType = button.getAttribute("data-property");
    if (buttonType) {
      let href = button.getAttribute("href");
      let dataId = button.getAttribute("data-id");
      let text = button.textContent;

      fetch(href, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: 'photo_id=' + dataId
      })
      .then(response => response.json())
      .then(json => {
        button.textContent = text.replace(/\d+/, json.total);
        fetch("/photos")
          .then(response => response.json())
          .then(json => photos = json);
      });
    }
  }

  function onSubmit(e) {

    e.preventDefault();
    let form = e.target;
    let href = form.getAttribute("action");
    let method = form.getAttribute("method");
    let data = new FormData(form);
    let currentSlideId = photos[0].id;
    data.set('photo_id', currentSlideId);

    fetch(href, {
      method: method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams([...data])
    })
    .then(response => response.json())
    .then(json => {
      let commentsList = document.querySelector('#comments ul');
      console.log(json);
      commentsList.insertAdjacentHTML('beforeend', templates.photo_comment(json));
      form.reset();
    });
  }

  document.querySelector('.next').addEventListener('click', goNext);                                                      
  document.querySelector('.prev').addEventListener('click', goPrev);
  document.querySelector("section > header").addEventListener("click", likeOrFavourite);
  document.querySelector("#comments form").addEventListener("submit", onSubmit);
});