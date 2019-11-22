/*

We need to complete a function called chooseRecipe(), which will receive three parameters:

An array of ingredients in stock at Bakery A
An array of ingredients in stock at Bakery B
An array of recipe objects. Each recipe has a name property(string) and an ingredient 
property(array)We are limiting our search to two ingredient recipes. We want to find a recipe 
that utilizes one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.

Note: In the tests there will always be a single correct answer, and you will NOT need to 
consider special cases. For example, you do NOT need to worry about cases where one bakery has 
BOTH the ingredients for a recipe.
*/


const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    for (var i in recipes) {
        for (var j = 0; j < bakeryA.length; j++) {
            for (var k = 0; k < bakeryB.length; k++) {
                for (var m = 0; m < recipes[i].ingredients.length; m++) {
                    if (recipes[i].ingredients.includes(bakeryA[j]) && recipes[i].ingredients.includes(bakeryB[k])) {
                        return (recipes[i].name)
                        break;
                    }
                }
            }
        }
    }
}


const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
const bakeryB = ['milk', 'butter', 'cream cheese']
const recipes = [{
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
]
chooseRecipe(bakeryA, bakeryB, recipes);


//some cool codes from fellow challengers
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    recipe = recipes.filter(i =>
        bakeryA.includes(i.ingredients[0]) && bakeryB.includes(i.ingredients[1]) ||
        bakeryA.includes(i.ingredients[1]) && bakeryB.includes(i.ingredients[0])
    )
    return recipe[0].name
}