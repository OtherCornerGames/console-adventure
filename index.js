//  NOTE variables for our environment
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// NOTE Variables for playing
let playing = true
let player = {
    name: rl.question('\nWhat is your name?\n', (name => {
        console.log(`\nHello, I will call you ${name}`)
        // We need to close our stream otherwise it will sit idle as it awaits. As the name suggest a stream just continues.
        getInput()
        return name
    })),
    health: 100
}

rl.on("input", input => evaluate(input))

rl.on("close",() => process.exit(0))

function getInput() {
    rl.question('\nWhat do you want to do?\n', response => { console.clear(); rl.emit('input', response) }) 
}

function move() {
    console.log('\nyou move');
}

function look() {
    console.log('\nyou look');
}

function evaluate(input) {
    input = input.split(" ")
    const action = input[0]
    console.log(`input: ${action}`)
    switch (action) {
        case 'look':
            look()
            break;
        case 'go':
        case 'move':
            move()
            break
        default:
            console.log('\nThat is not a valid action')
            rl.emit('getInput')
        }
        getInput()
}