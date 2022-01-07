function main() {
let newArray: string[]
let limit: number
newArray = []
limit = 1000

for(let i = 0; i < limit; i++){
    newArray.push(wordGen())
    }

return checkPalindrome(newArray)
}

// generate word
function wordGen(): string {
    let limitA: number
    let limitB: number
    let a: string
    let word: string[]
    let caracteres:string
    let newWord: string
    caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    limitA = Math.floor(Math.random() * (5-3) + 3)
    limitB = Math.floor(Math.random() * (5-3) + 3)

    function gen() { 
        word = []
        for(let i = 0; i < limitA; i++) {
        a = caracteres.charAt(Math.floor(Math.random() * limitB))
        word.push(a)
        }
        newWord = word.join("")
        return newWord
    }

    return gen()
}

function checkPalindrome(array: string[]) {
    let arr: string[]
    let result: (undefined | string)[]
    let finalResult: (string | void)[]
    arr = array
    const check = function (str:string) {
        if (str === str.split('').reverse().join('')) {
            return str
        }
    }
    result = arr.map(check)

    finalResult = result.filter(Boolean)

    return finalResult
}
