



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


