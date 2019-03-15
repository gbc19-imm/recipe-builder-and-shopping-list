const shopping = document.getElementById(`shoppinglist`);
const vegetables = document.getElementById(`vegetables`);
const drygoods = document.getElementById(`drygoods`);
const newitemform = document.getElementById(`newItem`);

const FRUIT = `fruit`;
const VEG = `veg`;
const DRY = `dry`;

const shoppingList = [
    { name: `apples`, qty: 3, cat: FRUIT },
    { name: `bananas`, qty: 0, cat: FRUIT },
    { name: `cucumbers`, qty: 3, cat: VEG },
    { name: `strawberries`, qty: 10, cat: FRUIT },
    { name: `kraft dinner`, qty: 0, cat: DRY },
    { name: `eggplant`, qty: 2, cat: VEG },
];

// GENERIC PRINTER //////////////////////////////////////////////
// Will clear out the current list to replace with a new list
function printList(theArrayToPrint = shoppingList) {
    // Default list is the entire shoppingList
    // Format and output whatever it was told to print (theArrayToPrint)
    shopping.innerHTML = theArrayToPrint.map(item => `<li class="${item.cat}">${item.name} (${item.qty})</li>`).join('')
}

newitemform.addEventListener('submit', event => {
    // The form was submit, stop the refreshing of the page
    event.preventDefault();

    // Get the text from the field
    let groceryItem = newitemform.item.value;
    // console.log(`I need to buy: ${groceryItem}`);
    
    // Clear the text from the field (so we can add a new item again later)
    newitemform.item.value = '';

    // Push it into our dataset (Array: shoppingList)
    shoppingList.push(
        { name: groceryItem, qty: 0, cat: false }
    );

    // Re-print the list
    printList();

});










// BUTTON FILTERS //////////////////////////////////////////////
// Each button that needs to be a filter needs its own click listener

// Filter to Fruit
document.getElementById('filterFruit').addEventListener('click', event => {
    printList( shoppingList.filter(item => item.cat == FRUIT) );
});

// Filter to Veg
document.getElementById('filterVeg').addEventListener('click', event => {
    printList( shoppingList.filter(item => item.cat == VEG) );
});

// Filter to Dry 
document.getElementById('filterDry').addEventListener('click', event => {
    printList( shoppingList.filter(item => item.cat == DRY) );
});

// Filter to the entire list
document.getElementById('filterAll').addEventListener('click', event => {
    printList( );
});


// STARTING DEFAULT LIST //////////////////////////////////////////////
// Default to the WHOLE list when a user arrives at the page
printList()
