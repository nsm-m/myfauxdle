var generatedWord = "";
let wordObject;
export var generatedWordExport;
export var formattedWord;

export class WordToGuess {
    constructor(word) {
        this.word = word;
    }

    getWordToGuess() {
        return this.word;
    }
}


export async function generateWord() {

    await fetch(`/.netlify/functions/random-word`)
        .then(res =>

            res.json()

        ).then(data => {

            generatedWord = data;
            wordObject = new WordToGuess(generatedWord);
            generatedWordExport = JSON.stringify(wordObject);
            let parsedWord = JSON.parse(generatedWordExport);
            formattedWord = parsedWord.word;

            //  console.log("testing" + formattedWord);
            //  console.log(wordObject);
            //  console.log('Success:', generatedWord);

        })

    return formattedWord;

}


//generateWord();