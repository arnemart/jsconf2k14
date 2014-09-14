> I have my notes on paper, that's how up-to-date _I_ am.


~

~

~

~ 0"!fnoCSJ olleH">:#,_@

~

~

~

~Arne Martin Aurlien
Boost Communications
@arnemart


> Hello everyone! Thank you all for being here and not at the other talk which
> probably will be much more interesting. My name is Arne Martin, I work for a
> small company in Trondheim, Norway, and I'm here to talk about programming
> languages.

----

~

~

~

~**Hello JSConf!**

~

~

~

~Arne Martin Aurlien
Boost Communications
@arnemart

----

~

# Implement a what now

~

--

~An esoteric programming language

> My talk is about why you should try to write your own completely impractical
> implementation of an esoteric programming language


----

~

# What's that

~

--

~A programming language designed to be impractical


> Programming shouldn't be all business. It should also be fun. Esoteric
> programming languages are often great examples of this. They are often
> written just for fun or to prove a point, and are in almost all cases
> completely useless for any practical purpose. That's what make them so
> great.


----

~

> Here are a couple of somewhat well-known examples


--

* Brainfuck

```
    ++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>
    ---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.
```
> Made to be super simple and minimal. Well, the concept is simple, using it is
> aything but. Nothing but explicit pointer manipulation, incr/decr.
> It is so minimal that compilers have been written for it in less than 200B.

--

* Malbolge

```
    ('&%:9]!~}|z2Vxwv-,POqponl$Hjig%eB@@>}=<M:9wv6WsU2T|nm-,jcL(I&%$#"
    `CB]V?Tx<uVtT`Rpo3NlF.Jh++FdbCBA@?]!~|4XzyTT43Qsqq(Lnmkj"Fhg${z@>
```
> Now this is created explicitly to be hard to write. Probably the hardest
> programming langue that exists. The instruction names are encrypted, and the
> encryption changes with each cycle. This hello world was not "written" as
> much as generated using brute force.

--

* Piet

~

![20](piet.png)

> Who says programming has to be about text? Piet can be written in an image
> editor.

----

~

# But why

~
--
- Because why not!
--
- Have some fun, write some sloppy code
--
- Reason about programming in new ways

> My main answer is why not! It's fun!
> Write some crazy code, break something.
> It will also maybe even teach you something about programming
> and allow you to reason about code in a different way.

----

~

# WARNING

> I should warn you before we proceed

~
--

> This presentation

~ ⚠️  May contain traces of nuts

--

~I have no idea what I'm doing

> By watching this presentation you implicitly agree that you will never
> use any code, techniques, concepts or idioms contained herein for anything
> resembling actual "work".


> I have no knowledge or education about how things like this should actually
> be done, and I have never done anything like this in production code.
> But that is part of the fun! Try to figure out how to solve
> interesting problems in interesting ways, make your own path, reinvent
> all sorts of wheels.

> When I write fun code that will never end up in production,
> I rarely write comments, I rarely handle errors well (or at all),
> and I never consider "production" issues. If I can save two lines by
> using an eval() I will do so without hesitation.

----

~

# wtf is a befunge

--

~

> The first programming language I will demonstrate for you today is befunge.
> Befunge is quite idiosyncratic and has a few quite unique concepts.

- Stack based
> No variables, all state is placed on an implicit stack
--
- Reflective
> Programs can not only read but rewrite their own source code at runtime
--
- Multi-dimensional
> Programs consist of single-character instruction on a grid, and a pointer
> moving along the grid in any direction and executing instructions as it
> goes.
--
- Described as “a cross between Forth and Lemmings”
> Which is fairly apt
--
- Super annoying to use
> As will become obvious in a moment
--
- Completely useless
--
- Fun!

----

~

# Let's have a look then

--

```#!
osascript -e "tell application \"Google Chrome Canary\" to activate"
```

> First a few examples

> Aside: This web thing is made with react, which is super awesome for things
> like this. Give it a program state and render it, give it a new program
> state and re-render for every step.

> Hello world pushes each character onto the stack in reverse order, then
> goes through a loop to print it out, 0 exits the loop.

> You all know fizzbuzz, right? It should print the numbers 1 to 100, but if
> the number is divisible by 3, print "fizz" instead of the number, if
> divisible by 5 print buzz, if by both print "fizzbuzz"
> Fizzbuzz starts at 0, adds one, checks if the number % 3 or 5 is 0, and
> prints the correct thing.

> "Count and rewrite" demonstrates the reflection in befunge. Pay attention
> to the number on the top left.

> The quine reads its own source code one char at a time and prints it out,
> exiting when it hits a space.

> The "weird recursive quine" writes its own source code into the next line
> in the program, then moves down and repeats.


> Okay so the source code

> The main entry point is "befunge.js", there's also "parser.js" and
> "interpreter.js".

> The parser is ridiculously simple: Split the input text into lines, split
> each line into separate characters.

> The main "meat" is in the interpreter. This uses a multimethod that has an
> implemtation of each befunge instruction. Each method receives the full
> program state, and returns a new program state with its changes applied,
> whatever they may be. A multimethod is basically a function that has
> different implementation based on its arguments, so it's kinda like a
> functional switch-statement.

> Everything uses the facebook immutable data structures library, because
> that was new and shiny when I started this. That's also what makes the
> "step back" button in the web version work so well. It is probably a
> terrible idea when it comes to memory usage though.

----

~

# Well that was fun

~

--

~Now what

----

~

# Thue

~

> Well, we're not done quite yet! There's one more language to look at and
> that's Thue. (pronounced "tooeh")
> Named after Norwegian mathematician Axel Thue.

--
- String-rewriting
> Based solely on string-rewriting
--
- Non-deterministic
> Which makes certain things a bit harder
--
- Extremely simple

----

~

# Thue


> A program consists of several rules of the type

--
        left side::=right side
--
        a::=:::
--
        b::=~helloooo
--
        ::=
--
        a

> ::: in rhs means get input
> if rhs starts with ~, print the rest and return empty string

> Followed by an empty statement to indicate that the statement list is done
> Followed by the programs initial state

~
--
- Randomly pick a rule
--
- Replace `lhs` with `rhs` in current program state
--
- Repeat

----

~

# Let's implement it!

--

```#!
e ~/jsconf2k14/thue-demo-1.js
```

> [Live implementation of a simple thue interpreter]

> Start with the parse function. We'll just assume that the input file is more
> or less well-formed, we'll put a try-catch around it to be "safe".

> Then the run-function -- just keep looping until the program is exhausted.

> Then the step-function -- shuffle all rules, loop through them until one
> matches. If none match, set program to exhausted.

> Then the function to actually apply a rule to the program state.
> Remember to check for input and output.

----

----

~

# Executive summary

~

~Have some fun!

> Write some nasty code. Break the rules. Break other stuff.
> Create something.

----

~

# Thank you!

~

~github.com/arnemart/jsconf2k14
github.com/arnemart/befungius
@arnemart
