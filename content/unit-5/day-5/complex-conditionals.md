---
title: 'Complex Conditionals'
metaTitle: 'Complex Conditionals'
order: 0
---

## Summary

### Materials

* [Day 5 PowerPoint deck](https://1drv.ms/p/s!AqsgsTyHBmRBkHbK5Mhjf4_lLic3?e=HfmE9b)
* [Hungry](https://makecode.com/_8Eb2bAeAifwd)
* [Hungry Mod](https://makecode.com/_XfX24i7Wy3PX) (for teacher)
* [NOT Left](https://makecode.com/_bxsaJyWDP9qr) (for teacher)
* [Quadrants](https://makecode.com/_PDq6s94poRka) (for teacher)
* <a href="/unit-5/day-5/boolean-statements-expressions">Boolean Statements and Expressions</a> handout
* [Boolean Statements and Expressions](https://1drv.ms/w/s!AqsgsTyHBmRBkHevoEgMb3WTsnZv?e=gdkoAv) handout in Word
* [Activity: Boolean Statements and Expressions](https://arcade.makecode.com/courses/csintro2/logic/booleans)

#### Reference

* [Boolean](https://arcade.makecode.com/blocks/logic/boolean)

### Instructional Activities and Classroom Assessments 

1. Boolean Refresher (5 minutes)
2. Using Booleans (20 minutes)
3. Boolean Practice (25 minutes)
4. Reflection/Homework

### Learning Objectives 

* [AAP-2.E](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=78) For relationships between two variables, expressions, or values:
    * a. Write expressions using relational operators. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23) 
    * b. Evaluate expressions that use relation operators. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.F](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=79) For relationships between Boolean values:
    * a. Write expressions using logical operators. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Evaluate expressions that use logic operators. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.H](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=80) For selection:
    * a. Write conditional statements. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Determine the result of conditional statements. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.I](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=82) For nested selection:
    * a. Write nested conditional statements. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Determine the result of nested conditional statements. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)

### Essential Knowledge

* [AAP-2.E.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=78) A Boolean value is either true or false.
* [AAP-2.E.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=78) The exam reference sheet provides the following relational operators: =, ≠, >, <, ≥, and ≤. Text and Block:  
§ a = b<br/>
§ a ≠ b<br/>
§ a > b<br/>
§ a < b<br/>
§ a ≥ b<br/>
§ a ≤ b<br/>
These are used to test the relationship between two variables, expressions, or values. A comparison using a relational operator evaluates to a Boolean value. For example, a = b evaluates to true if a and b are equal; otherwise, it evaluates to false.

* [AAP-2.F.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=79) The exam reference sheet provides the logical operators NOT, AND, and OR, which evaluate to a Boolean value.
* [AAP-2.F.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=79) The exam reference sheet provides Text: NOT condition Block: NOT condition which evaluates to true if condition is false; otherwise it evaluates to false.
* [AAP-2.F.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=79) The exam reference sheet provides Text: condition1 AND condition2 Block: condition1 AND condition2 which evaluates to true if both condition1 and condition2 are true; otherwise it evaluates to false.
* [AAP-2.F.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=79) The exam reference sheet provides Text: condition1 OR condition2 Block: condition1 OR condition2 which evaluates to true if condition1 is true or if condition2 is true or if both condition1 and condition2 are true; otherwise it evaluates to false.
* [AAP-2.F.5](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=79) The operand for a logical operator is either a Boolean expression or a single Boolean value.
* [AAP-2.H.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=80) Conditional statements, or "if-statements," affect the sequential flow of control by executing different statements based on the value of a Boolean expression. 
* [AAP-2.H.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=80) The exam reference sheet provides
    * Text: IF(condition) { &lt;block of statements&gt; }
    * Block: IF condition block of statements in which the code in block of statements is executed if the Boolean expression condition evaluates to true; no action is taken if condition evaluates to false.
* [AAP-2.I.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=82) Nested conditional statements consist of conditional statements within conditional statements. 

## Details

### 1. Booleans refresher (5 minutes)

* Remind students what Boolean logic and Boolean variables are. 
* Explain Boolean flags.

### 2. Using Boolean (20 minutes)

* Students will further how to incorporate Boolean flags in their programs.
* Students will evaluate code segments and modify them to use Boolean logic:
    * Students will work independently to modify the areYouHungry code segment to improve its functionality.
    * Students will work with a partner to use the NOT variable to move a sprite with the controllers and have the sprite say something.
* Encourage students to publish their projects and add the links.
* Guide students how to use:
    * Not
    * And
    * Or
    * Nested conditionals

### 3. Boolean practice (25 minutes) 

* Go to <a href="/unit-5/day-5/boolean-statements-expressions">Boolean Statements and Expressions</a>.
* Task students with completing Tasks 3 and 4.
* If students have time, encourage them to complete the extensions activities. 

### 4. Reflection/Homework 

_If you run out of time, you may also assign this as individual homework. Students should complete their reflection._

1. What is a Boolean flag? Describe a case in which you might you want to use one?

2. What is the difference between an AND block and an OR block?
    * In what cases will they both evaluate to true?
    * In what cases will they both evaluate to false?
    * In what cases will they evaluate differently?
 
