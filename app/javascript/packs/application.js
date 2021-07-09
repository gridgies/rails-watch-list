// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'bootstrap';

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import { initSelect2 } from '../components/initSelect2';

document.addEventListener("turbolinks:load", () => {

  initSelect2();
});

//= require select2

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


const form = document.querySelector('#search-movies');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // <-- to prevent <form>'s native behaviour
  const input = event.currentTarget.querySelector('.form-control');
  results.innerHTML = '';
  console.log(input.value)
  searchMovies(input.value);
});

const searchMovies = (query) => {
  fetch(`http://tmdb.lewagon.com/search/movie?&query=${query}`)
    .then(response => response.json())
    .then((data) => {
      data.results.forEach((result) => {
        const movie = `<li class="list-inline-item">
          <img src="${result.poster_path}" alt="">
          <p>${result.title}</p>
        </li>`;
        results.insertAdjacentHTML("beforeend", movie);
      });
    });
};
