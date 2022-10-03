export function isWordGuessed() {

    console.log("word found?");
    fetch(`/.netlify/functions/word-found`)
        .then(res =>
            res
        ).then(data =>
            console.log(data)
        )
}

