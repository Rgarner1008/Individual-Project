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
         // console.log(data);
          displayRandomDrink(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

}
getRandomDrink();

function displayRandomDrink(drink){
    console.log(drink.drinks[0]);
    let drinkSection = document.querySelector('#drinkSect');
    let drinkName = document.createElement('h2');
    drinkName.innerHTML = drink.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement('img');
    img.src = drink.drinks[0].strDrinkThumb;
    drinkSection.appendChild(img);

    for (let i = 1; i<16; i++){

      if(drink.drinks[0] [`strIngredient${i}`] == null){
        break;
      }
        let ingredient = document.createElement('ul');
        ingredient.innerHTML = drink.drinks[0] [`strMeasure${i}`] + ': ' + drink.drinks[0] [`strIngredient${i}`];
        drinkSection.appendChild(ingredient);

    }
    let card = document.createElement('card');
    card.innerHTML = drink.drinks[0].strInstructions;
    drinkSection.appendChild(card);
}