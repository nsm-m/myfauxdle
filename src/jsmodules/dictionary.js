export function dictionaryCheck() {
    console.log("dictionary");
   // alert("dictionary");  
    fetch(`/.netlify/functions/dictionary-check`)
        .then(res =>
            res
        ).then(data =>
            console.log(data)
        )
}

