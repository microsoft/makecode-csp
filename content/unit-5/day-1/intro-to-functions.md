---
title: "Intro to Functions"
metaTitle: "Intro to Functions"
order: 0
---

## Summary

### Materials

* [Day 1 PowerPoint deck](https://1drv.ms/p/s!AqsgsTyHBmRBkHH-DeqCqztjgdPi?e=8ShAIc)
* [DoSomething sample code](https://makecode.com/_dpa8o38asH3s)
* [Place Sprite sample code](https://makecode.com/_eHsAWYesxEu7)
* <a href="/unit-5/day-1/introduction-to-functions">Introduction to Functions</a> handout in OneNote
* [Introduction to Functions](https://1drv.ms/w/s!AqsgsTyHBmRBkHCcF-mCg8tNfOZi?e=zSt069) handout in Word
* [Activity: Functions Intro](https://arcade.makecode.com/courses/csintro2/functions/intro)

#### Additional reference

* [Functions](https://minecraft.makecode.com/courses/csintro/functions/overview)

### Instructional Activities and Classroom Assessments 

1. Programming Principles Review (5 minutes)
2. Introduce Functions (5 minutes)
3. Learn How to Create Functions (10 minutes)
4. Activity: Functions Intro (30 minutes)
5. Reflection/Homework
6. Extension Activities

### Learning Objectives 

* [AAP-3.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) For procedure calls:
    * a. Write statements to call procedures. 3.B
    * b. Determine the result or effect of a procedure call. 4.B
* [AAP-3.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) Explain how the use of procedural abstraction manages complexity in a program. [3.C](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* AAP-3.C Develop procedural abstractions to manage complexity in a program by writing procedures. 3.B

### Essential Knowledge

* [AAP-3.A.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) A procedure is a named group of programming instructions that may have parameters and return values. 
* [AAP-3.A.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) Procedures are referred to by different names, such as method or function, depending on the programming language. 
* [AAP-3.A.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) A procedure call interrupts the sequential execution of statements, causing the program to execute the statements within the procedure before continuing. Once the last statement in the procedure (or a return statement) has executed, flow of control is returned to the point immediately following where the procedure was called. 
* [AAP-3.B.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) One common type of abstraction is procedural abstraction, which provides a name for a process and allows a procedure to be used only knowing what it does, not how it does it.
* [AAP-3.B.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) Procedural abstraction allows a solution to a large problem to be based on the solutions of smaller subproblems. This is accomplished by creating procedures to solve each of the subproblems.  
AAP-3.B.3 The subdivision of a computer program into separate subprograms is called modularity. 
* [AAP-3.B.6](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=95) Using procedural abstraction helps improve code readability.  
* [AAP-3.B.7](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=95) Using procedural abstraction in a program allows programmers to change the internals of the procedure (to make it faster, more efficient, use less storage, etc.) without needing to notify users of the change as long as what the procedure does is preserved.  
* AAP-3.C.1 The exam reference sheet provides:
    * Text: PROCEDURE procName(parameter1,parameter2, ...) { &lt;block of statements&gt; }
    * Block: PROCEDURE procName<br/>block of statements<br/>parameter1, parameter2,...
    * These define a procedure that takes zero or more arguments. The procedure contains block of statements.

## Details

### 1. Programming principles review (5 minutes)

* Review programming principles from Unit 3
    * What is an algorithm?
    * What are the three types of programming constructs commonly used in algorithm implementations?
    * Define sequencing
    * Define selection
    * Define iteration
    * What is an event in coding?
    * Define variables
    * List the types of variables
    * What are conditional statements?
    * In MakeCode, what is the difference between a sprite and a projectile?
    * What is randomness?
    * What are the two types of random?
    * Why do we use random numbers in programming?

### 2. Introduce Functions (5 minutes)

* Define Procedures.
* Explain how creating procedures is an type of abstraction.
* Trace a code segment to determine what it will do.

### 3. Learn how to create and call Functions (10 minutes)

* Go to Section A of the <a href="/unit-5/day-1/introduction-to-functions">Introduction to Functions</a> page.
* Students will use the placeSprite code segment to learn how to create and call functions.
* Define modularity.

### 2. Activity: Functions Intro  (20 minutes) 

* Direct students to Section B of the <a href="/unit-5/day-1/introduction-to-functions">Introduction to Functions</a> page.
* Task students with completing Tasks 1a - 1b on the [Activity: Functions Intro](https://arcade.makecode.com/courses/csintro2/functions/intro) page.
* If students have time, encourage them to complete the extension activities for 1a and 1b.

### 5. Reflection/Homework

If you run out of time, you may also assign this as individual homework. Students should complete their reflection.

1. Describe how using functions in code can help make programming easier
2. Does putting code into separate functions always make sense?
3. Would it be more or less clear if we took the code our example and made a function that calls the other three, so that our on start block only had a single block inside of it?

### 6. Extension activities

* Encourage students who finish early to complete the extension activities on the <a href="/unit-5/day-1/introduction-to-functions">Introduction to Functions</a> page.
* Practice sets are written as JavaScript exercises and can be accomplished using block based code. Students can choose whichever code editor they feel most comfortable with to complete the problems. If needed, students can copy the JavaScript snippet from the problem set, paste it into the JavaScript workspace in MakeCode, then switch back to Block. It has been demonstrated that exposing students to both block and text based code simultaneously makes the transition from block to text more successful.