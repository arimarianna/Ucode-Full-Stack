function* generator() {
    let ind = 1
    while (true) {
        let input = prompt(`Previous result: ${ind}. Enter a new number:`)
        if (+input) {
            ind += (+input)
        } else {
            console.error('Invalid number!')
        }
        if (ind > 10000) 
            ind = 1
        if (input === 'exit') 
            break
    }
}

let gen = generator()
console.log(gen.next().value);
