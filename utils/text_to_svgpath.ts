const TextToSVG = require('text-to-svg');

const attributes = { fill: 'red', stroke: 'black' };
const options = { x: 40, y: 306, fontSize: 24, attributes: attributes };

// Argument is file path (NOT URL)
const textToSVG = TextToSVG.loadSync('./public/fonts/MARTIANMONO_SEMIEXPANDED-MEDIUM.otf');
const svg = textToSVG.getD('SHIVANG PARMAR', options);
console.log(svg);