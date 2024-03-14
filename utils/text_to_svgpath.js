const TextToSVG = require('text-to-svg');
const path = require('path');

export default async function generateSVGText(text, fontPathLocation, x, y, fontSize, fill, stroke) {
    const fontPath = path.resolve(__dirname, fontPathLocation);

    return new Promise((resolve, reject) => {
        TextToSVG.load(fontPath, function (err, textToSVG) {
            if (err) {
                reject(err);
                return;
            }

            const svg = textToSVG.getD(text, { x: x, y: y, fontSize: fontSize, attributes: { fill: fill, stroke: stroke } });
            resolve(svg);
        });
    });
}