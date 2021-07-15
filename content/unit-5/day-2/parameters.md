---
title: "Parameters"
metaTitle: "Parameters"
order: 0
---

## Summary

### Materials

* [Day 2 PowerPoint deck](https://1drv.ms/p/s!AqsgsTyHBmRBkG-ueZhGpOgZxaM2?e=7QGVhJ)
* [DoSomething sample code](https://makecode.com/_dpa8o38asH3s)
* [Draw Rectangle](https://makecode.com/_6P5MaCAFRW8K)
* [Draw Rectangle Mod](https://makecode.com/_2JR5dXh096Ls) (for teacher)
* [Robot Functions code sample](https://makecode.com/_1yPFy3KrfMvJ)
* [Robot Draw Side solution](https://makecode.com/_MomAAsF3zCMU)
* [Print Console 1 code sample](https://makecode.com/_bmpVwKCqLLKw)
* [Print Console 2 code sample](https://makecode.com/_gCuKfET8XeiJ)
* [Decisions Solution](https://makecode.com/_CyfY2f0puRVC)
* [Change by Five code sample](https://makecode.com/_67EX2zKJfDVH)
* <a href="/unit-5/day-2/writing-functions-parameters">Writing Functions with Parameters handout</a>
* [Writing Functions with Parameters](https://1drv.ms/w/s!AqsgsTyHBmRBkG4gPxl1CKxXuXVg?e=fd3Bcj) handout in Word
* [Activity: Parameters](https://arcade.makecode.com/courses/csintro3/functions/parameters)
* [Problem Set: Parameters](https://arcade.makecode.com/courses/csintro3/functions/parameters-problems)

### Instructional Activities and Classroom Assessments

1. Functions Review (5 minutes)
2. Introduce Parameters (20 minutes)
3. Writing Functions with Parameters (25 minutes)
4. Extension: Code in JavaScript
5. Reflection
6. Homework

### Learning Objectives 

* [AAP-3.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) For procedure calls:
    * a. Write statements to call procedures. [3.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Determine the result or effect of a procedure call. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-3.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) Explain how the use of procedural abstraction manages complexity in a program. [3.C](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* AAP-3.C Develop procedural abstractions to manage complexity in a program by writing procedures. 3.B

### Essential Knowledge 

* [AAP-3.A.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) A procedure is a named group of programming instructions that may have parameters and return values.
* [AAP-3.A.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) Procedures are referred to by different names, such as method or function, depending on the programming language.
* [AAP-3.A.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) Parameters are input variables of a procedure. Arguments specify the values of the parameters when a procedure is called.
* [AAP-3.A.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) A procedure call interrupts the sequential execution of statements, causing the program to execute the statements within the procedure before continuing. Once the last statement in the procedure (or a return statement) has executed, flow of control is returned to the point immediately following where the procedure was called.
* AAP-3.A.5 The exam reference sheet provides procName(arg1, arg2, ...) as a way to call
```
Text: PROCEDURE procName(parameter1, parameter2, ...)
{    
    <block of statements>
}

Block:

PROCEDURE procName
block of statements
parameter1, parameter2, ...
```
which takes zero or more arguments;  arg1 is assigned  to parameter1, arg2 is assigned to parameter2, and so on. 

* [AAP-3.B.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) One common type of abstraction is procedural abstraction, which provides a name for a process and allows a procedure to be used only knowing what it does, not how it does it.
* [AAP-3.B.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) Procedural abstraction allows a solution to a large problem to be based on the solutions of smaller subproblems. This is accomplished by creating procedures to solve each of the subproblems.
* [AAP-3.B.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) A procedural abstraction may extract shared features to generalize functionality instead of duplicating code. This allows or program code reuse, which helps manage complexity.
* [AAP-3.B.5](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) Using parameters allows procedures to be generalized, enabling the procedures to be reused with a range of input values or arguments.
* [AAP-3.B.6](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=95) Using procedural abstraction helps improve code readability.
* [AAP-3.B.7](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=95) Using procedural abstraction in a program allows programmers to change the internals of the procedure (to make it faster, more efficient, use less storage, etc.) without needing to notify users of the change as long as what the procedure does is preserved.
* AAP-3.C.1 The exam reference sheet provides
```
Text:

PROCEDURE procName(parameter1, parameter2, ...)
{
    <block of statements>
}

Block:

PROCEDURE procName
block of statements
parameter1, parameter2, ...
```

which is used to define a procedure that takes zero or more arguments. The procedure contains block of statements.

## Details

### 1. Functions review (5 minutes)

* Review definition of functions.
* Review procedural abstraction.

### 2. Introduce parameters (20 minutes)

* Define parameters.
* Define arguments.
* Explain how functions have parameters.
* Demonstrate how the computer calls functions with parameters:
    * Use the draw square example.
    * Use a robot algorithm example.
* Demonstrate how a function can have multiple parameters.
* Discuss the instruction and explanation for a procedure.
* Show students an example of a robot algorithm that has a procedure.
* Discuss the process to using a procedure in a robot algorithm.
* Explain how procedures and procedure calls are treated on the Exam Reference Sheet.
* Explain how display and input are treated on the Exam Reference Sheet.

### 3. Writing functions with parameters  (25 minutes)

* Direct students to the <a href="/unit-5/day-2/writing-functions-parameters">Writing Functions with Parameters</a> page.
* Task students with completing Tasks 1 - 3 on the [Activity: Parameters](https://arcade.makecode.com/courses/csintro3/functions/parameters) page.
* If students have time, encourage them to complete the extension activities.

### 4. Reflection 

If you run out of time, you may also assign this as individual homework. Students should complete their reflection. 

1. How do parameters allow for more flexible code?
2. Review the functions you have learned, like splash and say, and identify which ones have parameters.
3. Where might parameters be used in your previous projects?

### 5. Homework

* Task students to complete the extension activities on the [Problem Set: Parameters](https://arcade.makecode.com/courses/csintro3/functions/parameters-problems) page.
* Practice sets are written as JavaScript exercises and can be accomplished using block based code. Students can choose whichever code editor they feel most comfortable with to complete the problems. If needed, students can copy the JavaScript snippet from the problem set, paste it into the JavaScript workspace in MakeCode, then switch back to Block. It has been demonstrated that exposing students to both block and text based code simultaneously makes the transition from block to text more successful.
