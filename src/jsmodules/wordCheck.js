export function dictionaryCheck() {
    console.log("dictionary");
    alert("dictionary");
    fetch(`/.netlify/functions/word-found`)
        .then(res =>
            res
        ).then(data =>
            console.log(data)
        )
}