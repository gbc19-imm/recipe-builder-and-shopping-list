const fruits = document.getElementById(`fruits`);
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


fruits.innerHTML = shoppingList
                    .filter(item => item.cat == FRUIT)
                    .map(item => `<li>I need ${item.qty} ${item.name}.</li>`)
                    .join('');

vegetables.innerHTML = shoppingList
                    .filter(item => item.cat == VEG)
                    .map(item => `<li>I need ${item.qty} ${item.name}.</li>`)
                    .join('');

drygoods.innerHTML = shoppingList
                    .filter(item => item.cat == DRY)
                    .map(item => `<li>I need ${item.qty} ${item.name}.</li>`)
                    .join('');


