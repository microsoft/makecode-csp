---
title: 'Fault Tolerance'
metaTitle: 'Fault Tolerance'
order: 0
---

## Summary


### Materials

* [Day 5 PowerPoint deck](https://1drv.ms/w/s!AqsgsTyHBmRBjzx6W-On5mD7ZYe-?e=zBIeqg)
* Deck of Cards

### Instructional Activities and Classroom Assessments

1. Internet vs. World Wide Web Review (10 minutes)
2. Fault Tolerance Discussion (20 minutes)
3. Defend the Message Game (10 minutes)
4. DDoS Discussion (5 minutes)
5. Homework

### Learning Objectives

* [CSN-1.D](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=111) Describe the differences between the Internet and the World Wide Web.
* [CSN-1.E](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=112) For fault-tolerant systems, like the Internet:
    a. Describe the benefits of fault tolerance.
    b. Explain how a given system is fault-tolerant.
    c. Identify vulnerabilities to failure in a system.
* IOC-2.B

### Essential Knowledge

* [CSN-1.D.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=111) The World Wide Web is a system of linked pages, programs, and files.
* CSN-1.C.2 HTTP is a protocol used by the World Wide Web.
* [CSN-1.D.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=111) The World Wide Web uses the Internet.
* [CSN-1.E.1](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=112) The Internet has been engineered to be fault-tolerant, with abstractions for routing and transmitting data.
* [CSN-1.E.2](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=112) Redundancy is the inclusion of extra components that can be used to mitigate failure of a system if other components fail.
* [CSN-1.E.3](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=112) One way to accomplish network redundancy is by having more than one path between any two connected devices.
* [CSN-1.E.4](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=112) If a particular device or connection on the Internet fails, subsequent data will be sent via a different route, if possible.
* [CSN-1.E.5](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=112) When a system can support failures and still continue to function, it is called fault-tolerant.This is important because elements of complex systems fail at unexpected times, often in groups, and fault tolerance allows users to continue to use the network.
* [CSN-1.E.6](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=112) Redundancy within a system often requires additional resources but can provide the benefit of fault tolerance.
* [CSN-1.E.7](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf?course=ap-computer-science-principles#page=113) The redundancy of routing options between two points increases the reliability of the Internet and helps it scale to more devices and more people.
* IOC-2.B.9 

## Details

### 0. Before Class

* Take the deck of cards and sort them based on color - one stack of red and one stack of black.

### 1. Internet vs. World Wide Web Review (10 minutes)

* Ask students to write a quick summary of the difference between the Internet and the World Wide Web.
* Tell students they have five minutes to write their summary.
* As students write, walk around the room and take the pencil/pen out of some students' hands.
* When they look shocked, simply tell them to hurry up and finish because time is running out. (Students will hopefully grab another pen/pencil and continue writing.) [If you want to complicate things further, you can take the paper students' are writing on away from a few students.]
* When students are finished writing their summary, discuss their answers regarding the difference between the Internet and the World Wide Web.

### 2. Fault Tolerance (20 minutes)

* Discuss the Assignment Disruption for some students.
* Explore ways that students prepare for "failures".
* Discuss Fault Tolerance:
    * Define it.
    * Types of faults that can occur in the system.
    * Ways we can prevent, mitigate, or recover from faults.
    * Single point failure and redundancy.
    * How the Internet is fault-tolerant.
    * Data center redundancy.

### 3. Defend the Message Game (10 minutes)

* Count students off by 3s.
* 1s and 2s should meet to discuss how they can defend malicious attacks.
* 3s should meet to discuss how they can interfere with legitimate communication between devices.
* Give 2s the black cards.
* Give 3s the red cards.
* Give students five minutes to plan their strategy for defending the message (or interfering with it).
* After five minutes (or earlier if students are ready), set timer for three minutes and play the game.
* Goal = Always keep four legitimate packets moving between devices.
* Challenge = Hackers stop the legitimate packets from communicating with devices.
* NOTE: If you have a small class, the defend the message game will not work. With a small class, it will work best to:
    * Divide the class into two groups (1) security professionals and (2) faults.
    * Students who are designated as faults will work together to describe scenarios that would create an error in a network.
    * Students who are designated as security professionals will work together to describe a fault tolerant system that would stop the fault from causing the error.

### 4. DDoS (5 minutes) 

* Explain what DDoS Is.
* Discuss why it is hard to defend