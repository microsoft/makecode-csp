---
title: 'Arrays Practice'
metaTitle: 'Arrays Practice'
order: 0
---

## Summary

### Materials

* [Day 17 PowerPoint Deck](https://1drv.ms/p/s!AqsgsTyHBmRBkRrfJGE3ouASAgh_?e=mLU3Mq)
* <a href="/unit-5/day-17/arrays-practice-programs">Arrays Practice Programs</a> Handout
* [Arrays Practice Programs](https://1drv.ms/w/s!AqsgsTyHBmRBkRvY5ajgKgbObmKY?e=W1kU0U) Handout in Word

### Instructional Activities and Classroom Assessments

1. Lists (Arrays) Review (5 minutes)
2. Activity: Practice 1, 2, and 3 (45 minutes)
3. Extension
4. Reflection/Homework

### Learning Objectives

* [AAP-1.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) Represent a value with a variable. [3.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-1.C](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=72) Represent a list or string using a variable. [3.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-1.D](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=73) For data abstraction:
    * a. Develop data abstraction using lists to store multiple elements. [3.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Explain how the use of data abstraction manages complexity in program code. [3.C](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.N](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=87) For list operations:  
    * a. Write expressions that use list indexing and list procedures. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Evaluate expressions that use list indexing and list procedures. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-2.O](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=89) For algorithms involving elements of a list:  
    * a. Write iteration statements to traverse a list. [2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
    * b. Determine the result of an algorithm that includes list traversals. [4.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [CRD-2.C](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=42) Identify input(s) to a program. [3.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23)
* [AAP-3.E](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=98) For generating random values:
    * a. Write expressions to generate possible values. 2.B
    * b. Evaluate expressions to determine the possible results. 4.B 2.B
* [AAP-2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=75) Represent a step-by-step algorithmic process using sequential code statements. 2.B

### Essential Knowledge 

* [AAP-1.A.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) A variable is an abstraction inside a program that can hold a value. Each variable has associated data storage that represents one value at a time, but that value can be a list or other collection that in turn contains multiple values.  
* [AAP-1.A.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) Using meaningful variable names helps with the readability of program code and understanding of what values are represented by the variables.
* [AAP-1.A.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) Some programming languages provide types to represent data, which are referenced using variables. These types include numbers, Booleans, lists, and strings.
* [AAP-1.A.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=70) Some values are better suited to representation using one type of datum rather than another.
* [AAP-1.C.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=72) A list is an ordered sequence of elements. For example, [value1, value2, value3, ...] describes a list where value1 is the first element, value2 is the second element, value3 is the third element, and so on.
* [AAP-1.C.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=72) An element is an individual value in a list that is assigned a unique index. 
* [AAP-1.C.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=72) An index is a common method for referencing the elements in a list or string using natural numbers.
* [AAP-1.C.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=72) A string is an ordered sequence of characters.
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
* [AAP-2.N.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=88) List procedures are implemented in accordance with the syntax rules of the programming language.
* [AAP-2.O.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=89) Traversing a list can be a complete traversal, where all elements in the list are accessed, or a partial traversal, where only a portion of elements are accessed.<br/>
XEXCLUSIONSTATEMENT(EKAAP-2.O.1): Traversing multiple lists at the same time using the same index for both (parallel traversals) is outside the scope of this course and the AP Exam.
* [AAP-2.O.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=89) Iteration statements can be used to traverse a list.
* AAP-2.O.3 The exam reference sheet provides
    * Text: FOR EACH item IN aList { &lt;block of statements&gt; }
    * Block: FOR EACH item IN aList block of statements
    * The variable item is assigned the value of each element of aList sequentially, in order, from the first element to the last element. The code in block of statements is executed once for each assignment of item.
* [CRD-2.C.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=42) An event is associated with an action and supplies input data to a program.
* [CRD-2.C.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=42) Events can be generated when a key is pressed, a mouse is clicked, a program is started, or any other defined action occurs that affects the flow of execution.
* AAP-3.E.1 The exam reference sheet provides RANDOM(a, b) Block: RANDOM  a, b which generates and returns a random integer from a to b, inclusive. Each result is equally likely to occur. For example, RANDOM(1, 3) could return 1, 2, or 3.
* AAP-2.B.7 Clarity and readability are important considerations when expressing an algorithm in a programming language.

## Details

### 1. Review Arrays (5 minutes)

* Define lists in computer science
* Explain how lists are used
* Explain how string lists are used

### 2. Activity:  Arrays practice (30 minutes)

* Direct students to the <a href="/unit-5/day-17/arrays-practice-programs">Arrays Practice Programs</a> page.
* Students will go to [Microsoft MakeCode Arcade](https://arcade.makecode.com).
* Instruct students to complete Practice tasks 1, 2, and 3.
* Encourage students to publish their work and paste the links on their <a href="/unit-5/day-17/arrays-practice-programs">Arrays Practice Programs</a> page.

### 3. Extension

* If students finish early, they can complete the extension activity. 
* Encourage students to use JavaScript or Python to create the projects from Task 1, 2, and 3.
* You can also encourage students to incorporate these concepts into an existing project.

### 4. Reflection/Homework

_If you run out of time, you may also assign this as individual homework. Students should complete their reflection in their OneNote._

1. What challenges did you have when creating the Array practice programs?
2. What could you modify or add to improve the program?