---
title: "Code Quality Assurance Using E2E Tests"
date: 2023-01-05T16:07:39+01:00
author: "Administrator"
targets:
  - master
advisors:
  - linhuber
supervisors:
  - krusche
link: ""
pdf: ""
tags:
  - education-technologies
  - security
  - infrastructure
  - software-engineering
  - continuous-software-engineering
  - modeling
  - devops

state: finished

student: Florian Gareis
start_date: 2022-12-15T16:07:39+01:00
end_date: 2023-06-15T00:00:00+01:00


---

Artemis is an open-source interactive learning platform that uses different exercise types to support blended learning. Ensuring its continuous operation requires comprehensive testing of its functionality. While a CI system already tests every contribution to the software by unit, integration, and system tests/End-to-end (E2E), the system tests, in particular, lack coverage of multiple components, including test exams, communication features, and certain exam features.

By extending E2E test coverage, this work ensures a thorough validation of Artemis's various components, providing a continuous evaluation of the current state of the platform. Concurrently, reducing test flakiness within the E2E tests is crucial in ensuring consistent test outcomes and system stability, making the test results a more reliable robustness indicator.

Furthermore, this thesis introduces Sorry-Cypress, an open-source dashboard tool, into the development workflow. This tool supports debugging of failing E2E tests by assisting developers in identifying, analyzing, and rectifying failing tests efficiently, thereby streamlining the development process.
