// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'bootstrap';

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import { initSelect2 } from './plugins/init_select2';

initSelect2();

// document.addEventListener("turbolinks:load", () => {
//   initSelect2();
// });

//= require select2

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)



// const autoComplete = (query) => {
//   const url = `http://tmdb.lewagon.com/search/movie?&query=${query}`;

//   fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//       const movies = data.results;
//       movies.forEach((movie) => {
//         results.insertAdjacentHTML('beforeend', `<li>${movie.title}</li>`);
//       });
//     })
//     .catch(console.error);

// };

// const search = document.querySelector("#moviesearch");

// search.addEventListener('keyup', (event) => {
//   const input = event.currentTarget.value;
//   results.innerHTML = '';
//   autoComplete(input);
// });
