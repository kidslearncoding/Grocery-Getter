// Create a array called grocery list
var groceryList = ["apples", "oranges", "cookies", "cheese"]

// Create function to log grocery list
function logGroceryList() {
    console.log(groceryList)
}

// Practice calling function
logGroceryList()



// Create function to log indexed item
function logItemInList() {
    console.log(groceryList[0])
    console.log(groceryList[2])
}

// Practice calling function
logItemInList()



// .push method
// Adding an element to the end
function addNewFood() {
    let newFood = "steak"
    groceryList.push(newFood);
    console.log(`After adding, the grocery array is now: ${groceryList}`);
}

// Practice calling function
addNewFood()



// .pop method
// Removing element from end
function removeLastItem() {
    groceryList.pop()
    console.log(`After using pop, your grocery list is now: ${groceryList}`)
}

// Practice calling function
removeLastItem()



// Create a new array with "new Array" and getting the length
function createFruitArray() {
    const fruits = new Array('Apple', 'Banana');
    console.log(fruits)
    console.log(fruits.length);
}

// Practice calling function
createFruitArray()



// Combining multiple arrays into one
function combineArrays() {
    const array1 = ['a', 'b', 'c'];
    console.log(array1)

    const array2 = ['d', 'e', 'f'];
    console.log(array2)

    const array3 = array1.concat(array2);

    console.log(array3);
}

// Practice calling function
combineArrays()



// The .slice method
function sliceArr() {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));

    console.log(animals.slice(2, 4));
}

// Practice calling function
sliceArr()


// Getting item index
function getItemIndex() {
    const veggies = ['carrot', 'onion', 'tomato', 'cucumber', 'brocoli'];

    console.log(veggies.indexOf('onion'));
    console.log(veggies.indexOf('brocoli'));
}

// Practice calling function
getItemIndex()


// Reversing an array
function reverseArray() {
    const array1 = ['one', 'two', 'three'];
    console.log(array1);

    const reversed = array1.reverse();
    console.log(reversed);
}

// Practice calling function
reverseArray()