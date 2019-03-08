const shopping = document.getElementById(`shopping`);
const fruits = [`apples`, `bananas`, `strawberries`];
fruits.push(`grapes`);
fruits.push(`kiwi`);

shopping.innerHTML = fruits.map(frt => `<li>I need ${frt}.</li>`).join('');

