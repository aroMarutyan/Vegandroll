import 'regenerator-runtime/runtime'; //Polyfilling async/await
import 'core-js/stable'; //Polyfilling everything else
// import icons from '../img/icons.svg'; //Parcel 1
import icons from 'url:../img/icons.svg'; //Parcel 2
import * as model from './model.js';
import recipeView from './views/recipeView.js';

// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// console.log('TEST');

///MOVED to recipeView.js
// const renderSpinner = function (parentEl) {
//   const markup = `
//   <div class="spinner">
//           <svg>
//             <use href="${icons}#icon-loader"></use>
//           </svg>
//         </div>`;
//   parentEl.innerHTML = '';
//   parentEl.insertAdjacentHTML('afterbegin', markup);
// };
///MOVED to recipeView.js

const controlRecipes = async function () {
  try {
    // 1 Creating the ID (hash)
    const id = window.location.hash.slice(1);
    // console.log(id);
    // console.log(model.state);

    if (!id) return;
    recipeView.renderSpinner();
    // renderSpinner(recipeContainer);
    // 2 Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;
    // 3 Rendering recipe
    recipeView.render(model.state.recipe);

    ////MOVED TO model.js
    // const res = await fetch(
    //   `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    //   // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    // );
    // const data = await res.json(); //We need to convert it to JSON. Available on all response objects
    // if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    // let { recipe } = data.data;
    // recipe = {
    //   id: recipe.id,
    //   title: recipe.title,
    //   publisher: recipe.publisher,
    //   sourceUrl: recipe.source_url,
    //   image: recipe.image_url,
    //   servigs: recipe.servigs,
    //   cookingTime: recipe.cooking_time,
    //   ingridients: recipe.ingredients,
    // };

    // console.log(recipe);
    // console.log(data);
    // console.log(recipe.image);
    ////MOVED TO model.js

    // recipeView.render(recipe); //Works with this
    ///MOVED to recipeView.js
    // 3 Rendering recipe
    // const markup = `
    // <figure class="recipe__fig">
    //       <img src="${recipe.image}" alt="${
    //   recipe.title
    // }" class="recipe__img" crossorigin/>
    //       <h1 class="recipe__title">
    //         <span>${recipe.title}</span>
    //       </h1>
    //     </figure>

    //     <div class="recipe__details">
    //       <div class="recipe__info">
    //         <svg class="recipe__info-icon">
    //           <use href="${icons}#icon-clock"></use>
    //         </svg>
    //         <span class="recipe__info-data recipe__info-data--minutes">${
    //           recipe.cookingTime
    //         }</span>
    //         <span class="recipe__info-text">minutes</span>
    //       </div>
    //       <div class="recipe__info">
    //         <svg class="recipe__info-icon">
    //           <use href="${icons}#icon-users"></use>
    //         </svg>
    //         <span class="recipe__info-data recipe__info-data--people">${
    //           recipe.servigs
    //         }</span>
    //         <span class="recipe__info-text">servings</span>

    //         <div class="recipe__info-buttons">
    //           <button class="btn--tiny btn--increase-servings">
    //             <svg>
    //               <use href="${icons}#icon-minus-circle"></use>
    //             </svg>
    //           </button>
    //           <button class="btn--tiny btn--increase-servings">
    //             <svg>
    //               <use href="${icons}#icon-plus-circle"></use>
    //             </svg>
    //           </button>
    //         </div>
    //       </div>

    //       <div class="recipe__user-generated">
    //         <svg>
    //           <use href="${icons}#icon-user"></use>
    //         </svg>
    //       </div>
    //       <button class="btn--round">
    //         <svg class="">
    //           <use href="${icons}#icon-bookmark-fill"></use>
    //         </svg>
    //       </button>
    //     </div>

    //     <div class="recipe__ingredients">
    //       <h2 class="heading--2">Recipe ingredients</h2>
    //       <ul class="recipe__ingredient-list">
    //       ${recipe.ingridients
    //         .map(ing => {
    //           return `<li class="recipe__ingredient">
    //         <svg class="recipe__icon">
    //           <use href="${icons}#icon-check"></use>
    //         </svg>
    //         <div class="recipe__quantity">${ing.quantity}</div>
    //         <div class="recipe__description">
    //           <span class="recipe__unit">${ing.unit}</span>
    //           ${ing.description}
    //         </div>
    //       </li>`;
    //         })
    //         .join('')}
    //     </div>

    //     <div class="recipe__directions">
    //       <h2 class="heading--2">How to cook it</h2>
    //       <p class="recipe__directions-text">
    //         This recipe was carefully designed and tested by
    //         <span class="recipe__publisher">${
    //           recipe.publisher
    //         }</span>. Please check out
    //         directions at their website.
    //       </p>
    //       <a
    //         class="btn--small recipe__btn"
    //         href="${recipe.sourceUrl}"
    //         target="_blank"
    //       >
    //         <span>Directions</span>
    //         <svg class="search__icon">
    //           <use href="${icons}#icon-arrow-right"></use>
    //         </svg>
    //       </a>
    //     </div>`;
    // recipeContainer.innerHTML = '';
    // recipeContainer.insertAdjacentHTML('afterbegin', markup);
    ///MOVED to recipeView.js
  } catch (err) {
    alert(err);
  }
};

// controlRecipes();

///DRY
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
///WET
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
