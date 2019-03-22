const shopping = document.getElementById(`shoppinglist`);
const vegetables = document.getElementById(`vegetables`);
const drygoods = document.getElementById(`drygoods`);
const newitemform = document.getElementById(`newItem`);
const filterForm = document.getElementById(`filterCategories`)

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
    // If no list was supplied, use the entire shoppingList
    // Format and output whatever it was told to print (theArrayToPrint)

    let catToShow = filterForm.category.value;

    if ( catToShow != 'all' )
        theArrayToPrint = theArrayToPrint.filter(item => item.cat == catToShow)

    shopping.innerHTML = theArrayToPrint.map(item => `<li class="${item.cat}">${item.qty} ${item.name}</li>`).join('')
}



// ADD A NEW ITEM //////////////////////////////////////////////
// When the form is submit, take the field and add to the list
newitemform.addEventListener('submit', event => {
    // The form was submit, stop the refreshing of the page
    //      (which is what a form wants to do by default)
    event.preventDefault();

    // Get the text from the field
    let groceryItem = newitemform.item.value;
    
    // Clear the text from the field (so we can add a new item again later)
    newitemform.item.value = '';

    // Force focus the input field in case we want to add more
    newitemform.item.focus();

    // Store the category that is currently selected (from filter form)
    let defaultCategory = filterForm.category.value;

    // If the category selected doesn't exist (ex, "all"), default category to: false
    if (defaultCategory == "all")
        defaultCategory = false;

    // Use the current filter category as the default for any new items added
    // Push it into our dataset (Array: shoppingList)
    // Default to 0 quantity, and no category
    shoppingList.push( { name: groceryItem, qty: 0, cat: defaultCategory } );

    // Print the list
    printList();
});



// RADIO-BUTTON FILTERS //////////////////////////////////////////////
// Listen to the whole form, quit if what was clicked was NOT an input field
filterForm.addEventListener('click', event => {
    
    // If NOT an input (radio button), then "return" (quit immediately)
    if (!event.target.matches('input')) return;

    // We know for sure it was an input (radio), find out the value and set it to localstorage
    window.localStorage.setItem('category', filterForm.category.value);

    // Must be a radio button if we got this far. Go ahead and print
    printList();
})


// REMINDER: Ensure that all of this happens on page load.

// Before I print the list when the page first loads up: check if there was a category set
// REMINDER: Deal with the scenario where no category was set!
var theCategory = window.localStorage.getItem('category');
console.log(theCategory);

// Find the radio button that matches the category and set it to "checked"
document.querySelector(`input[value="${theCategory}"]`).setAttribute('checked', 'checked');

// PRINT THE LIST WHEN THE PAGE LOADS //////////////////////////////////
// Default to the WHOLE list when a user arrives at the page
// Could also do this using a document load event
printList();
