

function getRandomDrink(letter){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+letter)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
         // console.log(data);
          displayRandomDrink(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

} 

var array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"]
for(var i =0;i<array.length;i++){
var letter = array[i]
console.log(array[i]);
getRandomDrink(letter);
}



function displayRandomDrink(drink){
  for(i=0;i<drink.drinks.length;i++){
    let drinkSection = document.querySelector('#drinkSect');
    let drinkName = document.createElement('h2');
    drinkName.innerHTML = drink.drinks[i].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement('img');
    img.src = drink.drinks[i].strDrinkThumb;
    drinkSection.appendChild(img);

    for (let j = 1; j<16; j++){

      if(drink.drinks[i] [`strIngredient${j}`] == null){
        break;
      }
        let ingredient = document.createElement('ul');
        ingredient.innerHTML = drink.drinks[i] [`strMeasure${j}`] + ': ' + drink.drinks[i] [`strIngredient${j}`];
        drinkSection.appendChild(ingredient);

    }
    let card = document.createElement('card');
    card.innerHTML = drink.drinks[i].strInstructions;
    drinkSection.appendChild(card);
  }
}