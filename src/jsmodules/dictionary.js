import { generateWord, WordToGuess, formattedWord } from './wordGenerator.js'
//
//      $('#submit-word-modal').modal('show');
// $('#lost-word-modal').modal('show');
// $('#invalid-word-modal').modal('show');
// $('#input-error-modal').modal('show');
// $('#success-modal').modal('show');
// $('#').modal('show');
//submit-word-modal lost-word-modal invalid-word-modal input-error-modal success-modal

var randomWords = require('random-words');
var validateWord = document.getElementById("submit");

let parsedWordToGuess;
let wordToGuessObject;
let formattedWordToGuess;

$(document).ready(function () {

    let wordCreated;
    var newWord;
    let isGeneratedWordValid;


    //  This prevents the user from being able to submit a word BEFORE
    //  the WORD TO GUESS has been generated.
    //  This is to prevent errors if the a word was being submitted before a word is generated.
    generateWord().then(
        $(validateWord).click(function (event) {

            event.preventDefault();

            submitWord();

        })
    );


    //
    //  Validate the word thas has been generated
    //  ** The API dictionary used here is not quite complete
    //  therefore some word might not be recognized by the api while still valid.
    //  Therefore we need to validate the word generated and the user input
    //  with the same dictionary
    //

    async function wordValidation(wordInput) {
        await fetch(`/.netlify/functions/dictionary-check?wordGuess=${wordInput}`)
            .then(res =>

                res.json()

            ).then(data => {

                isGeneratedWordValid = data.valid;
                // console.log("Isgenerated word valid? :" + isGeneratedWordValid)
            })
        return isGeneratedWordValid;
    }




    //
    //  Generates the word the user need to find,
    //  - using npm  random-words package to generate the words 
    //  - check if word match has 5 letters, 
    //  if not the word must be generated again until a 5 letter word is generated

    async function generateWord() {

        return new Promise((resolve, reject) => {

            let testWord = randomWords();
            let letterCount = testWord.length;


            if (letterCount == 5) {

                wordValidation(testWord).then(

                    (validWord) => {
                        if (validWord = true) {

                            let generatedWord = testWord;
                            // console.log("generatedWord variable => " + generatedWord);

                            wordToGuessObject = new WordToGuess(generatedWord);
                            let generatedWordExport = JSON.stringify(wordToGuessObject);
                            //  console.log("generatedWordExport: " + generatedWordExport);

                            parsedWordToGuess = JSON.parse(generatedWordExport);
                            // console.log("parsedWord: " + parsedWordToGuess.word);

                            formattedWordToGuess = parsedWordToGuess.word;
                            // console.log(" function generateWord => formattedWordToGuess: " + formattedWordToGuess);
                            resolve(formattedWordToGuess);

                            //console.log(">>>>>> word generated is valid" + validWord)
                        } else if (validWord = false) {
                            generateWord();
                            console.log("word generated is not in dictionary trying " + validWord)
                        }


                    }
                    ,

                );


            } else {
                // console.log(testWord + " doent have the right letter count trying again...");
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

    //
    // Allow users to type from their keybords
    // Note: $('#invalid-word-modal').modal('show');
    //
    // 1/  First If/else statement: we want to allow
    // the user to use the backspace button to remove the last letter added 
    //
    // 2/  Allow user to pick letters as long as:
    // - they still can add letters (their inpt has less than 5 letter)
    // - they havent used all their guesses yet
    // ** The Enter key is ignored as it leads to error => inputs the last letter  
    //
    // 3/   Allow user to use enter key from keyboard to validate and submit the word
    // and checks that the word has 5 characters
    //

    $(document).keydown(function (event) {

        // Keyborad behavior:
        // if Enter Key pressed and the word input is less than 5 letter
        // trigger modal input error     
        // Allow backspace button to remove letter 
        // Only add letters if char key are typed, 
        // if there is enough guesses available 
        // and if there are enough letters available for the input
        // If the enter key is pressed and there are enough letters the word is submitted
        // If there are enough letters and the users attempt to add more
        // a modal will pen with an error message

        if (((event.key === "Enter") || (event.keyCode == 13)) && (wordArray.length != 5)) {
            event.preventDefault;
            console.log("enter key pressed but not enough letters" + event.keyCode);
            $('#input-error-modal').modal('show');
            return false


        } else if ((wordArray.length !== 0) && (event.key === "Backspace")) {

            removeLetter();

        } else if ((wordArray.length < 5) && (count < MAX_GUESSES)) {


            if ((event.keyCode >= 65 && event.keyCode <= 90) && ((event.key !== "Enter" || event.keyCode == 13))) {

                let typedLetter = String.fromCharCode(event.keyCode);
                let normalizedLetter = typedLetter.toLowerCase()
                // console.log(normalizedLetter);
                wordArray.push(normalizedLetter);
                addelement(normalizedLetter);

                // console.log(wordArray);
                //  console.log(count);
            }


        } else if ((event.key === "Enter") && (wordArray.length === 5)) {

            submitWord();

        } else if ((wordArray.length == 5) && (event.keyCode >= 65 && event.keyCode <= 90)) {
            $('#submit-word-modal').modal('show');
            //  alert("yo")
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
        console.log("clickedBtnID:" + clickedBtnID);
        if ((wordArray.length < 5) && (count < MAX_GUESSES)) {

            wordArray.push(clickedBtnID);

            console.log(wordArray);
            // console.log(count);

            addelement(clickedBtnID);

        } else if (wordArray.length == 5) {
            $('#submit-word-modal').modal('show');
            // console.log(" Enough letters validate input! ");

        }


    }

    //Gives the user the ability to 
    // Remove/change a letter 

    function removeLetter() {
        let lettersCount2 = wordArray.length;
        var currentWord = document.getElementById(`try${guessNumber + 1}-${lettersCount}`);
        // console.log(lettersCount);
        if (lettersCount2 > 0) {
            wordArray.pop();
            $(`#try${guessNumber + 1}-${lettersCount2}`).text("");
            //console.log(wordArray);
        }
    }


    //  Check if the letter is present
    //  in the word to find

    function existingLetter(exist) {
        if (exist === true) {
            $(".li").css('color', '#3399ff');

        }
    }


    let isValidLetter;
    let letterExist;

    let wordTested;
    let isValidWord;
    let wordGuess;

    async function submitWord() {

        //  alert("submit test");

        if ((count < MAX_GUESSES) && (wordArray.length === 5)) {

            wordGuess = wordArray.join("");
            wordsubmitted = wordGuess;


            await fetch(`/.netlify/functions/dictionary-check?wordGuess=${wordGuess}`)
                .then(res =>

                    res.json()

                ).then(data => {


                    isValidWord = data.valid;


                    if ((isValidWord == false)) {
                        //   alert("word not valid");
                        $('#invalid-word-modal').modal('show');

                        guessNumber = guessNumber;
                        count = count;
                        wordArray = wordArray;
                    } else {
                        guessNumber = guessNumber + 1;
                        count = count + 1;

                        if (count === MAX_GUESSES) {
                            //alert("enough guesses" + formattedWordToGuess);
                            $('#result').text(formattedWordToGuess);
                            $('#lost-word-modal').modal('show');

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

            // console.log(isValidWord);




        } else if ((wordArray.length < 5)) {

            // Requires a word made of 5 letter 
            // if not dont allow user to submit the word
            //  alert(`You're missing letters ${5 - wordArray.length} letters`);
            $('#input-error-modal').modal('show');

        }




        lettersCount = 0;

        return wordGuess;


    }

    function displayCount() {
        // countDisplay.innerHTML += wordTested.getWordToGuessCount();
        countDisplay.innerHTML += wordTested.getWordToGuessCount();
    }





    //  Compares the word to find vs the user input
    //  check letter by letter
    function lettersCheck(wordGuess) {

        newWord = wordGuess;
        //    console.log("to find" + formattedWordToGuess + "word to guess newWord from lettersCheck : " + newWord)
        //  The 2 words are stored in 2 arrays:
        // - one for the word to guess
        // - a second for the users guess)

        //  Step 1: Check valid letters
        //  Step 1: Check existing letters 

        let validLettersCount = 0;
        let wordToGuess2 = formattedWordToGuess;

        //  console.log("wordToGuess2 to string lettersCheck : " + wordToGuess2)

        let wtg = wordToGuess2.split('');
        // console.log("wtg to string lettersCheck : " + wtg);
        let userGuess = wordTested.getWordToTest();
        let userGuessArray = userGuess.split('');

        //   console.log("userGuess : " + userGuess + "/ wordToGuess2  => " + wordToGuessObject.word);


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

            //   console.log("test try" + guessNumber + "- " + test2);
            //  console.log("exist test letter word to guess: " + letterWordToGuess2 + " /letter word to test: " + letterWordToTest2 + " so letter is not valid");

            if (letterWordToGuess2 !== letterWordToTest2) {

                if (wtg.includes(letterWordToTest2) === true) {

                    letterExist = true;
                    wtg.splice(i, 1, null);
                    userGuessArray.splice(i, 1, null);
                    wtg.splice(wtg.indexOf(letterWordToTest2), 1, null);

                    // console.log(letterWordToTest2 + " is included ");
                    $(listElement2).css('background-color', rgbYellow);

                    if (letterExist === true) {
                        existingLetter(letterExist);
                    }

                } else {
                    //  console.log(letterWordToTest2 + "not valid");
                    $(listElement2).css('background-color', rgbGrey);


                }

            } else {

            }

            // console.log("word to guess after : " + wtg);
            // console.log("word to test after: " + userGuessArray);

        }

        //   console.log(wordTested);
        lettersKeyboard();

        // If all the letters are valid generate alert and disable keyboard
        if (wordTested.isWordValid() === true) {


            $('#success-modal').modal('show');
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
            //   console.log("letter to find " + letterToFind + "letter tested " + letterTested);
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



    //modals
    // $('#success-modal').on('shown.bs.modal', function () {
    //     $('#myInput').trigger('focus')
    // })









});