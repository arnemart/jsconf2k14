var fs = require('fs');

function parse(str) {
    var program = {
        rules: [],
        state: '',
        exhausted: false
    };

    str = str.replace(/^(#::=.*)?$\n/mg, '');
    var parts = str.split('\n::=\n');
    program.state = parts[1];
    program.rules = parts[0].split('\n').map(function(line) {
        var index = line.indexOf('::=');
        return [line.slice(0, index), line.slice(index + 3)];
    });
    return program;
}

function applyRule(state, rule) {

}

function step(program) {

}

function run(program) {
    while (!program.exhausted) {
        program = step(program);
    }
}

var programString = fs.readFileSync(process.argv[2]).toString();

run(parse(programString));
