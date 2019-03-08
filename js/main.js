const shopping = document.getElementById(`shoppinglist`);
const vegetables = document.getElementById(`vegetables`);
const drygoods = document.getElementById(`drygoods`);

const FRUIT = `FRUIT`;
const VEG = `VEG`;
const DRY = `DRY`;

const shoppingList = [
    { name: `apples`, qty: 3, cat: FRUIT },
    { name: `bananas`, qty: 1, cat: FRUIT },
    { name: `cucumbers`, qty: 3, cat: VEG },
    { name: `strawberries`, qty: 10, cat: FRUIT },
    { name: `kraft dinner`, qty: 3, cat: DRY },
    { name: `eggplant`, qty: 2, cat: VEG },
];


let fruit = shoppingList.filter(item => item.cat == FRUIT).map(item => `<li class="fruit">${item.qty} ${item.name}</li>`).join('');
let veg = shoppingList.filter(item => item.cat == VEG).map(item => `<li class="veg">${item.qty} ${item.name}</li>`).join('');
let dry = shoppingList.filter(item => item.cat == DRY).map(item => `<li class="dry">${item.qty} ${item.name}</li>`).join('');

shopping.innerHTML = fruit + veg + dry;