---
title: "Development of Manual Assessment for Programming Exercises in the Orion Plugin"
date: 2022-12-26T11:54:31+01:00
author: "Administrator"
targets:
  - bachelor
advisors:
  - krusche
supervisors:
  - bruegge
tags:
  - learning-platforms
state: finished

student: Martin Dunker
start_date: 2020-02-15T00:00:00+01:00
end_date: 2020-08-15T00:00:00+01:00
pdf: "/research/theses/dunker2021.pdf"
---
Artemis is a learning platform used to conduct programming courses with programming exercises. Students submit their
code and the system automa- tically runs tests on it. Nonetheless, manual assessment is still necessary to ensure fair
grading. Reviewers are currently assessing the code using Artemis’s online code editor. While this code editor can show
the code, advanced functionality like code completion or debugging is missing. If re- viewers wish to execute the
students’ code, they need to manually download it into their IDE, causing a media disruption.

The same problem is already solved for students with the Orion plugin for Artemis, which integrates Artemis into the
IntelliJ IDE, automating the download and import of programming exercises. In this thesis, we extend the plugin to
support the manual assessment. The plugin should enable reviewers to automatically download the students’ code, making
available all features of the IDE. Reviewers can create assessment comments with Orion, enabling them to perform the
assessment without leaving the IDE. 
