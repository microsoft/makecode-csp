---
title: 'Binary Search Algorithms'
metaTitle: 'Binary Search Algorithms'
order: 0
---

## Summary

### Materials

* [Day 19 PowerPoint deck](https://1drv.ms/p/s!AqsgsTyHBmRBkR4gYhJqXeVQ2cnW?e=6JaD1u)
* [Binary Search Unplugged Activity Resource](https://1drv.ms/w/s!AqsgsTyHBmRBkR_fXKFGyqBDP48p?e=cQA7F6)
* [Computer Science Field Guide: Algorithms](https://youtu.be/FOwCCvHEfY0)
* [Binary Search starter code](https://makecode.com/_7u6ERzga1hhM)
* [Binary Search Solution](https://makecode.com/_fPgg49WwkRdz) (for teacher)

### Instructional Activities and Classroom Assessments

1. Sorting Algorithms Review (5 minutes)
2. Binary Search Algorithm (15 minutes)
3. Code a Sorting Algorithm (30 minutes)
4. Reflection/Homework

### Learning Objectives 

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
* [AAP-2.P](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=90) For binary search algorithms:
    * a. Determine the number of iterations required to find a value in a data set. 1.D 
    * b. Explain the requirements necessary to complete a binary search. 1.A

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
§ accessing an element by index Text: aList[i] Block: aList i accesses the element of aList at index i. The first element of aList is at index 1 and is accessed using the notation  aList[1].<br/>
§ assigning a value of an element of a list to a variable Text: X ← aList [i] Block: X aList i assigns the value of aList[i] to the variable X.<br/>
§ assigning a value to an element of a list Text: aList[i] ← X Block: aList ix assigns the value of X to aList[i]. Text: aList[i] ← aList[j] Block: aListaList ij assigns the value of aList[j] to aList[i].<br/>
§ inserting elements at a given index Text: INSERT(aList, i, value) Block: aList, i, valueINSERT shifts to the right any values in aList at indices greater than or equal to i. The length of the list is increased by 1, and value is placed at index i in aList.<br/>
§ adding elements to the end of the list Text: APPEND(aList, value) Block: APPEND aList, value increases the length of aList by 1, and value is placed at the end of aList.<br/>
§ removing elements Text: REMOVE(aList, i) Block: REMOVE aList, i removes the item at index i in aList and shifts to the left any values at indices greater than i. The length of aList is decreased by 1.<br/>
§ determining the length of a list Text: LENGTH(aList) Block: LENGTH aList evaluates to the number of elements currently in aList.<br/>
* [AAP-2.O.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=89) Traversing a list can be a complete traversal, where all elements in the list are accessed, or a partial traversal, where only a portion of elements are accessed.<br/>
XEXCLUSIONSTATEMENT(EKAAP-2.O.1): Traversing multiple lists at the same time using the same index for both (parallel traversals) is outside the scope of this course and the AP Exam.
* [AAP-2.O.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=89) Iteration statements can be used to traverse a list.
* [AAP-2.P.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=90) The binary search algorithm starts at the middle of a sorted data set of numbers and eliminates half of the data; this process repeats until the desired value is found or all elements have been eliminated.<br/>
XEXCLUSIONSTATEMENT(EK:AAP-2.P.1):<br/>
Specific implementations of the binary search are outside the scope of the course and the AP Exam.  
* [AAP-2.P.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=90) Data must be in sorted order to use the binary search algorithm.
* [AAP-2.P.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=90) Binary search is often more efficient than sequential/linear search when applied to sorted data.

## Details

### 0. Before class 

* Print the Binary Search Unplugged activity resource page.
* Cut out each number.
* Place the number cards face down in numerical order from smallest to largest.

### 1. Sorting Algorithms review (5 minutes)

* Ask students questions regarding sorting algorithms:
    * What are some ways to sort data?
    * Is there only one right way to accomplish a task?
    * How do you determine an algorithm's efficiency?

### 2. Binary Search algorithms (15 minutes)

* Unplugged activity demonstrating why it is important to sort.
* Define binary search algorithm.
* Play video comparing binary search algorithms vs sequential search algorithms.

### 3. Code a Binary Search algorithm in MakeCode (30 minutes)

* Step by step walkthrough of coding a Binary Search in MakeCode.
* If students finish early, encourage them to answer the reflection questions and/or combine their search and sorting algorithms together in one program.

### 4. Reflection/Homework 

_If you run out of time, you may also assign this as individual homework. Students should complete their reflection in their OneNote._

1. Aside from Binary Search, what other types of Search algorithms are there?
2. How do we use Search algorithms in our everyday lives?