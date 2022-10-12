//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDogPic)

function getDogPic(){
    let dogBreed = document.querySelector('input').value.toLowerCase()

    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.dogBreed
      document.querySelector('img').src = data.message
      // document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
