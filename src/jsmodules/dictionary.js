import { generateWord, WordToGuess } from './wordGenerator.js'







$(document).ready(function () {

    let wordCreated;
    var newWord;



    //generate word

    generateWord().then(
        function (value) {
            wordCreated = value;
            newWord = new WordToGuess(value)
            console.log("another test: " + value);
            console.log("wordCreated: " + wordCreated)
            console.log("wordCreated new word var: " + newWord.getWordToGuess())
            test(wordCreated);

            $(validateWord).click(function (event) {
                event.preventDefault();
                console.log("validate word");
                submitWord();

            });

            return wordCreated, newWord;

        },
        function (error) {

            console.log(error)
        }
    );



    function test(val) {
        newWord = val;
        console.log("val etst: " + newWord);
        return newWord;
    }
    console.log("val 1" + newWord);

    console.log("hnet" + newWord);

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
    var validateWord = document.getElementById("submit");
    var countDisplay = document.getElementById("count");

    $(document).keydown(function (event) {

        if ((wordArray.length < 5) && (count < MAX_GUESSES)) {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                let typedLetter = String.fromCharCode(event.keyCode);
                let normalizedLetter = typedLetter.toLowerCase()
                console.log(normalizedLetter);
                wordArray.push(normalizedLetter);
                addelement(normalizedLetter);

                console.log(wordArray);
                console.log(count);
            }


        } else if (wordArray.length === 5) {
            alert("enough letters validate input!");

        }

    });




    //Function addelement(l) : 
    //- displays the letter picked
    function addelement(l) {
        let lettersCount = wordArray.length;
        // lettersCount = lettersCount + 1;
        console.log("letters count" + lettersCount)
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

        if ((wordArray.length < 5) && (count < MAX_GUESSES)) {

            wordArray.push(clickedBtnID);

            console.log(wordArray);
            console.log(count);

            addelement(clickedBtnID);

        } else if (wordArray.length === 5) {
            alert("enough letters validate input!");

        }


    }


    function removeLetter() {
        let lettersCount2 = wordArray.length;
        var currentWord = document.getElementById(`try${guessNumber + 1}-${lettersCount}`);
        console.log(lettersCount);
        wordArray.pop();
        $(`#try${guessNumber + 1}-${lettersCount2}`).text("");
        console.log(wordArray);
    }


    function existingLetter(exist) {
        if (exist === true) {
            $(".li").css('color', '#3399ff');

        }
    }

    let wordTested;
    let isValidWord;
    let wordGuess;

    async function submitWord() {


        if ((count < MAX_GUESSES) && (wordArray.length === 5)) {

            wordGuess = wordArray.join("");

            wordsubmitted = wordGuess;


            await fetch(`/.netlify/functions/dictionary-check?wordGuess=${wordGuess}`)
                .then(res =>

                    res.json()

                ).then(data => {

                    console.log("submit word data" + data)
                    // generatedWord = data;
                    // wordObject = new WordToGuess(generatedWord);
                    // generatedWordExport = JSON.stringify(wordObject);
                    // let parsedWord = JSON.parse(generatedWordExport);
                    // formattedWord = parsedWord.word;

                    //  console.log("testing" + formattedWord);
                    //  console.log(wordObject);
                    //  console.log('Success:', generatedWord);

                })
            // console.log("Word submitted: " + wordsubmitted);
            // const dictionarySettings = {
            //     "async": false,
            //     "crossDomain": true,
            //     "url": `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${wordGuess}`,
            //     "method": "GET",
            //     "headers": {
            //         "x-rapidapi-host": "dictionary-by-api-ninjas.p.rapidapi.com",
            //         "x-rapidapi-key": "56bc15abd1msh8abeae14cab8d8ep1a87a3jsn2982dc6544e6"
            //     }
            // };

            // $.ajax(dictionarySettings).done(function (response) {
            //     const result = response;
            //     console.log(result);
            //     isValidWord = result.valid;
            // });

            //  isValidWord = true; // remove this when removing commented
            console.log(isValidWord);



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
                console.log(count);
                wordTested = new WordToTest(wordsubmitted, count);
                lettersCheck(wordTested.getWordToTest());
                wordArray = [];
            }

        } else if ((wordArray.length != 5)) {

            alert(`You're missing letters ${5 - wordArray.length} letters`);

        }


        // displayCount();

        lettersCount = 0;


    }

    function displayCount() {
        // countDisplay.innerHTML += wordTested.getWordToGuessCount();
        countDisplay.innerHTML += wordTested.getWordToGuessCount();
    }
    let isValidLetter;
    let letterExist;
    //check letter by letter
    function lettersCheck(wordGuess) {


        console.log("newWord lettersCheck : " + newWord)
        //  The 2 words are stored in 2 arrays:
        // - one for the word to guess
        // - a second for the users guess)

        //  Step 1: Check valid letters
        //  Step 1: Check existing letters 

        let validLettersCount = 0;
        let wordToGuess2 = newWord;
        let wtg = wordToGuess2.split("");

        let userGuess = wordTested.getWordToTest();
        let userGuessArray = userGuess.split("");


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

                console.log("letter word to guess: " + letterWordToGuess + " /letter word to test: " + letterWordToTest + " so letter is valid");
                isValidLetter = true;

                wtg.splice(i, 1, null);
                userGuessArray.splice(i, 1, null);

                if (isValidLetter === true) {
                    validLettersCount = validLettersCount + 1;
                    wordTested.validCount = validLettersCount;
                    $(listElement).css('background-color', rgBGreen);
                    //  $(`#${letterWordToTest}`).css('background-color', '#2FC620');
                }
                console.log("word to guess after validated : " + wtg);
                console.log("word to test after validated : " + userGuessArray);


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
            console.log("exist test letter word to guess: " + letterWordToGuess2 + " /letter word to test: " + letterWordToTest2 + " so letter is valid");

            if (letterWordToGuess2 !== letterWordToTest2) {

                if (wtg.includes(letterWordToTest2) === true) {
                    letterExist = true;


                    //  wtg.splice(i, 1, null);
                    // userGuessArray.splice(i, 1, null);
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
                    //  $(`#${letterWordToTest2}`).css('background-color', '#A3A6AD');

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


    // $(validateWord).click(function (event) {
    //     event.preventDefault();

    //     submitWord();

    // });






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
                // alert("fail");
                return true;

            } else {
                return false;
            }


        }



    }









});