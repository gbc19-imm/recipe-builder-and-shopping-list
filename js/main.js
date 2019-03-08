const shopping = document.getElementById(`shopping`);

const fruits = [
    { name: `apples`, qty: 3, cat: `fruit` },
    { name: `bananas`, qty: 1, cat: `fruit` },
    { name: `strawberries`, qty: 10, cat: `fruit` },
];


shopping.innerHTML = fruits.map(frt => `<li>I need ${frt.qty} ${frt.name}.</li>`).join('');

