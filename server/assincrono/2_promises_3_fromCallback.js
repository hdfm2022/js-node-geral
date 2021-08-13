// pra executar:
// node .\server\assincrono\2_promises_3_fromCallback.js

// https://www.youtube.com/watch?v=DHvZLI7Db8E

// callbackversion
const userLeft = false;
const userWatchindCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User left',
            message: ':('
        })
    } else if (userWatchindCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback("Ok!")
    }
}

watchTutorialCallback(message => {
    console.log("Callback Success: " + message)
}, error => {
    console.log("Callback Error: " + error.name + " " + error.message)
})

// promises version
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User left',
                message: ':('
            })
        } else if (userWatchindCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve("Ok!")
        }
    })
}

watchTutorialPromise().then(message => {
    console.log("Promise Success: " + message)
}).catch(error => {
    console.log("Promise Error: " + error.name + " " + error.message)
})