---
title: "A Domain Specific Language for Streamlining CI Job Configuration for Programming Exercises"
date: 2023-11-03T14:51:17+01:00
author: "linhuber"
targets:
  - master
advisors:
  - linhuber
  - jandow
supervisors:
  - krusche

tags:
  - automatic-assessment
  - learning-platforms
  - infrastructure
  - interactive-technology
  - software-engineering
  - continuous-software-engineering
  - devops

link: 
state: finished

student: Andreas Resch
start_date: 2023-08-15T00:00:00+01:00
end_date: 2024-02-15T00:00:00+01:00
#pdf: /research/theses/FILENAME.pdf
---
# Abstract

Continuous Integration (CI) has become a pivotal element in software development, automating processes such as testing, linting, and compilation of developed code. In the realm of applied software engineering education, particularly in Artemis, an online learning platform, CI plays a crucial role in enhancing the learning experience through automated feedback on programming exercises. However, the existing feature disparity and different configuration languages among various CI platforms usable with Artemis, leads to difficulties in replacing these systems seamlessly, creating a vendor lock-in scenario.
This thesis proposes a Domain-Specific Language (DSL) named Aeolus, aimed at streamlining CI job configuration. The main objective is the development of an abstraction layer that reduces dependency on specific CI systems, enhancing usability, maintenance, and extensibility in programming exercise contexts. The new layer is designed to enhance portability and usability by allowing the use of the same CI configuration across different platforms.
The core of this thesis is the development of Aeolus. The system is specifically crafted to address the challenges in the CI configuration within Artemis by providing a structured and unified approach to the configuration of CI systems. By enabling user-friendly configuration of continuous integration jobs, Aeolus reduces the time required to customize new programming exercises and lessens the dependency on the underlying CI platform.

