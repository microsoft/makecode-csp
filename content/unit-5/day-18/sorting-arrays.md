---
title: 'Sorting Arrays'
metaTitle: 'Sorting Arrays'
order: 0
---

## Summary

### Materials

* [Day 18 PowerPoint deck](https://1drv.ms/p/s!AqsgsTyHBmRBkRxBAXqjx0nr_rhE?e=Gtc0gb)
* <a href="/unit-5/day-18/sorting-arrays-practice">Sorting Arrays Practice</a> handout
* [Sorting Arrays Practice](https://1drv.ms/w/s!AqsgsTyHBmRBkR2cAA8L_-rG_dJT?e=UYiIaQ) handout in Word
* [Sorting Algorithms](https://arcade.makecode.com/graphics-math/sorting-algorithms)

### Instructional Activities and Classroom Assessments

1. Arrays review (5 minutes)
2. Sorting Introduction (25 minutes)
3. Activity: Sorting Algorithm (20 minutes)
4. Reflection/Homework

### Learning Objectives 

* [AAP-1.C](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=72) Represent a list or string using a variable. [3.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-1.D](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=73) For data abstraction:
    * a. Develop data abstraction using lists to store multiple elements. [3.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Explain how the use of data abstraction manages complexity in program code. [3.C](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.N](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=87) For list operations:
    * a. Write expressions that use list indexing and list procedures. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Evaluate expressions that use list indexing and list procedures. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.O](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=89) For algorithms involving elements of a list:
    * a. Write iteration statements to traverse a list. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Determine the result of an algorithm that includes list traversals. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-4.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=101) For determining the efficiency of an algorithm:
    * a. Explain the difference between algorithms that run in reasonable time and those that do not. 1.D

### Essential Knowledge

* [AAP-1.A.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) A variable is an abstraction inside a program that can hold a value. Each variable has associated data storage that represents one value at a time, but that value can be a list or other collection that in turn contains multiple values.
* [AAP-1.C.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=72) A list is an ordered sequence of elements. For example, [value1, value2, value3, ...] describes a list where value1 is the first element, value2 is the second element, value3 is the third element, and so on.
* [AAP-1.C.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=72) An element is an individual value in a list that is assigned a unique index.
* [AAP-1.C.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=72) An index is a common method for referencing the elements in a list or string using natural numbers.
* [AAP-1.D.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=73) Data abstractions can be created using lists.
* [AAP-1.D.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=73) Developing a data abstraction to implement in a program can result in a program that is easier to develop and maintain.
* [AAP-1.D.5](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=73) Data abstractions often contain different types of elements.
* [AAP-1.D.6](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=73) The use of lists allows multiple related items to be treated as a single value. Lists are referred to by different names, such as array, depending on the programming language.
* [AAP-2.N.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=87) The exam reference sheet provides basic operations on lists, including:<br/>
§ accessing an element by index Text: aList[i] Block: aList i accesses the element of aList at index i. The first element of aList is at index 1 and is accessed using the notation  aList[1].<br/>
§ assigning a value of an element of a list to a variable Text: X ← aList [i] Block: X aList i assigns the value of aList[i] to the variable X.<br/>
§ assigning a value to an element of a list Text: aList[i] ← X Block: aList ix assigns the value of X to aList[i]. Text: aList[i] ← aList[j] Block: aListaList ij assigns the value of aList[j] to aList[i].<br/>
§ inserting elements at a given index Text: INSERT(aList, i, value) Block: aList, i, valueINSERT shifts to the right any values in aList at indices greater than or equal to i. The length of the list is increased by 1, and value is placed at index i in aList.<br/>
§ adding elements to the end of the list Text: APPEND(aList, value) Block: APPEND aList, value increases the length of aList by 1, and value is placed at the end of aList.<br/>
§ removing elements Text: REMOVE(aList, i) Block: REMOVE aList, i removes the item at index i in aList and shifts to the left any values at indices greater than i. The length of aList is decreased by 1.<br/>
§ determining the length of a list Text: LENGTH(aList) Block: LENGTH aList evaluates to the number of elements currently in aList.
* [AAP-2.O.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=89) Traversing a list can be a complete traversal, where all elements in the list are accessed, or a partial traversal, where only a portion of elements are accessed.<br/>
XEXCLUSIONSTATEMENT(EKAAP-2.O.1): Traversing multiple lists at the same time using the same index for both (parallel traversals) is outside the scope of this course and the AP Exam.
* [AAP-2.O.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=89) Iteration statements can be used to traverse a list.

## Details

### 0. Before class

* Write (or print) the numbers 1-10 on large pieces of paper (one large number printed to a page).
* Mix up the order of the pages of numbers.

### 1. Review Arrays (5 minutes)

* Define array of sprites.
* Explain how sprite arrays can be used.

### 2. Introduction to sorting Arrays (25 minutes)

* Define sorting arrays.
* Explain how sorting arrays can be used.
* Demonstrate different types sorts:
    * Unplugged: bubble sorts
    * Unplugged: selection sort
    * Unplugged: insertion sort

### 3. Activity: Sorting Algorithm (20 minutes)

Direct students to the <a href="/unit-5/day-18/sorting-arrays-practice">Sorting Arrays Practice</a> page.
Instruct students to create a bubble sorting algorithm in MakeCode (NOTE: this is a challenging assignment. It's okay if a majority of students don't get it. Feel free to walk through the solution code with them.)
Students will have the opportunity to complete this activity in the next lesson.
Encourage students to publish their work and paste the links on their <a href="/unit-5/day-18/sorting-arrays-practice">Sorting Arrays Practice</a> page.

### 4. Reflection/Homework

_If you run out of time, you may also assign this as individual homework. Students should complete their reflection in their OneNote._

1. Why are sorting algorithms important?
2. What concepts did you use to code your sorting algorithm?
3. What was most challenging?
4. What surprised you most?