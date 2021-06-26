---
title: "Return Values"
metaTitle: "Return Values"
order: 0
---

## Summary

### Materials  

* [Day 3 PowerPoint deck](https://1drv.ms/p/s!AqsgsTyHBmRBkHL0jvefaMAzb4nh?e=7Y5Kau)
* [Full Name sample code](https://makecode.com/_a5dCeY4PAage)
* [Series Sum code sample](https://makecode.com/_5L7dcuausc8j)
* [Series Sum Solution](https://makecode.com/_7gd9Dog90Cjx) (for teacher)
* [Pizza Allowance code sample](https://makecode.com/_47Ag5pMvxR3A)
* <a href="/unit-5/day-3/writing-functions-return-values">Writing Functions with Return Values</a> Handout
* [Writing Functions with Return Values](https://1drv.ms/w/s!AqsgsTyHBmRBkHPVidysY-cdISXo?e=wTkRJD) Handout in Word
* [Activity: Return Values](https://arcade.makecode.com/courses/csintro3/functions/returns)
* [Problem Set: Returns](https://arcade.makecode.com/courses/csintro3/functions/returns-problems)

### Instructional Activities and Classroom Assessments 

1. Parameters Review (5 minutes)
2. Introduce Return Values (20 minutes)
3. Activity: Writing Functions with Return Values (25 minutes)
4. Reflection
5. Homework

### Learning Objectives 

* [AAP-3.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) For procedure calls:
    * a. Write statements to call procedures. [3.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Determine the result or effect of a procedure call. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23) 
* [AAP-3.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) Explain how the use of procedural abstraction manages complexity in a program. [3.C](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-3.C](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) Develop procedural abstractions to manage complexity in a program by writing procedures. [3.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)

### Essential Knowledge

* [AAP-3.A.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) A procedure is a named group of programming instructions that may have parameters and return values.
* [AAP-3.A.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) Procedures are referred to by different names, such as method or function, depending on the programming language.
* [AAP-3.A.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) Parameters are input variables of a procedure. Arguments specify the values of the parameters when a procedure is called.
* [AAP-3.A.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=91) A procedure call interrupts the sequential execution of statements, causing the program to execute the statements within the procedure before continuing. Once the last statement in the procedure (or a return statement) has executed, flow of control is returned to the point immediately following where the procedure was called.
* [AAP-3.B.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) One common type of abstraction is procedural abstraction, which provides a name for a process and allows a procedure to be used only knowing what it does, not how it does it.
* [AAP-3.B.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) Procedural abstraction allows a solution to a large problem to be based on the solutions of smaller subproblems. This is accomplished by creating procedures to solve each of the subproblems.
* [AAP-3.B.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) A procedural abstraction may extract shared features to generalize functionality instead of duplicating code. This allows or program code reuse, which helps manage complexity.
* [AAP-3.B.5](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) Using parameters allows procedures to be generalized, enabling the procedures to be reused with a range of input values or arguments.
* [AAP-3.C.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=94) The exam reference sheet provides
```
Text:

PROCEDURE procName(parameter1, parameter2, ...)
{    
    <block of statements>    
    RETURN(expression)
}
Block:  

which is used to define a procedure that takes zero or more arguments. The procedure contains block of statements and returns the value of expression. The RETURN statement may appear at any point inside the procedure and causes an immediate return from the procedure back to the calling statement.
```

## Details 

### 1. Parameters review (5 minutes)

* Review with students:
    * Parameters
    * Data types
    * How to use parameters in a function

### 2. Introduce return values (20 minutes)

* Define return values.
* Student will use examples provided in the PowerPoint to learn how return values work.

### 3. Activity: Writing Functions with Parameters (25 minutes)

* Direct students to go their <a href="/unit-5/day-3/writing-functions-return-values">Writing Functions with Return Values</a> page.
* Task students with completing all of the tasks on the page:
    * Tasks 1 - 2 using the guide on the [Activity: Return Values](https://arcade.makecode.com/courses/csintro3/functions/returns) webpage.
    * Task 3.
    * If students have time, encourage them to code in JavaScript.

### 4. Reflection

If you run out of time, you may also assign this as individual homework. Students should complete their reflection. 

1. What needs to be added to a function so that it will return a value?
2. If a function returns a value in one case, does it need to return a value in all cases?
3. What happens if you call a function with a return value without storing or using the returned value?
4. Where might return values be used in your previous projects?

### 5. Homework

* Task students with completing the activities on the [Problem Set: Returns](https://arcade.makecode.com/courses/csintro3/functions/returns-problems) webpage for homework.
* _Practice sets are written as JavaScript exercises and can be accomplished using block based code. Students can choose whichever code editor they feel most comfortable with to complete the problems. If needed, students can copy the JavaScript snippet from the problem set, paste it into the JavaScript workspace in MakeCode, then switch back to Block. It has been demonstrated that exposing students to both block and text based code simultaneously makes the transition from block to text more successful._