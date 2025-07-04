---
title: "Securing and Scaling Artemis Websocket Architecture"
date: 2022-12-26T12:45:43+01:00
author: "Administrator"
targets:
  - bachelor
advisors:
  - krusche
supervisors:
  - bruegge

tags:
  - learning-platforms
  - security
  - infrastructure
  - distributed-systems
  - deployment
state: finished

student: Simon Leiß
start_date: 2022-06-15T00:00:00+01:00
end_date: 2021-11-15T00:00:00+01:00
pdf: "https://ase.in.tum.de/lehrstuhl_1/research/thesis/leiss2020securing.pdf"
---
Artemis is an interactive learning platform that allows students to solve quiz, text, modeling, and programming
exercises. Students receive automatic, individual feedback for programming and quiz exercises and receive manual
feedback for the other exercise types. As an increasing number of students use Artemis, scalability and fault-tolerance
become essential, especially for examinations that take place using Artemis.

Scaling vertically by adding more
resources is not applicable beyond a certain point, thus a horizontal scaling approach has to be implemented. Security
checks for real-time communication are limited. In this thesis, we scaled Artemis to multiple virtual machines and
improved the security for real-time communication. We moved Artemis from one virtual machine that hosts all subsystems,
including the database server and the load balancer, to a deployment on 14 virtual machines. This improved redundancy
and performance and separated different parts of the system. We introduced additional subsystems such as a discovery
service that are required when moving a web application from one instance to a distributed system.

Instructors of five
courses were able to conduct over 2,500 individual ex ams, with over 1,200 students participating in the largest one.
We could intercept failures of the system and fulfill performance requirements, even with more than 2,300 concurrently
connected users. We also optimized the existing real-time communication to be less resource-intensive and more secure
by grouping messages and enforcing security checks.

