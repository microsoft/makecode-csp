---
title: "Algorithms and Programming Part 1"
metaTitle: "Algorithms and Programming Part 1"
order: 2
---

## Algorithms and Programming Part 1 Review

<Info>

**AAP - Part 1 Conceptual Framework**

[Big Idea 3: Algorithms and Programming (AAP)](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=232)
</Info>

* Computers only do exactly what they are told to do and nothing else.
* These detailed instructions and rules are called algorithms.
* Algorithms are a finite set of instructions that accomplish a specific task.
* Algorithms consist of all the steps needed to complete a task.
* You can think of algorithms as recipes with detailed instructions for the computer to follow.
* These detailed instructions are given to the computer with programming languages.
* In computer science, there are three programming constructs used in algorithmic implementations:
    * Sequencing - is the application of each step of an algorithm in the order in which the code statements are given.
    * Selection - determines which parts of an algorithm are executed based on a condition being true or false.
    * Iteration - is a repeating portion of an algorithm; iteration repeats a specified number of times or until a condition is met.
* All programs are simply a combination of some or all of these three programming constructs.
* Only these three are used in all of computer science.
* Flowcharts are a diagrammatic representation of an algorithm. They are helpful for writing programs and explaining your program to others.
<br/>

* The first step in writing a computer program is to create a plan for what you want your program to do.
* You can use a flowchart or you can write out a detailed step-by-step plan for your program.
* It should include the type of information your program will receive, how this input will be processed, what output your program will create, and how the output will be presented.
* The plan does not need to be written in complete sentences or include actual code.
* This kind of detailed writing is known as pseudocode.
* Pseudocode is like a detailed outline or rough draft of your program and is a mix of natural language and code.
* Pseudocode allows the designer to focus on the logic of the algorithm without being distracted by the details.
* We can learn how to code algorithms by looking at existing algorithms.
* Algorithms can be created from an idea, by combining existing algorithms, or by modifying existing algorithms.
* One type of algorithm is one that determines the maximum or minimum value of two or more numbers.
* Another type of algorithm is one that identifies if an integer is or is not evenly divisible by another integer.
* Another type of mathematical algorithm is one that computes the sum or average of two or more numbers.
<br/>

* In computer science, a data value is a unit of data which is given meaning by a data type.
* Data values can be either constants or variables.
* Constants are data values that stay the same every time a program is executed.
* There are two types of constants.
* Literal constants are values fixed into the source code.
* Named constants define a value to be used.
* The other type of constant is a variable.
* A variable is an abstraction insider a program that can hold a value.
* Each variable has associated data storage that represents one value at a time, but that value can be a list or other collection that in turn contains multiple values.
* Variables can change.
* Data values can be stored in variables, lists of items, or standalone constants and can be passed as input to (or output from) procedures.
<br/>

* There are several ways to find and correct errors when we program.
* Debugging is simply the process of removing errors from a program.
* A test case is an individual set of variables or conditions that is used to see if the program works as you expect.
* When you run a different test case, run it with one change from the test case before it to find the error.
* Best practice is to design test cases that both test to see if the program will fail and succeed.
* Hand tracing is when you record information about a program's execution.
* With visualizations you are seeing what is happening in the program step by step, or you can add extra output statements and see what happens.
* The types of errors you can see in your code include:
    * Logic errors - mistakes in the program that cause it to behave incorrectly or unexpectedly.
    * Syntax errors - mistakes in the program that occurs during the execution of a program.
    * Each programming language defines its own run-time errors.
    * Overflow errors are errors that occur when a computer attempts to handle a number that is outside of the defined range of values.
* Debugger programs allow programmers to look at their code line by line as it is running.
<br/>

* Program documentation is a written description of the function of a code segment, event, procedure, or program and how it was developed.
* Comments are a form of program documentation written into the program to be read by people and do not affect how a program runs.
* Programmers should document a program throughout its development.
* Program documentation helps in developing and maintaining correct programs when working individually or in collaborative programming environments.
* Not all programming environments support comments, so other methods of documentation may be required.
<br/>

* An event is simply an occurrence - something that happens.
* Events can trigger actions.
* In computer science events are things that happen in the computer (like the mouse or keyboard button being clicked).
* A computer will run from the first line or block of code to the last in order unless the computer runs across something that changes the program control flow.
* One of the things that can change program control flow is an event.
* Programmers use event handlers to detect those events and tell the computer what to do when the events occur.
* Event handlers listen for these events and tell the computer what to do when the events occur.
<br/>

* A variable is an abstraction inside a program that can hold a value.
* It allows code to be written in a generic way and for easier reuse of code.
* Essentially it is a container that stores information in a program.
* This information can be used by the program.
* Each variable has associated data storage that represents one value at a time, but that value can be a list or other collection that in turn contains multiple values.
* It is called a variable because the data it represents may change (vary) when the program stores something new there.
* When you create a new variable in your program, you're reserving a place in memory; kind of like an address, for some data that your program might want to create, copy, or check on later.
* Variables have a name, a type, and a value.
* The name is how you will refer to the variable.
* Some programming languages provide types to represent data, which are referenced using variables.
* The type determines the kind of data a variable will store.
* Data types in some programming languages include sprites, integers, strings, lists, and Booleans.
* Value is what is stored (data) in the variable.
* The value can be an image, an integer, a string, a Boolean.
* Some values are better suited to representation using one type of datum rather than another.
* When you create variables, it is best practices to use meaningful names for your variables.
* Creating meaningful names for your variables helps you (and your collaborators) know what their purpose is later.
* It also makes it so you can easily read and debug your code in the future.
* A sprite variable is an image and it is any object in the game that has properties and behaviors.
<br/>

* Integer variables holds numerical data.
* A number variable can be changed as an event occurs or with math operators (+, -, *, /).
* Variables in coding work like variables in math.
* Using integer variables allows programmers flexibility to reuse the values in their programs.
* Arithmetic operators are part of most programming languages and include addition, subtraction, multiplication, division, and modulus operators.
* The Exam Reference Sheet explains that the order of operations used in mathematics applies when evaluating expression.
* An expression can consist of a value, a variable, an operator, or a procedure call that returns a value.
* Expressions are evaluated to produce a single value.
* An expression can be longer than two items.
* If it is, it follows the order of operations used in mathematics.
* The order of operations in mathematics is:
    * Parentheses
    * Exponents
    * Multiplication
    * Division
    * Addition
    * Subtraction
* The acronym is "Please Excuse My Dear Aunt Sally" (PEMDAS).
* The modulus operator is a way to determine the remainder of a division operation.
* It will case the result as an integer.
* According to the exam reference sheet the MOD operator has the same precedence as the multiplication and division operators in the order of operations.
<br/>

* In the field of computer science, character means every letter, number, punctuation mark, or symbol.
* Characters can also be invisible on the screen - like spaces between words or when you tab to make a paragraph.
* In computer science, a string is a sequence of characters.
* A string is another type of variable.
* A string is a sequence of characters, visible or invisible.
* A string in programming is just another word for text.
* String variables are surrounded by quotes.
* A string variable can be changed as an event occurs or with user input.
* A string type is more complex than an integer or Boolean.
* String variables can be concatenated.
* Concatenation is simply a fancy word for join.
* In programming, it simply means that when used the code will combine strings together.
* A substring is part of an existing string.
* With a substring command, you can take some part of an existing string and make it a smaller string.
* The smaller piece is a substring.
* A new substring is made by copying from the last string at some starting place.
* Also the substring copies just the amount of characters you want from the first string.
<br/>

* Programmers have to tell computers how to make decisions.
* Programs use comparisons to make decisions.
* Boolean logic is a type of algebra in which the values are either true or false.
* In a program, a computer will make a decision based on the truth of the expression.
* Boolean logic is what allows computers to make decisions.
* Boolean values are used to test the conditions related to selection and iteration algorithms.
* Using a Boolean value is kind of like asking a yes or no question.
* Boolean values allow programmers to set something as true or false so a computer device can make decisions about what actions to take next.
* Boolean values are regularly used to help maintain the state of a given piece of code.
* It is common to describe Boolean variables as "Boolean flags".
* Boolean flags are often used to turn on and off different behaviors that might be useful.
<br/>

* Another way to define something as true or false is to use relational operators.
* Relational operators are used to test the relationship between two variables, expressions, or values.
* A comparison using a relational operator evaluates to a Boolean value.
* These operators evaluate to a Boolean value - either true or false:
    * a = b
    * a ≠ b
    * a > b
    * a < b
    * a ≥ b
    * a ≤ b
<br/>

* For an if statement, the code executes if the Boolean expression condition evaluates to true; no action is taken if the condition evaluates to false.
* For an if-else statement, the code executes if the Boolean expression condition evaluates to true; otherwise, the code in the else statement is executed.
* Logical expressions, like if/else statements, can compare more than numeric values.
* Comparing data type values (such as Strings) can change how the programs behave depending on the different conditions.
* Logical expressions find a new fact by analyzing whether some other facts together can prove to be true.
* Some facts, or conditions, when looked at together may prove another fact to be true, or maybe false.
* These are statements of fact that result from some condition being true.
* By taking some facts and putting them into a logical form, we can make an arithmetic that helps us analyze them and make a conclusion.
* Sometimes, it’s necessary for all facts to be true in order for the conclusion to be true.
* This is the case when the AND operator is used.
* When analyzing facts with the OR operator, only one fact needs to be true for the conclusion to be true also.
* Making a decision may require more than just one or two facts.
* When this happens, another operator is needed to combine the facts together to make a conclusion.
* Nested conditional statements consist of conditional statements within conditional statements.
<br/>

* In programming, something that repeats is called a loop, or an iteration.
* Loops run code multiple times until a stop condition is met.
* Using iteration in code lets you (1) repeat the same code more than once, (2) accomplish the same task in a smaller number of steps, or (3) repeat actions in a program to have a certain effect.
* We use loops/iterations to avoid writing the same code over and over, make our code more efficient, easier to read, and easier to edit.
* The Repeat n Times command is a command in which the block of statements is executed n times.
* The Repeat Until command is a command in which the code in the block of statements is repeated until the Boolean expression condition evaluates to true.
* In Repeat Until (condition) iteration, an infinite loop occurs when the ending condition will never evaluate to true.
* Additionally, in Repeat Until (condition) iteration, if the conditional evaluates to true initially, the loop body is not executed at all, due to the condition being checked before the loop.
<br/>

* Randomness is a state of unpredictability.
* Computers, however, are not really good at randomness.
* Programs are pretty predictable because they are written so that, given a certain input, the computer will consistently produce the expected outcome.
* Randomness is useful for different computing functions (like some elements of games as well as cryptography).
* We must use randomness for security because if numbers are predictable and easy to guess attackers can guess passwords.
* Computer science uses random numbers to simulate natural occurrences that are random.
* True randomness is when a computer measures some type of physical phenomenon that takes place outside of the computer.
* Physical phenomenon could include radioactive decay, atmospheric noise or simply use the exact time you press keys on your keyboard as a source of unpredictable data, or entropy.
* If a computer collects enough of the specific times associated with these key presses and you will have a source of entropy you can use to generate a "true" random number.
* You are not predictable machine, so an attacker cannot guess the precise moment when you press these keys.
* Pseudo-randomness is an alternative to "true" random numbers.
* A computer could use a seed value and an algorithm to generate numbers that appear to be random, but that are in fact predictable.
* The computer does not gather any random data from the environment.
* Pseudo-randomness works fine for many things like game play.
* The random command generates a pseudo-random number with a minimum and a maximum, including the min and the max. 
<br/> 

* Pair programming is a common method for programmers to use when they are collaborating on a project together.
* Pair programming facilitates collaboration.
* In pair programming, two programmers work together as a pair.
* One program (the driver) writes the program code, while the other (the navigator) reviews each line of program code as it is written.
<br/>

* In computer science, abstraction is the processing of hiding the complexity of a system by simplifying its interface.
* Anytime you use something that seems simple, but you know it is complex, you know abstraction is involved.
* Abstraction is like a ladder.
* The lowest rungs of the ladder are the simplest interfaces and hides the most complexity, so it is the highest level of abstraction.
* The highest rungs of the ladder are the most complex, and the lowest level of abstraction.
* Abstraction is present in programming languages.
* The most complex version of programming languages is the machine code that uses binary and that computers can read.
* Text-based programming is less complex than machine code, but it is still complex.
* To use it, you must know the proper syntax of the program.
* It is, however, an abstraction because it is simpler to use than machine code.
* The simplest interface, and the highest level of abstraction, is block code.
* With block code, you do not have to know the rules of syntax.
* You just need to understand the purpose of each block.
* Block-based languages are modular.
* Text-based programming requires you to write lines of text rather than select and drop blocks.
