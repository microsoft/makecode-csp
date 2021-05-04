---
title: 'Answer Key to Guided Reading Questions'
metaTitle: 'Answer Key to Guided Reading Questions'
order: 5
---

## Packet Switching

### What critical decisions had to be made about the Internet?

1. Message sizes - do you limit them? No
2. Nature of the network - packet-switched network (Each packet (or postcard) has about 1500 bytes or less.)

### What is the difference between circuit switching and packet switching?

Circuit switching requires the wires to be connected between you and the person you are trying to reach (like the old phone system). It is reliable and uninterruptible at a high-cost. Packet switching breaks a message down into packets of 1500 bytes or less and then reassembles the message when it reaches it destination. The packets do not have to travel the same route and do not have to arrive in the same order that they were sent.

### What makes the Internet work in practice?

The incredible speed at which the data packets are transmitted and the processing power of the sending and receiving computers, which can disassemble and reassemble the messages so quickly and flawlessly that users don't even notice.

## Core and Edge

### What is the core and edge of the Internet?

Edge = made up of the machines that interface directly with the end users (ex: two computers).

Core = all the connectivity that makes the Internet a network, including computers owned by the telecommunications companies that pass the messages along.

### What is an Internet Service Provider (ISP)?

Any computer that provides access to the Internet, or provides the functions that enable different parts of the Internet to connect to each other. (ex: telephone or cable company at your home; big companies and colleges are their own ISP)

## IP Addresses 

### What are IP addresses? 

They are the destination that packets are directed to and stand for Internet Protocol.

### How many IP addresses are there?

About 4 billion.

### Will that be enough?

Not likely.

### What's the plan for creating more? 

They are working to deploy a new version of IP in which the size of IP addresses increased from 32 bits to 128, which would be about 10 million addresses.

### What are Domain Name Servers?

Computers loaded with information about which IP addresses correspond to which domain names (ex: harvard.edu). 

### What is a port number? 

Packets are tagged with a few more bits so that the gateway can route responses back to the computer within the private network.

### What is Network Address Translation (NAT)?

It conserves IP addresses and makes it impossible to know which computer actually made the request; only the gateway knows which port corresponds to which computer.

## The Key to It All: Passing Packets

### What is the key to it all?

"all the core of the Internet does is to transmit packets." 

### What is a buffer?

Routers have some memory that allows them to store packets temporarily if the packets are arriving faster than they can be processed and dispatched.

### What happens if the buffer fills up? 

The router discards incoming packets that it cannot hold and other parts of the system has to deal with the data loss.

### What happens to packets that are damaged?  

Routers discard them. 

## Protocols 

### What is a protocol?

A standard for communicating messages between networked computers.

### What is Transport Control Protocol (TCP)?

It is a high-level protocol that delivers messages reliably. It is often referenced as TCP/IP. Email software using TCP is failsafe. If the bits arrive at all, it will be a perfect duplicate of the original.

### What is a higher level protocol and what do they transport?

UDP is a high-level protocol that relies on IP for packet delivery of "live" applications such as streaming video and VoIP telephone calls.

### What are two key components of IP that makes it general?

1. It can be used to support a variety of higher-level protocols.
2. It can run over copper, wire, radio signals, and fiber optic cables.

### How is IP doubly general?

It can take its bit packets from many different physical substrates, and deliver those packets for use by many different higher-level services.

- - - - - - - - - - - - - - - **Stop here the first night of homework.**

## The Reliability of the Internet

### Why is the Internet remarkably reliable?

There are no "single points of failure," which means that if a cable breaks, a computer catches fire, or anything else interferes with the message, the protocols automatically reroute the packets around the inoperative links.

### What happens if enough links are broken?

Parts of the Internet may become inaccessible to other parts.

### Give examples of when data has been lost?

Hurricane Katrina and the Henchung earthquake.

### What is another reason you may not receive data intended for you?

Although the Internet core is reliable, computers on the edge usually only have a single connection to the core. Therefore, if your computer loses connection, there is no way to reroute the data.

 
## The Internet Spirit

### The Hourglass

### What is Internet architecture like? 

An hourglass

### What is HTTP? 

HyperText Transport Protocol

### What is it used for?

Sending and receiving web pages

### What is SMTP?

Simple Mail Transport Protocol

### What it is used for?

Sending email 

## Layers, Not Silos

### What is the benefit of creating the Internet with layers rather than silos?

With layers, the people working on the upper layers of the hourglass do not have to know how the lower layers of the hourglass work. If we used silos, we would have different systems, wires, and set ups for email, video, etc., creating a more complicated system.

## End to End

### What does "End to End" in the Internet mean?

The switches making up the core of the network should be dumb-optimized to carry out their single limited function of passing packets. Any functionality requiring more "thinking" than that should be the responsibility of the more powerful computers at the edge of the network. It was better from an engineering standpoint to have the core of the network do the minimum that would enable those more complex functions to be carried out at the edge. This makes it more likely that new applications can be added without having to change the core.

### Separate Content and Carrier 

### What is net neutrality and why is it important? 

Net neutrality allows everyone access to information on the Internet and does not permit providers of the Internet backbone services to charge different prices or different service guarantees to preferred customers.

It is important because if a service provider gets a monopoly on a service, they can control what you are able to access and can control the information you receive. It is also important because if a service provider contends that they can control what you are able to see they are interfering with your rights of privacy.

## Clean Interfaces

### What are some key concepts of designing information systems?

1. Simplicity is always the best way to design.
2. Interfaces should be widely accepted standards.

### What are RFCs?

It stands for Requests for Comment and they are the Internet standards, which are adopted through a process of consensus-building, nonhierarchical in the extreme.

### What is meant by "The Internet is an object lesson in creative compromise producing competitive energy."?

To reach a standard (or RFC), someone posts a proposal and then there is a cycle of comments on it with revisions occurring. Eventually the group reaches something that is useful, that may not be perfect; but everyone is willing to accept it because it is more beneficial to work together than to work alone.
