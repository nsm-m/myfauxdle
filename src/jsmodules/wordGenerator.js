
export function randomWord() {
    console.log("wordGenerator");
    // alert("randomword");
    fetch(`/.netlify/functions/random-word`)
        .then(res =>
            res
        ).then(data =>
            console.log(data)
        )
}
