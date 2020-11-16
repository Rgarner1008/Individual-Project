



const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");



async function getDrinkBySearch(term){
const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + term);

const respData = await resp.json();
const drinks = respData.drinks;

return drinks;
}


searchBtn.addEventListener('click', () => {
 const search = searchTerm.value;
 console.log(getDrinkBySearch(search));
});


function getRandomDrink(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

}
getRandomDrink();


