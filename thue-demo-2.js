var fs = require('fs');

function parse(str) {
    var program = {
        rules: [],
        state: '',
        exhausted: false
    };

}

function applyRule(state, rule) {

}

function step(program) {

}

function run(program) {

}

var programString = fs.readFileSync(process.argv[2]).toString();

run(parse(programString));
