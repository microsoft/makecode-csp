---
title: 'Parallel and Distributed Computing'
metaTitle: 'Parallel and Distributed Computing'
order: 0
---

## Summary

### Materials

* [Day 6 PowerPoint deck](https://1drv.ms/w/s!AqsgsTyHBmRBjz2n4qHObblYfWJu?e=7JO3H6)
* Deck of cards for each small group
* [Big Data In 5 Minutes | What Is Big Data?| Introduction To Big Data |Big Data Explained |Simplilearn](https://youtu.be/bAyrObl7TYE)
* <a href="/unit-2/day-6/real-world-scenarios">Real World Scenarios Handout</a> (cut the paper to separate each scenario)
* <a href="/unit-2/day-6/reflection">Day 6 Reflection</a> (Homework)
* [Day 6 Reflection](https://1drv.ms/w/s!AqsgsTyHBmRBjzuTk5OBzbu1BTi7?e=ewM0jk) (Homework) in Word

### Instructional Activities and Classroom Assessments

1. Fault Tolerance Review (5 minutes)
2. Hands-on Activity (15 minutes)
3. Parallel and Distributed Computing (15 minutes)
4. Group Activity (15 minutes)
5. Homework

### Learning Objectives

* [CSN-2.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=114) For sequential, parallel, and distributed computing:
Compare problem solutions.
Determine the efficiency of solutions.
* [CSN-2.B](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=115) Describe benefits and challenges of parallel and distributed computing.
* Computational Thinking Practice [1.D](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23) Evaluate solution options.
* Computational Thinking Practice [5.A](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=23) Explain how computing systems work.
* CSN-1.E
* DAT-2.C

### Essential Knowledge 

* [CSN-2.A.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=114) Sequential computing is a computational model in which operations are performed in order one at a time.
* [CSN-2.A.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=114) Parallel computing is a computational model where the program is broken into multiple smaller sequential computing operations, some of which are performed simultaneously.
* [CSN-2.A.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=114) Distributed computing is a computational model in which multiple devices are used to run a program.
* [CSN-2.A.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=114) Comparing efficiency of solutions can be done by comparing the time it takes them to perform the same task.
* [CSN-2.A.5](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=114) A sequential solution takes as long as the sum of all of its steps.
* [CSN-2.A.6](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=114) A parallel computing solution takes as long as its sequential tasks plus the longest of its parallel tasks.
* [CSN-2.A.7](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=115) The "speedup" of a parallel solution is measured in the time it took to complete the task sequentially divided by the time it took to complete the task when done in parallel.
* [CSN-2.B.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=115) Parallel computing consists of a parallel portion and a sequential portion.
* [CSN-2.B.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=115) Solutions that use parallel computing can scale more effectively than solutions that use sequential computing.
* [CSN-2.B.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=115) Distributed computing allows problems to be solved that could not be solved on a single computer because of either the processing time or storage needs involved.
* [CSN-2.B.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=115) Distributed computing allows much larger problems to be solved quicker than they could be solved using a single computer.
* [CSN-2.B.5](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=115) When increasing the use of parallel computing in a solution, the efficiency of the solution is still limited by the sequential portion. This means that at some point, adding parallel portions will no longer meaningfully increase efficiency.
* CSN-1.E.1
* CSN-1.E.2
* CSN-1.E.3
* CSN-1.E.4
* CSN-1.E.5
* CSN-1.E.6
* CSN-1.E.7
* DAT-2.C.6
* DAT-2.C.7
* DAT-2.C.8

## Details

### 1. Fault Tolerance Review (5 minutes)

* What are the benefits of fault tolerance?
* Explain how a network system is fault-tolerant.
* Identify vulnerabilities to failure in a system.

### 2. Hands-on Activity (15 minutes)

* Organize students into small groups of 4-5.
* You can use the [Group Generator](https://arcade.makecode.com/31859-57060-41272-95490) program to randomly sort students.
* Give each group a deck of cards.
* Task the groups with the following:
    * Assign one teammate to sort the cards as quickly as possible.
    * Time your teammate.
* When the individuals are finished, celebrate the winner in some way.
* Task the groups with the following: 
    * Shuffle their deck of cards.
    * Pass the deck of cards to the group to the right.
    * Work together as a group to sort the cards as quickly as possible.
    * Before they get started, give them a minute to decide how they will work together to complete the task quickly.
* When the groups are finished, celebrate the winning group in some way.
* Discuss the differences in the first sorting and the second sorting:
    * What made the second sorting faster? Why?
    * Ask students to identify the terms of the actions they took (i.e., sequential, parallel, distributed).
    * What is the "speedup" of the sorting:
        * Time it took to complete the task sequentially divided by the time it took to complete the task in parallel.

### 3. Parallel and Distributed Computing (15 minutes)

* Watch Ford assembly line video.
* Discuss what makes an assembly line efficient.
* Define traditional computing.
* Define parallel computing.
* Define distributed computing.
* Play [Big Data In 5 Minutes | What Is Big Data?| Introduction To Big Data |Big Data Explained |Simplilearn](https://youtu.be/bAyrObl7TYE) video:
    * You can stop at the 4:01 minute mark.
    * Discuss how:
        * The size of data set affects the amount of information that can be extracted from it.
        * Parallel computing systems help process large data sets.
        * Scalability of systems is an important consideration.

### 4. Group Activity (15 minutes)

* Students will stay in their small groups.
* Give each group a different task; you can choose from the following:
    * Organizing the books in a library.
    * Creating a display for a store front.
    * Calling customers to notify them that their order has shipped.
    * Counting the inventory in a store.
    * Reading orders, finding the products, putting them in shipping boxes, and mailing them to customers. 
    * Sorting the supplies for a restaurant.
* Ask each group to work together to create a plan that uses everyone in the group to complete the task.
* Students should write their plan down and identify times when team members can work independently, when they can work together, and when they will need to wait on another group member to move to the next step.

### 5. Homework 

* Students will watch the Folding at Home video and answer the questions related to the video.
* Students will complete the reflection questions related to the day's activities.