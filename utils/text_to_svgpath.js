const TextToSVG = require('text-to-svg');

export default function generateSVGText(text) {
    if (text === null || text === undefined) {
        return null;
    }

    const svgPath = TextToSVG.load('/fonts/MARTIANMONO_SEMIEXPANDED-MEDIUM.otf', function (err, textToSVG) {
        const svg = textToSVG.getD(text, { x: 40, y: 306, fontSize: 24, attributes: { fill: 'red', stroke: 'black' } });
        // console.log(svg);
        return svg;
    });

    return svgPath;
}
