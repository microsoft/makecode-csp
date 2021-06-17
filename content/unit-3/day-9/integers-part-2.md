---
title: "Integers Part 2"
metaTitle: "Integers Part 2"
order: 0
---

## Summary

### Materials

* [Day 9 PowerPoint deck](https://1drv.ms/w/s!AqsgsTyHBmRBkFXKjstbzJe5ioSK?e=sUBfFi)
* [MakeCode Arcade](https://arcade.makecode.com)
* <a href="/unit-3/day-9/my-20percent-tip-app">My 20% Tip App</a> handout
* [math+1](https://arcade.makecode.com/50835-80330-42471-08717) (for teacher)
* [Mod - JavaScript](https://arcade.makecode.com/80718-73341-66614-17701) Code (for teacher)
* [Mod - Python](https://arcade.makecode.com/88951-80998-23686-31084) Code (for teacher)
* <a href="/unit-3/day-9/military-time-converter">Military Time Converter</a> handout

### Instructional Activities and Classroom Assessments

1. Integers Review (5 minutes)
2. Modify Temperature Converter (5 minutes)
3. Create a 20% Tip App (15 minutes)
4. Introduction to Expressions (5 minutes)
5. Modulus Operator (5 minutes)
6. Military Time Converter (15 minutes)
7. Reflection/Homework

### Learning Objectives

* [CRD-2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=41) Explain how a program or code segment functions. [4.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=23)
* [CRD-2.G](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=45) Describe the purpose of a code segment or program by writing documentation. [4.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=23)
* [AAP-1.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) Represent a value with a variable. [3.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=23)
* AAP-2.C Evaluate expressions that use arithmetic operators. 4.B
* AAP-2.A Express an algorithm that uses sequencing without using a programming language. 2.A
AAP-1.B
Determine the value of a variable as a result of an assignment. 4.B

### Essential Knowledge

* [CRD-2.A.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=41) The purpose of computing innovations is to solve problems or to pursue interests through creative expression.
* [CRD-2.B.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=41) A code segment is a collection of program statements that is part of a program.
* [CRD-2.G.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=45) Programmers should document a program throughout its development.
* [AAP-1.A.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) A variable is an abstraction inside a program that can hold a value. Each variable has associated data storage that represents one value at a time, but that value can be a list or other collection that in turn contains multiple values.
* [AAP-1.A.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) Using meaningful variable names helps with the readability of program code and understanding of what values are represented by the variables.
* AAP-1.B.1 The assignment operator allows a program to change the value represented by a variable.   
* AAP-1.B.2 The exam reference sheet provides the ” ” operator to use for assignment. For example, Text: a  expression Block:  a expression evaluates expression and then assigns a copy of the result to the variable a.  
* AAP-1.B.3 The value stored in a variable will be the most recent value assigned. For example: ab a1 a2 display(b) still displays 1.
* AAP-2.C.1 Arithmetic operators are part of most programming languages and include addition, subtraction, multiplication, division, and modulus operators. 
* AAP-2.C.2 The exam reference sheet provides a MOD b, which evaluates to the remainder when a is divided by b. Assume that a is an integer greater than or equal to 0 and b is an integer greater than 0. For example, 17 MOD 5 evaluates to 2.
* AAP-2.C.3 The exam reference sheet provides the arithmetic operators  + - * / , , , , and  MOD. Text and Block:
§ a + b § a – b § a * b § a / b § a MOD b These are used to perform arithmetic on a and b. For example, 17 / 5 evaluates to 3.4.
* AAP-2.C.4 The order of operations used in mathematics applies when evaluating expressions. The MOD operator has the same precedence as the * and / operators.
* AAP-2.A.2 Beyond visual and textual programming languages, algorithms can be expressed in a variety of ways, such as natural language, diagrams, and pseudocode.

## Details

### 1. Integers review (5 minutes)

* Discuss yesterday's reflection/homework questions with students. 
* In JavaScript, what is the resulting value of answer = 5+3*2? Explain why the answer is not 30:
    * 11, order of operations
* How is putting operators and numbers into a calculator different than writing code?
* What Math Operators did you research?
* What did you learn about variables, data types, strings, and join?

### 2. Modify temperature converter (5 minutes)

* Task students to improve their temperature converter to seek user input.
    * Show them where to find the ask for number block.
    * Let them explore how to integrate it into their program to seek user input.

### 3. Create a 20% Tip App (15 minutes)  

* Task students with creating an app that calculates a 20% tip when they go to a restaurant:
    * Include user input
    * Include calculation
    * Include output
* Encourage them to write pseudocode first.
* When they are finished, students must complete the tasks on the My 20% Tip App page.

### 4. Introduction to expressions (5 minutes) 

* Task students with trading the code of a program to determine what it will do.
* Explain what expressions are and how they relate to integer variables.
* Explain that expressions that are longer than two items will follow the order of operations used in mathematics.
* Remind students of the order of operations in mathematics:
    * PEMDAS

### 5. Modulus operator (5 minutes)

* Explain what the modulus operator is.
* Guide students through the process of using JavaScript (or Python) in MakeCode Arcade to see how Modulus works with numbers.
* Once students create their program, encourage them to enter different numbers to see the results.

### 5. Military Time Converter (15 minutes)

* Explain that programs that convert military time to standard time use modulus.
* Explain how military time works.
* Task students to work in pairs to create a program that converts military time to standard time:
    * Include user input
    * Conversion for military time to standard time, including a.m. and p.m.
    * Include output
* Encourage them to write pseudocode first.
* When they are finished, students must complete the tasks on the Military Time Converter page.

### 6. Reflection/Homework

(If you run out of time, you may also assign this as individual homework.)
Students should complete their reflection in their OneNote.

* How is working with integers different that working with sprites?
* Did you use any of the Math blocks you researched?
* **Note**: You could also create an assignment through AP Classroom or Delta Math to practice concepts related to MOD.