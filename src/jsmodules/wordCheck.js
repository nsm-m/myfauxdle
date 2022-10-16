export function dictionaryCheck() {
 
    fetch(`/.netlify/functions/word-found`)
        .then(res =>
            res
        ).then(data =>
            console.log(data)
        )
}