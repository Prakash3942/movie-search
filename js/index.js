const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieCard = document.querySelector(".movies_section");
const searchMovies = document.querySelector("#search");

const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showMovies(data);
};

getMovies(APIURL);

const showMovies = (data) => {
  data.results.forEach((result) => {
    const imagePath =
      result.poster_path === null
        ? "../images-folder/movies-img.jpg"
        : IMGPATH + result.poster_path;
    //const box = `
    //     <div class="movies-card">
    //     <img
    //       src=src="${IMGPATH + result}"
    //       alt="movies image"
    //       style="width: 100%"
    //     />
    //     <h1>Avengers</h1>
    //     <p class="rating">$19.99</p>
    //     <p>
    //       Some text about the jeans. Super slim and comfy lorem ipsum lorem
    //       jeansum. Lorem jeamsun denim lorem jeansum.
    //     </p>
    //     <p><button>Play...</button></p>
    //   </div>
    //     `;

    const movies_section = document.createElement("div");
    movies_section.classList.add("movies-card");
    movies_section.innerHTML = `
    <img
    src="${imagePath}"
    alt="movies image"
    style="width: 100%"
  />
  <h1>${result.original_title}</h1>
  <p class="rating">${result.vote_average}</p>
  <p>
  
    Some text about the jeans. Super slim and comfy lorem ipsum lorem
    jeansum. Lorem jeamsun denim lorem jeansum.
  </p>
  <p><button>Play...</button></p>
            `;
    movieCard.appendChild(movies_section);
  });
};

searchMovies.addEventListener("keyup", function (event) {
  //   console.log(event.target.value);
  if (event.target.value != "") {
    getMovies(SEARCHAPI + event.target.value);
  } else {
    getMovies(APIURL);
  }
});
