const TextToSVG = require('text-to-svg');

const attributes = { fill: 'red', stroke: 'black' };
const options = { x: 0, y: 0, fontSize: 24, anchor: 'top', attributes: attributes };

// Argument is file path (NOT URL)
const textToSVG = TextToSVG.loadSync('./public/fonts/borna.ttf');
const svg = textToSVG.getSVG('SHIVANG PARMAR', options);
console.log(svg);