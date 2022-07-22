//

// function getRecipe() {
//   setTimeout(() => {
//     const recipeId = [128, 290, 490, 389];
//     console.log(recipeId);

//     setTimeout(
//       (id) => {
//         const recipe = {
//           title: "Fresh Tomato Pasta",
//           publisher: "Rayan",
//         };

//         console.log(`${id}: ${recipe.title}`);

//         setTimeout(
//           (publisher) => {
//             const anotherRecipe = [
//               {
//                 title: "Grill Pizza",
//                 publisher: "Rayan",
//               },
//               {
//                 title: "Orange Mangza",
//                 publisher: "Rayan",
//               },
//             ];

//             console.log(anotherRecipe);
//           },
//           1500,
//           recipe.publisher
//         );
//       },
//       1500,
//       recipeId[2]
//     );
//   }, 1500);
// }

// getRecipe();

// PROMISES:

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([128, 290, 490, 389]);
  }, 1500);
});

const getRecipe = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const recipe = {
        title: "Fresh Tomato Pasta",
        publisher: "Rayan",
      };

      resolve(`${id}: ${recipe.title}`);
    }, 1500);
  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const anotherRecipe = [
        {
          title: "Grill Pizza",
          publisher: "Rayan",
        },
        {
          title: "Orange Mangza",
          publisher: "Rayan",
        },
      ];

      resolve(`${publisher}: ${JSON.stringify(anotherRecipe)}`);
    }, 1500);
  });
};

getIDs
  .then((res) => {
    console.log(res);
    return getRecipe(res[2]);
  })
  .then((res) => {
    console.log(res);
    return getRelated("Rayan");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("An Error occured! ", err);
  });
