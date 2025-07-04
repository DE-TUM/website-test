---
title: "Further Development of the Version Control and Continuous Integration in Artemis"
date: 2023-07-25T18:27:28+01:00
author: "Administrator"
targets:
  - master
advisors:
  - krusche
state: open
tags:
  - automatic-assessment
  - learning-platforms
  - infrastructure
  - agile-development
  - continuous-software-engineering
  - deployment
  - devops
---
Programming exercises in Artemis can be realized with Bitbucket/Bamboo, Gitlab/Jenkins, GitlabCI or LocalVCS/CI.
This allows flexibility for Artemis admins. LocalVCS/CI provides an easy setup for developers and for universities to try out Artemis.
However, not all functionality for programming exercises is available on all combinations of version control and continuous integration subsystems
In this thesis, the missing features should be implemented. In addition, the concept of build agents and dockerized builds should be realized within
LocalCI. 

Artemis is open source and available on https://github.com/ls1intum/Artemis
