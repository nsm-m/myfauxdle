
var generatedWord = "";

export var generatedWordExport;
export var formattedWord;

let testWord;

export class WordToGuess {
    constructor(word) {
        this.word = word;
    }

    getWordToGuess() {
        return this.word;
    }
}

let wordToRegister;


// export function generateWord() {

//     return new Promise((resolve, reject) => {
//         testWord = randomWords();

//         let letterCount = testWord.length;


//         if (letterCount == 5) {
//             generatedWord = testWord;
//             console.log("word has enought letter : Ready => " + generatedWord);

//             wordToGuessObject = new WordToGuess(generatedWord);
//             console.log("wordObject: " + wordToGuessObject.getWordToGuess());


//             generatedWordExport = JSON.stringify(wordToGuessObject);
//             console.log("generatedWordExport: " + generatedWordExport);

//             let parsedWord = JSON.parse(generatedWordExport);
//             console.log("parsedWord: " + parsedWord);

//             formattedWord = parsedWord.word;
//             console.log(" formattedWord: " + formattedWord);
//             resolve(formattedWord);

//         } else {
//             console.log(testWord + " doent have the right letter count trying again...");
//             generateWord();

//         }



 
//     });

// } 

 