---
title: 'Logic: Validating User Input'
metaTitle: 'Logic: Validating User Input'
order: 0
---

## Summary

### Materials

* [Day 6 PowerPoint deck](https://1drv.ms/p/s!AqsgsTyHBmRBkHgPVNJPTRzakum8?e=T8cq1r)
* <a href="/unit-5/day-6/validating-user-input.md">Validating User Input</a> handout
* [Validating User Input](https://1drv.ms/w/s!AqsgsTyHBmRBkHlsfa0glcEJfz2r?e=VoOJHZ) handout in Word
* [winnerWinner](https://makecode.com/_0F00C66wK3Di) (for teacher)
* [helloFriend](https://makecode.com/_amzHh6iF7Eyg) (for teacher)
* [Activity: User Input and String Logic](https://arcade.makecode.com/courses/csintro2/logic/user-input)

Additional references:

* Learn about the [history of the Oregon Trail game](https://oregon-trail-game.com/oregon-trail-game-history/)
* [Classic Oregon Trail game](https://classicreload.com/oregon-trail.html)

### Instructional Activities and Classroom Assessments 


1. Logical Expressions Refresher (10 minutes)
2. User Interaction (10 minutes)
3. Activity: Logical Expressions and User Input (30 minutes)
4. Reflection/Homework


Learning Objectives 

* [AAP-1.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) Represent a value with a variable. [3.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.D](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=77) Evaluate expressions that manipulate strings. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.E](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=78) For relationships between two variables, expressions, or values:  
    * a. Write expressions using relational operators. 2.B  
    * b. Evaluate expressions that use relational operators. 4.B
* [AAP-2.F](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=79) For relationships between Boolean values: a. Write expressions using logical operators. 2.B b.  Evaluate expressions that use logic operators. 4.B
* [AAP-2.H](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=80) For selection:
    * a. Write conditional statements. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Determine the result of conditional statements. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* CRD-2.C Identify input(s) to a program

### Essential Knowledge

* AAP-1.A.1 A variable is an abstraction inside a program that can hold a value. Each variable has associated data storage that represents one value at a time, but that value can be a list or other collection that in turn contains multiple values.
* [AAP-2.D.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=77) String concatenation joins together two or more strings  end-to-end to make a new string.
* [AAP-2.E.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=78) A Boolean value is either true or false.
* AAP-2.E.2 The exam reference sheet provides the following relational operators: =, ≠, >, <, ≥, and ≤. Text and Block:<br/>
§ a = b<br/>
§ a ≠ b<br/>
§ a > b<br/>
§ a < b<br/>
§ a ≥ b<br/>
§ a ≤ b<br/>
These are used to test the relationship between two variables, expressions, or values. A comparison using a relational operator evaluates to a Boolean value. For example,  a = b evaluates to true if a and b are equal; otherwise, it evaluates  to false. 

* AAP-2.F.2 The exam reference sheet provides Text: NOT condition Block: NOT condition which evaluates to true if condition is false; otherwise it evaluates to false.
* [AAP-2.F.5](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=79) The operand for a logical operator is either a Boolean expression or a single Boolean value. 
* [AAP-2.H.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=80) Conditional statements, or “if-statements,” affect the sequential flow of control by executing different statements based on the value of a Boolean expression.
* [AAP-2.H.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=80) The exam reference sheet provides
    * Text: IF(condition) { &lt;block of statements&gt; }
    * Block: IF condition block of statements in which the code in block of statements is executed if the Boolean expression condition evaluates to true; no action is taken if condition evaluates to false.
* CRD-2.C.1 Program inputs are data sent to a computer for processing by a program. Input can come in a variety of forms, such as tactile, audio, visual, or text.
* CRD-2.C.4 Inputs usually affect the output produced by a program.
* CRD-2.C.6 Input can come from a user or other programs.

## Details

### 1. Logical expressions refresher (15 minutes) 

* Define Logical Expressions.
* Explain how you can use Logical Expressions.
* Define logical operators and Boolean algebra.
* Demonstrate how to use Boolean equations and expressions.

### 2. User interaction (10 minutes) 

* Direct students to recreate code segments that incorporate user input.
* Students will use the ask block in a logic statement to test built in Boolean values.
* Students will then use the ask for string block to see how a pre-made function calls an on-screen keyboard.
* Discuss alternating Booleans.

### 3. Activity: User input and string logic (25 minutes)

* Direct students to go to <a href="/unit-5/day-6/validating-user-input.md">Validating User Input</a> of the page.
* Task students with completing Task 1, Task 2, and Task 2 Challenge.
* If students have time, encourage them to recreate code segments in JavaScript.

### 4. Reflection/Homework 

If you run out of time, you may also assign this as individual homework. Students should complete their reflection.

* In task #2, you implemented a basic “password checker.” What is one possible downside of the way that the code was implemented?
* List at least two ways in which user input could be used in writing a text based game.

### 5. Extension activities 

* For students who finish early, encourage them to complete the problem set at [Problem Set: User Input](https://arcade.makecode.com/courses/csintro3/intro/user-input-problems). 
* _Practice sets are written as JavaScript exercises and can be accomplished using block based code. Students can choose whichever code editor they feel most comfortable with to complete the problems. If needed, students can copy the JavaScript snippet from the problem set, paste it into the JavaScript workspace in MakeCode, then switch back to Block. It has been demonstrated that exposing students to both block and text based code simultaneously makes the transition from block to text more successful._