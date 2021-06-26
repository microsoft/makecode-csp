---
title: 'Logic in Loops'
metaTitle: 'Logic in Loops'
order: 0
---

## Summary

### Materials  

* [Day 7 PowerPoint Deck](https://1drv.ms/p/s!AqsgsTyHBmRBkHoq2MZXAaVODyYj?e=jVzh3A)
* <a href="/unit-5/day-7/logic-in-loops-activity">Logic in Loops Handout</a>
* [Logic in Loops Handout](https://1drv.ms/w/s!AqsgsTyHBmRBkHtYAcWKVGZfi5c3?e=cOoWSD) in Word
* <a href="/unit-5/day-7/logic-in-loops-unplugged">Logic in Loops Unplugged</a>
* <a href="/unit-5/day-7/sentence-puzzles">Sentence Puzzles</a>
* Decks of cards
* Dice
* Tape 
* [guessingGame](https://makecode.com/_9qvWHHF64LHF) (for teacher)
* [Activity: Logic in Loops](https://arcade.makecode.com/courses/csintro2/logic/while)

### Instructional Activities and Classroom Assessments

1. Review Loop and Logic (5 minutes)
2. Sentence Puzzles: Logic in Loops Unplugged Activity (10 minutes)
3. Introduce Logic in Loops (10 minutes)
4. Activity: Logic in Loops (25 minutes)
5. Reflection/Homework

### Learning Objectives 

* [AAP-2.E](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=78) For relationships between two variables, expressions, or values:
    * a. Write expressions using relational operators. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Evaluate expressions that use relation operators. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.H](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=80) For selection:
    * a. Write conditional statements. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Determine the result of conditional statements. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.K](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=83) For iteration:
    * a. Write iteration statements. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Determine the result or side effect of iteration statements. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)

### Essential Knowledge 

* [AAP-2.E.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=78) A Boolean value is either true or false.
* [AAP-2.E.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=78) The exam reference sheet provides the following relational operators: =, ≠, >, <, ≥, and ≤. Text and Block:<br/>
§ a = b<br/>
§ a ≠ b<br/>
§ a > b<br/>
§ a < b<br/>
§ a ≥ b<br/>
§ a ≤ b<br/>
These are used to test the relationship between two variables, expressions, or values. A comparison using a relational operator evaluates to a Boolean value. For example,  a = b evaluates to true if a and b are equal; otherwise, it evaluates  to false.

* [AAP-2.H.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=80) Conditional statements, or “if-statements,” affect the sequential flow of control by executing different statements based on the value of a Boolean expression.
* [AAP-2.H.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=80) The exam reference sheet provides
    * Text: IF(condition) { &lt;block of statements&gt; }
    * Block: IF condition block of statements in which the code in block of statements is executed if the Boolean expression condition evaluates to true; no action is taken if condition evaluates to false.
* [AAP-2.K.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=83) Iteration statements change the sequential flow of control by repeating a set of statements zero or more times, until a stopping condition is met.
* [AAP-2.K.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=84) The exam reference sheet provides
    * Text: REPEAT UNTIL(condition) { &lt;block of statements&gt; }
    * Block: REPEAT UNTIL block of statements condition in which the code in block of statements is repeated until the Boolean expression condition evaluates to true.
* [AAP-2.K.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=84) In REPEAT UNTIL(condition) iteration, an infinite loop occurs when the ending condition will never evaluate to true.
* [AAP-2.K.5](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=84) In REPEAT UNTIL(condition) iteration, if the conditional evaluates to true initially, the loop body is not executed at all, due to the condition being checked before the loop.

## Details

### 1. Loops and Logic review (5 minutes)

* Define Loops
* Explain the benefit of loops
* Define logical expression
* Explain the benefit or Boolean arithmetic logical

### 2. Sentence puzzles: Logic in Loops unplugged activity (10 minutes)

* Direct students to get in groups and play a game with cards and dice.
* Students will describe the process using the concepts of loops and logic.
* Students will write the process in Pseudocode.

### 3. Introduce Logic in Loops (10 minutes) 

* Define conditional statements if, else, when.
* Reinforce students' knowledge regarding iteration.
* Demonstrate using conditional statements.

###  4. Activity: User Input and String Logic (25 minutes)

* Direct students to go to their <a href="/unit-5/day-7/logic-in-loops-activity">Activity: Logic in Loops</a> page.
* Direct students to complete Tasks 1 and 2.
* If students have time, encourage them to use functions and parameters in the fireball game to make it easier to manage and to recreate code segments in JavaScript.

### 5. Reflection/Homework

_If you run out of time, you may also assign this as individual homework. Students should complete their reflection._

* In task #2, you implemented a basic “password checker.” What is one possible downside of the way that the code was implemented? 
* List at least two ways in which user input could be used in writing a text based game.