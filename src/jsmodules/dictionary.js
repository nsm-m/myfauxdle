import { generateWord, WordToGuess, formattedWord } from './wordGenerator.js'


var randomWords = require('random-words');
var validateWord = document.getElementById("submit");

let parsedWordToGuess;
let wordToGuessObject;
let formattedWordToGuess;

$(document).ready(function () {
    let isGeneratedWordValid;

    async function wordValidation(wordInput) {
        await fetch(`/.netlify/functions/dictionary-check?wordGuess=${wordInput}`)
            .then(res =>

                res.json()

            ).then(data => {


                isGeneratedWordValid = data.valid;
                console.log("gennerated word valid?" + isGeneratedWordValid)
            }

            )
        return isGeneratedWordValid;
    }

    let wordCreated;
    var newWord;


    //generateWord()
    // .then(alert("validate word :" + wordToGuessObject.getWordToGuess()))
    generateWord().then(
        $(validateWord).click(function (event) {
            event.preventDefault();

            submitWord();

        })
    );



    // Generates the word the user need to find,
    // - using npm  random-words package to generate the words 
    // - check if word match has 5 letters, 
    //      if not the word must be generated again until a 5 letter word is generated

    async function generateWord() {

        return new Promise((resolve, reject) => {
            let testWord = randomWords();

            let letterCount = testWord.length;


            if (letterCount == 5) {

                console.log("letterCfount is 5");

                wordValidation(testWord).then(
                    (validWord) => {
                        if (validWord = true) {
                            console.log("gennerated word valid from generate word?" + isGeneratedWordValid);

                            let generatedWord = testWord;
                            console.log("word has enought letter : Ready => " + generatedWord);



                            wordToGuessObject = new WordToGuess(generatedWord);
                            //   console.log("wordObject: " + wordToGuessObject.getWordToGuess());


                            let generatedWordExport = JSON.stringify(wordToGuessObject);
                            //  console.log("generatedWordExport: " + generatedWordExport);

                            parsedWordToGuess = JSON.parse(generatedWordExport);
                            // console.log("parsedWord: " + parsedWordToGuess.word);

                            formattedWordToGuess = parsedWordToGuess.word;
                            console.log(" function generateWord => formattedWordToGuess: " + formattedWordToGuess);
                            resolve(formattedWordToGuess);

                            console.log(">>>>>> word generated is valid" + validWord)
                        } else if (validWord = false) {
                            generateWord();
                            console.log("word generated is not in dictionary trying " + validWord)
                        }

                        // Some task on success
                    }
                    ,
                    //  (invalidWord) => {
                    //      console.log("error")
                    //     // Some task on failure
                    // }
                );


            } else {
                console.log(testWord + " doent have the right letter count trying again...");
                generateWord();

            }


            wordToGuessObject;

        });


    }



    let rgBGreen = "rgb(12, 206, 107)";
    let rgbYellow = "rgb(220, 237, 49)";
    let rgbGrey = "rgb(142, 141, 145)";

    const MAX_GUESSES = 6;

    let guessNumber = 0;
    let wordsubmitted = "";
    let count = 0;
    let wordArray = [];
    var lettersCount = 0;

    var elems = document.querySelectorAll(".letter");
    var deleteLetter = document.getElementById("delete");

    var countDisplay = document.getElementById("count");

    $(document).keydown(function (event) {

        if ((wordArray.length !== 0) && (event.key === "Backspace")) {
            alert("del key pressed" + wordArray.length + "/" + event.key);
            removeLetter();

        } else if ((wordArray.length < 5) && (count < MAX_GUESSES)) {


            if (event.keyCode >= 65 && event.keyCode <= 90) {
                let typedLetter = String.fromCharCode(event.keyCode);
                let normalizedLetter = typedLetter.toLowerCase()
                console.log(normalizedLetter);
                wordArray.push(normalizedLetter);
                addelement(normalizedLetter);

                console.log(wordArray);
                console.log(count);
            }


        } else if ((wordArray.length === 5)) {
            if (event.key === "Enter") {
                submitWord();
            } else {

                alert("enough letters validate input!");

            }
        }


    });


    //Function addelement(l) : 
    //- displays the letter picked
    function addelement(l) {
        let lettersCount = wordArray.length;
        // console.log("letters count" + lettersCount)
        var completeWord = document.getElementById(`try${guessNumber + 1}-${lettersCount}`);
        completeWord.innerHTML += l;

    }


    // Function pickLetters():
    // - select letters
    // - create array with the selected letters 
    // - this array is used to be create a word that will be then checked 
    function pickLetters() {

        var clickedBtnID = $(this).attr('value');

        // letter count check
        // console.log("clickedBtnID:" + clickedBtnID);
        if ((wordArray.length < 5) && (count < MAX_GUESSES)) {

            wordArray.push(clickedBtnID);

            // console.log(wordArray);
            // console.log(count);

            addelement(clickedBtnID);

        } else if (wordArray.length > 5) {

            alert("enough letters validate input!: " + clickedBtnID);

        }


    }

    //Gives the user the ability to 
    // Remove/change a letter 

    function removeLetter() {
        let lettersCount2 = wordArray.length;

        var currentWord = document.getElementById(`try${guessNumber + 1}-${lettersCount}`);
        console.log(lettersCount);
        if (lettersCount2 > 0) {
            wordArray.pop();
            $(`#try${guessNumber + 1}-${lettersCount2}`).text("");
            console.log(wordArray);
        }
    }


    //  Check if the letter is present
    //  in the word to find

    function existingLetter(exist) {
        if (exist === true) {
            $(".li").css('color', '#3399ff');

        }
    }




    let wordTested;
    let isValidWord;
    let wordGuess;

    async function submitWord() {

        alert("submit test");

        if ((count < MAX_GUESSES) && (wordArray.length === 5)) {

            wordGuess = wordArray.join("");
            wordsubmitted = wordGuess;


            await fetch(`/.netlify/functions/dictionary-check?wordGuess=${wordGuess}`)
                .then(res =>

                    res.json()

                ).then(data => {


                    isValidWord = data.valid;


                    if ((isValidWord == false)) {
                        alert("word not valid");
                        guessNumber = guessNumber;
                        count = count;
                        wordArray = wordArray;
                    } else {
                        guessNumber = guessNumber + 1;
                        count = count + 1;

                        if (count === MAX_GUESSES) {
                            alert("enough guesses");
                            $(elems).attr("disabled", "disable")
                        }
                        //  console.log(count);
                        wordTested = new WordToTest(wordsubmitted, count);
                        lettersCheck(wordTested.getWordToTest());
                        wordArray = [];
                    }

                    //  console.log("submit word data" + data.word)

                    //  console.log("submit generatedWord data" + data.word)


                    let wordToFind = wordToGuessObject.getWordToGuess();

                    //  console.log("submit wordObject =>>> " + wordToFind)

                    let generatedWordExport = JSON.stringify(wordToFind);
                    //  console.log("generatedWordExport >> " + generatedWordExport);


                    let parsedWord = JSON.parse(generatedWordExport);
                    let formattedWord = parsedWord;

                    //  console.log("parsedWord : " + parsedWord + " - formattedWord : " + formattedWord);



                })

            console.log(isValidWord);




        } else if ((wordArray.length != 5)) {

            // Requires a word made of 5 letter 
            // if not dont allow user to submit the word
            alert(`You're missing letters ${5 - wordArray.length} letters`);

        }


        // displayCount();

        lettersCount = 0;

        return wordGuess;


    }

    function displayCount() {
        // countDisplay.innerHTML += wordTested.getWordToGuessCount();
        countDisplay.innerHTML += wordTested.getWordToGuessCount();
    }


    let isValidLetter;
    let letterExist;


    //  Compares the word to find vs the user input
    //  check letter by letter
    function lettersCheck(wordGuess) {

        newWord = wordGuess;
        console.log("to find" + formattedWordToGuess + "word to guess newWord from lettersCheck : " + newWord)
        //  The 2 words are stored in 2 arrays:
        // - one for the word to guess
        // - a second for the users guess)

        //  Step 1: Check valid letters
        //  Step 1: Check existing letters 

        let validLettersCount = 0;
        let wordToGuess2 = formattedWordToGuess;
        console.log("wordToGuess2 to string lettersCheck : " + wordToGuess2)
        let wtg = wordToGuess2.split('');
        console.log("wtg to string lettersCheck : " + wtg);
        let userGuess = wordTested.getWordToTest();
        let userGuessArray = userGuess.split('');

        console.log("userGuess : " + userGuess + "/ wordToGuess2  => " + wordToGuessObject.word);


        //  Step 1: Check valid letters 
        //  The for... loop compares the 2 arrays
        //  When letters are the same, we remove the letter from both arrays
        //  So they are not included again when checking if they exist in the word the user has to guess   


        for (let i = 0; i < userGuessArray.length; i++) {

            let letterWordToGuess = wtg[i];
            let test = i + 1;
            let lWtT = userGuessArray[i];
            let letterWordToTest = lWtT;
            let listElement = document.getElementById(`try${guessNumber}-${test}`);

            //console.log("test try" + guessNumber + "- " + test);   


            if (letterWordToGuess === letterWordToTest.toLowerCase()) {

                //  console.log("letter word to guess: " + letterWordToGuess + " /letter word to test: " + letterWordToTest + " so letter is valid");
                isValidLetter = true;

                wtg.splice(i, 1, null);
                //  console.log(">>>>>>>>>>>>>>> " + wtg);

                userGuessArray.splice(i, 1, null);

                if (isValidLetter === true) {
                    validLettersCount = validLettersCount + 1;
                    wordTested.validCount = validLettersCount;
                    $(listElement).css('background-color', rgBGreen);

                }
                // console.log("word to guess after validated : " + wtg);
                // console.log("word to test after validated : " + userGuessArray);


                // console.log("WTG: " + wtg);

            }



        }

        //  Step 2: Check existing letters 
        //  The for... loop compares the 2 arrays
        //  If the letter exist it will appear in yellow
        //  Otherwise, that means the letter is false and will appear in grey


        for (let i = 0; i < userGuessArray.length; i++) {

            let letterWordToGuess2 = wtg[i];

            let test2 = i + 1;

            let lWtT2 = userGuessArray[i];

            let letterWordToTest2 = lWtT2;
            let listElement2 = document.getElementById(`try${guessNumber}-${test2}`);
            console.log("test try" + guessNumber + "- " + test2);



            //if ((letterWordToGuess2 != null) && (letterWordToTest2 != null)) {
            console.log("exist test letter word to guess: " + letterWordToGuess2 + " /letter word to test: " + letterWordToTest2 + " so letter is not valid");

            if (letterWordToGuess2 !== letterWordToTest2) {

                if (wtg.includes(letterWordToTest2) === true) {
                    letterExist = true;


                    wtg.splice(i, 1, null);
                    userGuessArray.splice(i, 1, null);
                    wtg.splice(wtg.indexOf(letterWordToTest2), 1, null);

                    console.log(letterWordToTest2 + " is included ");
                    $(listElement2).css('background-color', rgbYellow);
                    //  $(`#${letterWordToTest2}`).css('background-color', '#FFC300');
                    if (letterExist === true) {
                        existingLetter(letterExist);
                    }

                } else {
                    console.log(letterWordToTest2 + "not valid");
                    $(listElement2).css('background-color', rgbGrey);


                }

            } else {
                // console.log(letterWordToTest2 + "error");
            }


            console.log("word to guess after : " + wtg);
            console.log("word to test after: " + userGuessArray);

            //  }
        }

        console.log(wordTested);
        lettersKeyboard();

        // If all the letters are valid generate alert and disable keyboard


        if (wordTested.isWordValid() === true) {



            alert("found");
            $(elems).attr("disabled", "disable")


        }


    }

    function lettersKeyboard() {

        let validLettersCount = 0;
        let wordToGuess2 = newWord;
        let wtg3 = wordToGuess2.split("");

        let userGuess = wordTested.getWordToTest();
        let userGuessArray3 = userGuess.split("");


        let test2 = i + 1;



        for (let i = 0; i < userGuessArray3.length; i++) {
            let letterToFind = wtg3[i];
            let letterTested = userGuessArray3[i];

            let letterWordToTest2 = letterTested;
            console.log("letter to find " + letterToFind + "letter tested " + letterTested);
            if (letterToFind === letterTested) {
                $(`#${letterTested}`).css('background-color', rgBGreen);

            } else if (letterToFind !== letterTested) {
                if (wtg3.includes(letterTested) === true) {

                    if ($(`#${letterTested}`).css("background-color") !== rgBGreen) {
                        $(`#${letterTested}`).css('background-color', rgbYellow);

                    }

                    console.log("existing keybord: " + letterToFind);
                } else {
                    $(`#${letterTested}`).css('background-color', rgbGrey);
                    console.log("invalid letter keybord: " + letterToFind);
                }

            }
        }
    }


    $(deleteLetter).on("click", removeLetter);

    $(elems).on("click", pickLetters);

    //     document.addEventListener("keydown", (event) => {
    //     if(event.key === "Backspace"){
    // //alert("del key pressed");
    // removeLetter();
    //     }
    //     })

    class WordToTest {
        constructor(wordTest, counted, countValidLetters) {
            this.wordTest = wordTest;
            this.counted = counted;
            this.countValidLetters = countValidLetters;

        }

        set validCount(numberOfValidLetters) {
            this.countValidLetters = numberOfValidLetters;
        }

        getWordToTest() {
            return this.wordTest;
        }
        getWordToGuessCount() {
            return this.counted;
        }
        getValidCount() {
            return this.counted;
        }

        isWordValid() {
            if (this.countValidLetters === 5) {

                return true;

            } else {
                return false;
            }


        }



    }









});