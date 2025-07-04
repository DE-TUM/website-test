---
title: "Migration of Artemis Architecture From Monolithic to Microservices"
date: 2022-12-21T23:50:13+01:00
author: "Administrator"
supervisors:
  - bhatotia
state: finished
targets:
  - master
pdf: "/research/theses/mehmed2021.pdf"

start_date: 2021-06-15T00:00:00+01:00
end_date: 2021-12-15T00:00:00+01:00
student: "Merlin Mehmed"
advisors: 
  - volynsky
  - krusche
tags:
  - learning-platforms
  - continuous-software-engineering
  - deployment
---
Artemis is an open-source learning platform that uses a monolith architecture for its server application. This
architecture is beneficial at the beginning of a project but causes problems in large projects. First, when developers
introduce code changes, they need to build the whole application no matter how significant the difference is. This
results in slow build and test phases. Therefore, developers need to wait for them to complete until they can deploy
their changes, slowing down the development process as a whole. Another drawback of this architecture is inefficient
scaling. Artemis supports horizontal scaling by running several Artemis instances to handle the higher load during
real-time quiz exercises or exams. The current implementation does not allow scaling only part of the application,
leading to inefficient use of computational resources. This thesis sets the foundations of the migration of the Artemis
architecture towards microservices. It helps speed up the development process and support efficient building, testing
and scaling. It discusses the new architecture and the roles of its new components. It also describes the services
extraction process from the Artemis monolith and updates to the deployment pipeline. During the thesis, we extract two
microservices from the monolith. This change allows scaling those services independently. The services have a small
size, therefore, the build and test processes run fast, leading to shorter waiting times. It also has a positive effect
on the availability of the system. Failure in one service will not cause failure in other services. Additionally, we
create Kubernetes deployment resources for the new architecture to suit the future deployment process. Deploying on a
Kubernetes cluster makes scaling and failure handling much easier as it provides autoscaling and containers selfhealing.
