const pdfParse = require("pdf-parse");
const fs = require("fs");

const extractPdfText = async (path) => {
    const data = await pdfParse(
        fs.readFileSync(path)
    );

    return data.text;
};

module.exports = extractPdfText;