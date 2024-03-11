const TextToSVG = require('text-to-svg');
const path = require('path');

export default async function generateSVGText(text) {
    const fontPath = path.resolve(__dirname, '/fonts/MARTIANMONO_SEMIEXPANDED-MEDIUM.otf');

    return new Promise((resolve, reject) => {
        TextToSVG.load(fontPath, function (err, textToSVG) {
            if (err) {
                reject(err);
                return;
            }

            const svg = textToSVG.getD(text, { x: 40, y: 306, fontSize: 24, attributes: { fill: 'red', stroke: 'black' } });
            resolve(svg);
        });
    });
}
