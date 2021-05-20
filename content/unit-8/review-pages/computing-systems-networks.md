---
title: "Computing Systems and Networks"
metaTitle: "Computing Systems and Networks"
order: 4
---

## Computing Systems and Networks Review

<Info>

**CSN Conceptual Framework**

[Big Idea 4: Computing Systems and Networks (CSN)](https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf#page=250)
</Info>

### 1. The Internet

* Three major parts of the Internet:
    * The first and last mile
    * Internet hubs
    * Internet backbone
* A computing system is a group of computing devices and programs working together for a common purpose.
* A computer network is a group of interconnected computing devices capable of sharing information with each other.
* Networks share both digital resources like files and physical resources like printers.
* Devices on a network are generally called nodes or hosts.
* A node is an addressable device on a network.
* A node must have a network interface card to join the network.
* Network switches are central nodes that move messages to nodes in the same network.
* A network router connects two or separate networks; they move data to other routers of different networks until the data reaches its destination.
* A network can either consist of cables or wires that connect all of the computing devices in the system, or it can be wireless. Wireless networks use radio waves or infrared signals to send data.
* A key consideration in computer networks is its data transfer rate, or the time it takes to transfer data from one device on the network to another device on the network. The data transfer is also known as the "bandwidth" of a network.
* The bandwidth of a computer network is the maximum amount of data that can be sent in a fixed amount of time. The web and the networks connected to the web have Internet bandwidth restrictions and establish a maximum number of bits or bytes that can be transmitted. Bandwidth is usually measured in megabits per second.
* When you upload something, you are sending data to someone else or to a server; when you download something, you are receiving data from a website, email server, or streaming media service.
* Bandwidth is how fast data can be transferred per second.
* Latency is how long it takes data to travel between its source and its destination; it is measured in milliseconds.
* An Internet Protocol address (IP address) is a unique numerical label assigned to each device connected to a computer network.
* There are two versions of IP addresses: (1) IP version 4 addresses are 32-bits long (written as decimals) and (2) IP version 6 addresses are 128 bits long (written as hexadecimal numbers).
* Not only does IPv6 allow for a much larger number of addresses, it provides additional features to manage network traffic. IPv6 operates alongside IPv4, creating two parallel networks.
* In addition to the IPv6 and IPv4 addresses which we have already talked about, you will also see the connection specific DNS suffix, the subnet Mask, and the Default Gateway.
* The default gateway makes it possible for your device to talk to another device in a different network.
* When your computer makes a request to access Instagram, for example, the request goes through the default gateway before leaving your computer’s network to access the Internet.
* Essentially, the default gateway transfers data from your computer’s network to the Internet and back again.
* It is called the default gateway because it is the default device that is looked for when data needs to be sent to and from the network.
* The subnet mask is a filter used to determine what portion of a network an IP address belongs to.
* An IP address has two components – the network address and the host address, subnets enable the network administrator to divide the host part o the address into two or more subnets, which can improve network security and performance.
* The Connection-specific DNS suffix tells you part of the computer’s name and identifies the particular set of networks controlled by a particular organization.
* A host name is a name made up of words separated by dots that uniquely identifies a computer on the Internet.
* Each hostname corresponds to a particular IP address, but it communicates the name of the computer on the Internet in readable words rather than the numeric values in IP addresses that computers read.
* A Domain Name specifies a specific organization or group of computers - it identifies a particular set of networks controlled by a specific organization.
* DNS stands for Domain Name System, and acts like a phonebook of the Internet by translating domain names to IP addresses.
* DNS servers eliminate the need for humans to memorize IP addresses.
* The Cloud, or Cloud Computing has become a common term, but it can be a very vague.
* "The Cloud" isn’t a physical thing, it’s simply a network of remote servers (powerful computers) located around the world, usually in large, safe buildings called Data Centers.
* Cloud computing provides services to people such as storing files and data (instead of storing them on your local computer), running online applications, or delivering content such as streaming videos, or email.
* The reason Cloud Computing became so popular is because:
    * It allows people to access their data and applications from any device (laptop, mobile phone, etc.).
    * You don’t have to worry about downloading and installing applications on your computer, or losing files on your computer.
    * It’s cheaper for businesses to “outsource” their technology, instead of having to manage and maintain servers and all the IT infrastructure themselves.
* Packet Switching:
    * When the packets leave Computer 1, they must follow certain protocols, or rules, in order to get to the destination safely and in the right order.
* The Transmission Control Protocol, or TCP is the first protocol that helps the computer break the messages into packets, create a header for each packet that identifies the data, and assigns a port to the message.
* Additionally, the TCP assigns the port to the message.
* One way to think of ports is like different channels on your computer (like channels on your TV), or like different airport departure/arrival gates.
* Having multiple computer ports is what allows you to view a website and read your email at the same time – because the messages are arriving in at different ports.
* Each application uses a different port on your computer.
* The other computer will need to know which port to send the message to, so that’s the job of Computer 1’s TCP – they have to assign the correct port.  A bit like an air traffic controller who assign planes different arrival gates.
* Once the TCP has broken the message into manageable chunks and placed a header on the packets that identify it, the packets then move on to the Internet Protocol.
* The Internet Protocol, or IP, adds its own header to each packet, and this header includes the IP addresses for both the sending and receiving computers.
* Much like adding a shipping label to a package to be sent through the postal mail system.
* The packets need the IP address like every letter leaving your home needs a mailing address to arrive to its destination.
* Packets travel through routers, and the routers send each packet the fastest way.
* The fastest route does not necessarily mean the shortest route.
* Because they are going on different paths, the routes may be different for each packet.
* Each packet may take several hops between computers on different networks to reach its destination.
* Each network has devices called routers than direct the packet as they move between networks.
* Intermediate routers do not create an entire travel plan for the packet.
* Instead they simply know what the next best hop is for the packet to move it closer to its destination.
* Eventually, the packet will reach a router that knows where the destination is and can send the message directly to the destination.
* Once the packet reaches its destination, it first meets the IP what reads the header on each packet and verifies that the packet is intended for this specific address.
* Once it matches its IP address to the IP address on the packet, it removes the IP address header and sends the packet along to the TCP.
* Notice it does not care if all of the packets are there, and it does not care what order the packets arrive.
* It simply verifies that the packets belong there.
* Once at the TCP, TCP will read each header and reassemble the packets in their proper order.
* If there are any errors, like a packet is missing, it will send a message back to computer 1 asking for the packet.
* Once everything is there, it will reassemble the packet, remove the headers for each packet, and send the message to the correct port on the computer.
* A path between two computer devices on a computer network is a sequence of directly connected computing devices that begins at the sender and ends at the receiver.
* Routing is the process of finding a path from sender to receiver.
* Like driving from one place to another, however, the path is not determined as a straight line with the exact same path every single time.
* When you drive, depending on the traffic and road conditions, you may travel different ways on any trip.
* Similarly, with packets, special computing devices called routers act like traffic managers to keep the packets moving smoothly.
* If one route is congested, the router sends the packet on a different route.
* Therefore, the data may take a different path each time, depending on the traffic and the availability of the paths, and the packets may arrive to the destination at different times and in a different order.
* Every router keeps track of multiple paths for sending packets and then chooses the “cheapest” or fastest available route.
* Therefore, routing on the Internet is usually dynamic, meaning it is not specified in advance.
* The Internet is a computer network consisting of interconnected networks that use standardized, open (non-proprietary) communication protocols.
Access to the Internet depends on the ability to connect a computing device to an Internet-connected device.
* In computing, just like in other fields, a protocol is an agreed upon set of rules that specify the behavior of a system.
* Internet protocols are open, which allows users to easily connect additional computing devices to the Internet.
* An open system is based on a common model of network architecture and accompanying protocols.
* A digital signal loses information if it is allowed to degrade too much.
* This happens when a communication path is very long, such as from one country to another country across the globe.
* To stop this from happening, network devices called repeaters are installed periodically along the line to strengthen the signal.
* You may have seen WiFi Repeaters – these are devices that act as signal boosters to extend the WiFi signal in your house from the WiFi Router to the other side of the house.
* A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.
* A firewall can be hardware (an actual computer or networking device), software (security programs/applications), or both.
* It filters network traffic that comes in, checking its validity and also denying some of the messages. 
* The main purpose is to protect computers on the network behind the firewall.
* What kinds of things can a Firewall protect against?
    * Viruses embedded in email.
    * "Malware" or "Spyware" – malicious software installs.
    * Hackers trying to login/access confidential information.
* The TCP/IP Suite reflects the nature of the relationship between the two protocols – TCP rests on top of the IP foundation.
* TCP is the most common transmission protocol because it is highly reliable.
* Its reliability, however, comes at a cost, which is decreased performance.
* In other words, it can be slow because it needs to be accurate and takes more time to ensure accuracy.
* An alternative to TCP is UDP, which stands for User Datagram Protocol.
* UDP has the same role as TCP – so it breaks a message into packets, labels it with a port, and then reassembles the message at its destination and takes cares of errors.
* But it is less reliable than TCP.
* Even though it is less reliable, it is faster than TCP.
* UDP is part of the TCP/IP suite of protocols.
* The Internet Protocol and the Transmission Control Protocol or the User Datagram Protocol are known as the TCP/IP protocols, and after the hardware layer they are the lower two levels that form the foundation of Internet communication.
* The other layers build on the foundation of TCP/IP and are protocols that are referred to as high-level protocols.
* Port numbers are associated with a particular high-level protocol.
* These protocols deal with specific types of network communications.
* Some of the most widely used high-level protocols include:
    * Simple Mail Transfer Protocol (SMTP) which is used to specify the transfer of electronic mail.
    * File Transfer Protocol (FTP) is used when one computer transfers files to and from another computer.
    * Telnet – is used to log into a computer from a remote computer. It allows you to login and work on a computer as if you were seated in front of it.
    * Hypertext Transfer Protocol (HTTP) – defines the exchange of World Wide Web documents, which are usually written in Hypertext Markup Language (HTML), which we will discuss soon. 

[OSI Reference Model](osi-reference-model.jpg)

* The International Organization for Standardization (ISO) established the Open Systems Interconnection (OSI) Reference Model to facilitate the development of technologies.
The OSI Reference Model breaks down network interactions into 7 layers to help establish communication standards.
* Each layer deals with a specific part of network communication.
* The highest-level deals with the application communication with the host.
* The lowest layer deals with basic needs to communicate like wiring.
* The Application Layer is where applications access network services and is the human-computer interaction layer.
* The Presentation Layer is where it is verified that data is in a usable format and where data encryption occur.
* The Session Layer is responsible for controlling ports and sessions; it is the layer that maintains connections.
* The Transport Layer is where data is transmitted using TCP and UDP protocols.
* The Network Layer is where it is decided which physical path the data will take.
* The Datalink Layer is where the format of the data on the network is defined.
* The Physical Layer is where the raw bit stream is transmitted over the physical medium.
* Following the OSI Reference Model, network protocols are layered so that they rely on the protocols underneath it.
* This is sometimes referred to as a protocol stack, and it allows new protocols to be developed without abandoning fundamental aspects of lower level protocols.
* It also lessens the impact of new protocols on other aspects of the network.
* Sometimes protocols at the same level do the same thing in different ways.
* The Internet is the roadway that allows you to view the World Wide Web.
* The web is an infrastructure of information distributed among thousands of computers across the world and the software by which the information is accessed.
* The web relies on the underlying networks of the Internet to exchange its information with users.
* URL stands for Uniform Resource Locator and is used to specify the web document the user wants to view.
* The URL represents the domain and hostname of the web server where the information is stored, plus the directory or page you want to see.
* HTTP stands for hypertext transfer protocol which is a high-level internet protocol that defines the exchange of Web documents.
* HTTPS is  Hypertext Transfer Protocol Secure is an extension of HTTP.
* Most websites these days use HTTPS because it’s more secure – the data it serves to show the web page is encrypted.
* You should never conduct online transactions – purchasing things, or doing your banking using any websites that are not using HTTPS protocol.
* HTML stands for Hypertext Markup Language which is the language used to create or build a web page.
* HTML5 is the newest HTML standard that has a streamlined tag system and can support dynamic content.
* An HTML document contains information that is annotated by tags which specify how a specific element should be treated and formatted.

### 2. Fault Tolerance

* Computing devices and networks can have problems, or faults, that make continued communication in a network challenging or even impossible.
* Faults are errors or failures in the network system.
* The Internet is made up of 3 interconnected rings:
* The First and Last Mile or endpoints,
* The regional Internet Hubs in each area, and
* The Internet Backbone which is the cable highway connecting countries together,
* The Internet is pretty resilient – if one cable is cut, usually it doesn’t result in a huge outage as there are may other routes (or cables) that can be used to get a message from point A to point B.
* This is called a “Fault Tolerant System” because it can tolerate, or deal with faults or errors that happen.
* When a system can support failures and still continue to function, it is called fault-tolerant.
* This is important because elements of complex systems fail at unexpected times, often in groups, and fault tolerance allows users to continue to use the network.
* Types of faults that can occur:
    * Natural occurrences – sharks biting an undersea internet cable, lightning/windstorm severing a cable or power supply for an internet hub, earthquake causing damage to a building that is an internet hub.
    * Human accidental interference – ship anchor severing an undersea internet cable, construction project accidentally severing an overhead data cable, unplugging a server or cable in a data center.
    * Human malicious interference – hackers and criminals attacking weak/unsecure points in the network system to bring it down.
    * Computer hardware failure.
    * Computer software failure.
* Ways to prevent, mitigate, or recover from faults:
    * Redundant (duplicate) hardware – multiple cables or computers/servers so if one gets cut or goes down, the other one can act as a backup.
    * Tight Security – good passwords, 2-factor authentication methods, limited access and just generally tight security measures so no hackers can get in and bring down the system.
    * Updated Software – old, outdated software is more prone to failure or viruses.  Good to keep all software up-to-date with the latest versions and virus protection.
    * Updated Hardware – old hardware is also more prone to failure.  Make sure all computers, routers, cables and other hardware components in the system are recent and operating well.
    * Monitoring – frequent checking to make sure all parts of the system (hardware, software, networks) are healthy and operating as expected.
    * Location – place important parts of the system (Hubs, Data Centers) in geographic locations that are stable and less prone to natural disasters.
    * Backups – for important data that you want to keep, it’s good to run backups that will copy the data into multiple locations, so if one goes down, you have another copy of the data.
    * Battery/Generators – if the power goes out, it’s important to have a battery or generator or other power supply source.
* When determining how to make a network system fault-tolerant, security professionals look at the system and identify single points of failure.
* A single point of failure is a component or entity what will disable the entire system if it stops working.
* You want to remove any single point of failure to ensure everything stays online.
* Redundancy is the way security professionals address single point of failure. Redundancy is the inclusion of extra components that can be used to mitigate failure of a system if other components fail. Redundancy, therefore, requires additional resources but because of the additional investment, you have a fault tolerant system. Some examples of redundant components include:
    * Having additional servers to use when a server fails
    * Backing-up storage so there is a duplicate of everything.
    * Having generators and back-up power sources for when there is a power outage.
    * Having multiple data centers where your network is stored so that if one data center goes down the data can be sent through a data center.
    * Having more than one path between any two connected devices so that if one path is down the devices can still connect.
* With more network paths between two connected devices, the network system is ensured to continue operating when one path fails.
* The Internet is engineered in this way to be fault-tolerant.
* It includes abstractions for routing and transmitting data to ensure that it will continue to function.
* With multiple paths between two connected devices, if a particular device or connection on the Internet fails, subsequent data will be sent via a different route, if possible.
* The redundancy of routing options between two points increases the reliability of the Internet and helps it scale to more devices and more people.
* Some organizations will have spare parts or extra servers ready and waiting in case a server goes down and they need to replace it.
* Data centers are generally more proactive than that and instead, create a server cluster to deal with failures.
* With a server cluster, multiple servers appear as a single server and they are connected through public or private cluster connections.
* There are two types of server clustering asymmetric or symmetric:
    * Asymmetric servers do not have a function other than to be ready when needed.
        * These types of servers are typically used for databases, messaging systems, file and print servers.
    * With symmetric server clusters, all of the servers are working, and if one server fails, the remaining servers take over the work of the failed server.
        * Symmetric servers are used with Web, media, and Virtual Private Network servers. Symmetric servers are more cost effective.

### 3. Parallel and Distributed Computing

* With traditional computing, a computing device has a single primary processing unit that intakes information and processes it to produce output.
* There is a queue of new information coming in – Input.
* The processor handles the input and then it produces processed data coming out of it – Output.
* The speed of computing devices is limited by the speed of their processors, and processors can only be designed to go so fast before they overheat.
* So the amount of information that can be processed by a single unit is limited.
* To increase the speed for completing tasks and commands, however, you can increase the number of processors.
* When you do this, you are employing parallel computing because you are dividing the work among the processors.
* Here, for example, we have two processors working simultaneously and the tasks are divided among the processors.
* The processors are running at the same time, and they are doing the calculations at the same time.
* While this allows for faster speeds and the ability to complete more tasks in the same amount of time, it is more challenging to set up parallel processors.
* You must program the processors to know which jobs to take.
* The additional programming increases the potential for bugs in the program.
* Additionally, because the different processors may create part of a calculation that is dependent on the other processor, there may be some latency in the final product when one processor is waiting on the other processor to complete its task.
* With parallel computing, all of the processors have access to a shared memory that exchanges information between the processors.
* Two common parallel architectures are called SIMD and MIMD:
    * With SIMD, which stands for Single-Instruction, Multiple-Data stream, a step in a program is separated into multiple pieces and those pieces are executed simultaneously on several individual processors.
    * With MIMD, which stands for Multiple-Instruction, Multiple-Data stream, a second class of machines work on different parts of a program simultaneously.
* The "speedup" rate of is the time it took to complete a task sequentially divided by the time it took to complete the task in parallel.
* A distributed system is one that has multiple memory units connected through a network.
* Essentially, it is like an internal network of computers that can pass messages to one another and achieve a common goal.
* Another way to explain it is to say that a distributed system involves multiple entities talking to one another in some way, while also performing their own operations.
* With distributed computing, each processors has its own private memory, or distributed memory.
* Information is exchanged by passing messages between the processors.