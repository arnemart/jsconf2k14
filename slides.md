> I have my notes on paper, that's how up-to-date _I_ am.


~

~

~ 0"!fnoCSJ olleH">:#,_@

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

An esoteric programming language

----

~

# What's that

~

--

A programming language designed to be impractical

----

~

--

* Brainfuck

```
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>
---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.
```
> Made to be super simple. Well, the concept is simple, using it is
> aything but. Nothing but explicit pointer manipulation, incr/decr.

--

* Malbolge

```
('&%:9]!~}|z2Vxwv-,POqponl$Hjig%eB@@>}=<M:9wv6WsU2T|nm-,jcL(I&%$#"
`CB]V?Tx<uVtT`Rpo3NlF.Jh++FdbCBA@?]!~|4XzyTT43Qsqq(Lnmkj"Fhg${z@>
```
> Now this is created explicitly to be hard to write. Probably the hardest
> programming langue that exists. The instruction names change with each cycle.

--

* Piet

~

![20](piet.png)

> Very nice and calming.

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
> use code or techniques that you see in production


> I have no knowledge of how things like this should actually be done
> And I have never done anything like this in production code
> But that is part of the fun! Try to figure out how to solve
> interesting problems in interesting ways, make your own path

> When I write fun code that will never end up in production,
> I rarely write comments, I rarely handle errors well (or at all),
> and I never consider "production" issues. If I can solve a problem
> using an eval() I will do so without shame.

----
~

# wtf is a befunge

--

~

- Stack based
> No variables, all state is placed on an implicit stack
--
- Reflective
> Programs can read and write their own source code
--
- Multi-dimensional
> Programs consist of single-character commands on a grid, and an instruction
> pointer moving in any direction along the grid
--
- Described as “a cross between Forth and Lemmings”
> Which is fairly apt
--
- Super annoying
> As will become obvious in a moment
--
- Completely useless


----

~

# Let's have a look then

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

> "tue", not thoo-ey
> Named after norwegian mathematician Axel Thue

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

~

> A program consists of several rules of the type

--
    left side::=right side
--
    a::=b
--
    ::=
--
    a

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
twitter.com/arnemart
