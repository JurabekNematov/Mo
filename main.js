var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elMoviesList = document.querySelector(".js-movies-list");
var elMovieSelect = document.querySelector("#js-select");
function moviesCardCreating(arr){
  
  var movieFragment = new DocumentFragment();
  elMoviesList.innerHTML = "";
  for (const movie of arr) {


    var elMovieItem = document.createElement("li");
    elMovieItem.classList.add("movie-item");
    var elMovieImg = document.createElement("img"); 
    elMovieImg.classList.add("movie-img");
    var elMovieTitle = document.createElement("h3"); 
    elMovieTitle.classList.add("movie-title");
    var elMovieImdbRating = document.createElement("span");
    elMovieImdbRating.classList.add("imdb");
    var elMovieYear = document.createElement("time"); 
    elMovieYear.classList.add("year");
    var elMovieRuntime = document.createElement("time");
    elMovieRuntime.classList.add("text-white");
    var elMovieCategory = document.createElement("p"); 
    elMovieCategory.classList.add("genre");
    var elMovieLink = document.createElement("a");
    elMovieLink.classList.add("more-info");
    
    elMovieImg.setAttribute("src", `https://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`);
    elMovieTitle.textContent = movie.Title;
    elMovieImdbRating.textContent = movie.imdb_rating;
    elMovieYear.textContent = movie.movie_year;
    elMovieRuntime.textContent = movie.runtime;
    elMovieCategory.textContent = movie.Categories;
    elMovieLink.textContent = "More info...";


    elMovieItem.append(elMovieImg, elMovieTitle, elMovieImdbRating, elMovieYear, getTime(movie.runtime), elMovieCategory, elMovieLink);
    movieFragment.appendChild(elMovieItem);
    function getTime(time) {
      
      var hour = Math.floor(time / 60)
      var minut = Math.floor(time % 60)
      
      return `${hour} hrs ${minut} min`
    }; 
  }
  elMoviesList.appendChild(movieFragment);
}

function selectFunc(){
  var newArr = [];
  movies.forEach(item => {
  item.Categories.split("|").forEach(function(getGenre){
    if(!newArr.includes(getGenre)){
      newArr.push(getGenre)
    }
  })
});

newArr.forEach(gen => {
  var elSelectOption = document.createElement("option");
  elSelectOption.textContent = gen;
  elSelectOption.value = gen;
  elMovieSelect.appendChild(elSelectOption);

});
}

elForm.addEventListener("submit", function (evt) {
  
  evt.preventDefault();
  
  var searchValue = elInput.value.trim();
  var selectValue = elMovieSelect.value
  var newRegexp = new RegExp(searchValue, "gi");
  
  var result = movies.filter(item => {

    return item.Title.toString().match(newRegexp) && (item.Categories.includes(selectValue) || selectValue ==("All") 
    );
  });
  
  if(result.length > 0){
    moviesCardCreating(result);
  } else {
    elMoviesList.textContent = "Not Found !"
  }
  
})
moviesCardCreating(movies);
selectFunc();