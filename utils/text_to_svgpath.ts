const TextToSVG = require('text-to-svg');
// import TextToSVG from 'text-to-svg';

function generateSVGText(text: string): string {
    const attributes = { fill: 'red', stroke: 'black' };
    const options = { x: 40, y: 306, fontSize: 24, attributes: attributes };

    const textToSVG = TextToSVG.loadSync('./public/fonts/MARTIANMONO_SEMIEXPANDED-MEDIUM.otf');
    const svgPath = textToSVG.getD(text, options);

    return svgPath;
}
