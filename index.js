function randomizeRestaurants(){
	  var restaurantArray = ["7e", "fishhead noodle", "shitty chinese food"]
  	  randomNumber = Math.floor(Math.random()* restaurantArray.length)
  	  document.getElementById('restaurant').innerHTML = restaurantArray[randomNumber]
  }

  function cycleRestaurants(){
  	 x = setInterval(randomizeRestaurants, 300);
  }

function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');

  // Replace 'functionName' with the name of the function that you have written
  
  startBtn.addEventListener("click", cycleRestaurants);

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", clear);
}

function clear() {
	clearInterval(x);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);