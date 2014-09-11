var fs = require('fs');
var shuffle = require('array-shuffle');
var prompt = require('sync-prompt').prompt;

var args = process.argv.slice(2);
var debug = false;

if (args[0] == '-d') {
    debug = true;
    args.shift();
}

var programString = fs.readFileSync(args[0]).toString();

function parse(str) {
    var program = {
        rules: [],
        state: '',
        exhausted: false
    };

    try {
        // Strip blank lines and comments
        str = str.replace(/^(#::=.*)?$\n/mg, '');

        // Split rules part from initial state part
        var parts = str.split('\n::=\n');
        program.state = parts[1];

        // Split all lines on ::= and add them as rules
        program.rules = parts[0].split('\n').map(function(line) {
            var index = line.indexOf('::=');
            return [line.slice(0, index), line.slice(index + 3)];
        });
    } catch (e) {
        throw new Error('Hm, does not seem to be a valid program');
    }

    return program;
}

// Apply a single rule to a state
function applyRule(state, rule) {
    var rhs = rule[1];

    if (rhs == ':::') {
        // Get input
        rhs = prompt('Input: ');
    } else if (rhs.match(/^~/)) {
        // Print output
        var output = rhs.slice(1) || '\n';
        process.stdout.write(output);
        rhs = '';
    }

    return state.split(rule[0]).join(rhs);
}

// Find the next rule to run
function step(program) {
    var rules = shuffle(program.rules);

    program.exhausted = true;

    for (var i = 0; i < rules.length; i++) {
        if (program.state.indexOf(rules[i][0]) > -1) {
            program.state = applyRule(program.state, rules[i]);
            program.exhausted = false;
            break;
        }
    }

    return program;
}

// Run and keep running until no matches are found
function run(program) {
    while (!program.exhausted) {
        if (debug) {
            console.log(program.state);
        }
        program = step(program);
    }
}

run(parse(programString));
