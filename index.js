
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from 'franc';
const langs = require("langs");
const colors = require("colors");
const term = process.argv[2];
const langCode = franc(term);

if (langCode === 'und') {
    console.log("Error: Couldn't figure out the language.".red)
}
else {
    const language = langs.where("3", langCode);
    console.log(`Guess:${language.name}`.green)

}

// const predictedLang = langs.where("3", langCode);
// console.log(predictedLang);

