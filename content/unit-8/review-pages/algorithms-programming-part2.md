---
title: "Algorithms and Programming Part 2"
metaTitle: "Algorithms and Programming Part 2"
order: 3
---

## Algorithms and Programming Part 2 Review

<Info>

**AAP - Part 2 Conceptual Framework**

[Big Idea 3: Algorithms and Programming (AAP)](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=235)
</Info>

* In computer science, a procedure is a named group of programming instructions that may have parameters and return values.
* In other words, it is an independent set of instructions that fulfills some concrete task and is referenced within a larger body of source code.
* Procedures help programmers create a specific plan of action for part of their program that can be used every time in different places in the larger program.
* Procedures, also known as methods or functions, allow you to group sections of code to be run together.
* Procedures increase code readability and will enable you to reuse the code.
* In programming, one common type of abstraction is **Procedural Abstraction** by providing a name for a process and allows a procedure to be used only knowing what it does, not how it does it.
* Procedures, also known as methods or functions, group sections of code together and increase the readability of your code.
* In the real world, multiple programmers could be working on one project.
* One programmer is responsible for creating specific procedures for other programmers to use.
* The programmer that uses the procedure may not understand each step needed to complete a procedure but will understand the end result.
* In other words, procedural abstraction allows a solution to a large problem to be based on the solutions of smaller subproblems.
* This is accompanied by creating procedures to solve each of the subproblems.
* A procedure call interrupts the sequential execution of statements, causing the program to execute the statements within the procedure before continuing.
* Once the last statement in the procedure has executed, flow of control is returned to the point immediately following where the procedure was called.
* Using the modular approach, the process of subdividing a computer program into separate sub-programs, we can add additional actions to our program, such as on button press, on shake, and many more.
* Parameters are input variables of a procedure.
* In other words, it is a special kind of variable that is used to pass information to a procedure.
* Using parameters allows procedures to be generalized, enabling the procedures to be reused with a range of input values or arguments.
* A procedure is a named group of programming instructions that may have parameters and return values.
* Procedures are referred to by different names, such as method or function, depending on the programming language.
* Parameters are input variables of a procedure.
* Arguments specify the values of the parameters when a procedure is called.
* A procedure call interrupts the sequential execution of statements, causing the program to execute the statements within the procedure before continuing.
* Once the last statement in the procedure (or a return statement) has executed, flow of control is returned to the point immediately following where the procedure was called.
* Functions not only make our lives easier by organizing code and making our code more readable. You can also give information to the function to work with.
* Variables enable us to add **parameters** to our functions. Parameters are variables that can be passed or given to the function. This allows us to write functions that can react appropriately to different conditions and settings.
* Functions can be provided with parameters by choosing a data type when defining the function.
* Parameters can be used to make code more efficient between different functions.
* Functions are not limited to a single parameter; more than one parameter can be passed, by adding parameters when defining the function.
* When calling the function, the order the parameters are passed must match the order the parameters were defined in;
* Parameters allow you to pass (give) values to a function, but that’s not all-
* Functions can also give you back a value after it finishes.
* Return values allows a function to return, or give back, a value at the end of a function call.
* This ends the call to the function, then continues the code from where the function was called.
* Functions can be given a return value by using the return value block.
* The return value block is automatically generated in the Functions toolbox when you create your first function.
* Return values have the following elements:
    * return: the start of the return statement; the value that follows this is the output
    * output: the value that is returned
* If you do not set a variable to store the result, you will not be able to access/use the return outside the function.
The blocks and built-in functions are considered procedural abstractions.
* Answer: a procedural abstraction calls (uses) a function only knowing what it does, not how it does it.
<br/>

* Lists are a variable that, instead of being a single item, is a collection of items that are related to one another.
* A list is an abstract data type.
* A list is an ordered sequence of elements.
* A list indexes elements so that each may be called using a numeric index locator.
* A list treats many related items as a single variable.
* Values can pass from lists via a parameter.
* Lists allow for the storage and use of a large number of values that share a type.
* Lists store values at different **indices**, so that you can keep track of where values are located within the list.
* In most programming languages, lists serve as some of the most basic **data structures** that can be used to keep track of sequences of data (with some minor differences in behavior depending on how the language implements them).
* One frequently used algorithm that incorporates lists and iteration is one that determines a minimum or maximum value in a list.
* Another frequently used algorithm that incorporates lists and iteration is one that computes a sum or average of a list of numbers.
* In computer science, there are certain common strategies, or algorithms, for sorting a collection of values.
* We will look at three types of sorts:
    * Bubble sort
    * Selection sort
    * Insertion sort
* Bubble sorts are sorting algorithms that works repeatedly swapping the adjacent elements.
* Selection sort is when the array is divided into two parts.
    * The sorted part to the right.
    * The unsorted part to the left.
* The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.
* Insertion sort is a simple sorting algorithm that builds the final sorted array (list) one item at a time.
* The binary search algorithm starts at the middle of a sorted data set of numbers and eliminates half of the data.
* Data must be in sorted order to use the binary search algorithm.
* Binary search is often more efficient than sequential/linear search when applied to sort data.
* Linear search or sequential search algorithms check each element of a list, in order, until the desire value is found or all elements in the list have been checked.
* If the search function uses a binary search algorithm, which starts at the middle of a sorted data set of numbers and eliminates half of the data, it should be more efficient than a sequential or linear search of the same data.
<br/>

* When writing code, software developers want to avoid spending time recreating code that already exists.
* We've experienced how a single developer might do this using functions, but we have not yet discussed how developers can share code amongst others.
* Can you imagine writing an entire application from scratch?
* While it has been done, it is much more efficient to re-use code, and give credit.
* Existing code segments can come from internal or external sources, such as libraries or previously written code.
* Developers can use existing code segments through software libraries.
* A software library contains procedures to use when creating new programs. 
* The use of libraries simplifies the task of creating complex programs.
* Using pre-packaged functions reduces the coding required while writing your own game.
* Using Procedural Abstraction, we can choose sections of code by knowing what it does, but since it was part of the prebuilt package, we don’t necessarily know how it does it.
* Application program interfaces (APIs) are specific for how the procedures in a library behave and can be used.
* When building a library or using a library, documentation is important.
* This documentation will assist you in understanding behaviors and how to use them.
<br/>

* Simulations are abstractions of more complex objects or phenomena for a specific purpose.
* Simulations facilitate the formulation and refinement of hypotheses related to the objects or phenomena under consideration.
* A simulation is a representation that uses varying sets of values to reflect the changing state of a phenomenon.
* Simulations often mimic real-world events with the purpose of drawing inferences, allowing investigation of a phenomenon without the constraints of the real world.
* Simulations are most useful when real-world events are impractical for experiments.
* For example, some experiments or trials are too big, too small, too fast, too slow, too expensive, or too dangerous.
* The process of developing an abstract simulation involves removing specific details or simplifying functionality.
* Simulations can contain bias derived from the choices of real-world elements that were included or excluded.
* The roll the dice experiment is a simulation.
* Simulations are used in a variety of fields and professions.
* Pilots and astronauts use flight simulations.
* Scientists use simulations to test theories or create visualizations of concepts.
* Medical professions can use simulations to predict the outbreak of an illness.
<br/>

* There are different types of problems.
* A problem is a general description of a task that can (or cannot) be solved algorithmically.
* An instance of a problem also includes specific input.
* For example, sorting is a problem.
* Sorting the list (2, 3, 1, 7) is an instance of the problem.
* A decision problem is a problem with a yes/no answer.
* For example is there a path from A to B.
* An optimization problem is a problem with the goal of finding the “best” solution among many.
* For example what is the shortest path from A to B.
* Efficiency is an estimation of the amount of computational resources used by an algorithm.
* Efficiency is typically expressed as a function of the size of the input.
* An algorithm’s efficiency is determined through formal or mathematical reasoning.
* An algorithm’s efficiency can be informally measured by determining the number of times a statement or group of statements executes.
* Different correct algorithms for the same problem can have different efficiencies.
* Algorithms with a polynomial efficiency or slower (constant, linear, square, cube, etc.) are said to run in a reasonable amount of time.
* Algorithms with exponential or factorial efficiencies are examples of algorithms that run in an unreasonable amount of time.
* Some problems cannot be solved in a reasonable amount of time because there is no efficient algorithm for solving them.
* In these cases, approximate solutions are sought.
* A heuristic is an approach to a problem that produces a solution that is not guaranteed to be optimal.
* It is used when techniques that are always guaranteed to find an optimal solution are impractical.
* Think about it as making an educated guess.
* The solution is good enough to use the available information in the amount of time allocated to solve a problem.
* In algorithms, this is often used when there is too much data to analyze in a limited amount of time.
* A heuristic algorithm provides speed versus precision.
* Heuristics algorithms are unique to the problem they are solving.
* A decidable problem is a decision problem for which an algorithm can be written to produce a correct output for all inputs.
* For example, determining if a number is even is a decidable problem.
* An undecidable problem, however, is a problem for which no algorithm can be constructed that is always capable of providing a correct yes-or-no answer.
* An undecidable problem may have some instances that have an algorithmic solution, but there is no algorithmic solution that could solve all instances of the problem.