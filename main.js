// console.log('connected')

// const frame = document.getElementById('forbidden-frame').contentWindow.document;
// frame.open();
// frame.write('lalalala'); 

console.log('clicked')

// const modalDiv = document.createElement("DIV");
// modalDiv.className = "modal";
// document.body.appendChild(modalDiv);

// const modalContentDiv = document.createElement("DIV");
// modalContentDiv.className = "modal-content";
// modalDiv.appendChild(modalContentDiv);

// const closeModal = document.createElement("DIV");
// closeModal.className = "close-button";
// modalContentDiv.appendChild(closeModal);

// const recipeName = document.createElement("h1");



{/* <button class="trigger">Click here to trigger the modal!</button>
<div class="modal">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h1>Hello, I am a modal!</h1>
    </div>
</div> */}

function fetchData(){
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(function(response){
    return response.json();
  })
    .then(function(json){
      // console.log(json);
      
      // console.log(json.meals[0])

      const ingredients = [];
      let mealInstructions;
      let mealImage;

      Object.keys(json).map(key => {
        // console.log(json[key]);
        const information = json[key];
        for(let i = 0; i < information.length; i++) {
          // console.log(information[i]);
          const info = information[i];

          const mealName = info['strMeal'];
          mealInstructions = info['strInstructions'];
          mealImage = info['strMealThumb'];

          mealInstructions = mealInstructions.replace(/(\r\n|\n|\r)/gm, '<br /><br />');

          // recipeName.innerHTML = mealName;
          // modalContentDiv.appendChild(recipeName);
          document.getElementById('recipe-name').innerHTML = mealName;

          const mealPic = document.createElement('img');
          mealPic.setAttribute('src', mealImage);
          mealPic.className = 'recipe-image';
          document.getElementById('recipe-image-div').appendChild(mealPic);
          

          console.log(mealName);
          console.log(mealInstructions);

          
          
          Object.keys(info).map(keys => {
            
            if(info[keys] !== null) {
              if(keys.includes('strIngredient') && info[keys].length !== 0)
                ingredients.push(info[keys]);
            }
            
          })

          // const infoKeys = Object.keys(info);
          // for(let i = 0; i < Object.keys(info).length; i++) {
          //   if(info[infoKeys[i]] !== null) {
          //     if(keys.includes('strIngredient') && info[infoKeys[i]].length !== 0)
          //       ingredients.push(info[infoKeys[i]]);

          //   }
          // }


        }

      })

      console.log('ingredients', ingredients);

      // const ingredientsDiv = document.createElement("DIV");
      // ingredientsDiv.className = "ingredients-div";
      // modalContentDiv.appendChild(ingredientsDiv);

      // const ingredientsTitle = document.createElement('h3');
      // ingredientsTitle.innerHTML = 'Ingredients:';
      // ingredientsDiv.appendChild(ingredientsTitle);
      // document.getElementsByClassName('ingredients-title').innerHTML = mealName;

      // let ingredientClassName = 'ingredients-list-1';
      for(let i = 0; i < ingredients.length; i++) {
        console.log(ingredients[i]);
        const ingredient = document.createElement('p');
        ingredient.innerHTML = ingredients[i];
        
        
        if(i <= (ingredients.length - 1) / 2) {
          document.getElementById('ingredients-list-1').appendChild(ingredient);
        }
        else 
          document.getElementById('ingredients-list-2').appendChild(ingredient);
          

      }
      // document.getElementById('ingredients-div').appendChild(ingredient);

      // const instructionsDiv = document.createElement("DIV");
      // instructionsDiv.className = "instructions-div";
      // modalContentDiv.appendChild(instructionsDiv);

      // const instructions = document.createElement("p");
      // instructions.className = "instructions";

      document.getElementById('meal-Instructions').innerHTML = mealInstructions;
      // instructions.innerHTML = mealInstructions;
      // modalContentDiv.appendChild(instructions);

    })
  }
fetchData();



// var modal = document.querySelector(".modal");
//     var trigger = document.querySelector(".trigger");
//     var closeButton = document.querySelector(".close-button");

//     function toggleModal() {
//         modal.classList.toggle("show-modal");
//     }

//     function windowOnClick(event) {
//         if (event.target === modal) {
//             toggleModal();
//         }
//     }

//     trigger.addEventListener("click", toggleModal);
//     closeButton.addEventListener("click", toggleModal);
//     window.addEventListener("click", windowOnClick);

// let x = JSON.parse();
// document.addEventListener ('mouseover', function(x) {
//   console.log('inside Event listener')
//   var source = x.srcElement;
//   console.log(x.target.tagName)
//   console.log(source);
//   // if (x.target.tagName === 'A') {
//   if (source.nodeName === 'A') {
//     var link = source.getAttribute('href');
//     console.log('hi');
//     console.log(source.getAttribute('href'));
//   }
// })

// $(function() {
//   $('a').miniPreview();
// });

// window.onload=getExif;

// function getExif() {
//     var img1 = document.getElementById("image1");
//     EXIF.getData(img1, function() {
//         var make = EXIF.getTag(this, "Make");
//         var model = EXIF.getTag(this, "Model");
//         console.log(make);
//         console.log(model);

//         console.log(EXIF.getAllTags(img1));
//         // var makeAndModel = document.getElementById("makeAndModel");
//         // makeAndModel.innerHTML = `${make} ${model}`;
//     });

// }