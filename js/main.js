const shopping = document.getElementById(`shoppinglist`);
const vegetables = document.getElementById(`vegetables`);
const drygoods = document.getElementById(`drygoods`);

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
