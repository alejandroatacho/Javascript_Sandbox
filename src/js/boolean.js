const inputElement = document.querySelector('#touch_me_kek');
const color1Element = document.getElementById('color_1');
const color2Element = document.getElementById('color_2');
const color3Element = document.getElementById('color_3');

inputElement.addEventListener('input', function () {
    const color = inputElement.value.toLowerCase();
    console.log(`You have chosen ${color}!`);

    color1Element.style.visibility = 'hidden';
    color2Element.style.visibility = 'hidden';
    color3Element.style.visibility = 'hidden';

    if (color === 'green') {
        color1Element.style.visibility = 'visible';
        console.log('The light is green.');
    } else if (color === 'yellow') {
        color2Element.style.visibility = 'visible';
        console.log('The light is yellow.');
    } else if (color === 'red') {
        color3Element.style.visibility = 'visible';
        console.log('The light is red.');
    } else if (color === 'all') {
        color1Element.style.visibility = 'visible';
        color2Element.style.visibility = 'visible';
        color3Element.style.visibility = 'visible';
        console.log('All Lights Are Turned On!.');
    } else {
        console.log('Invalid color.');
    }
});
