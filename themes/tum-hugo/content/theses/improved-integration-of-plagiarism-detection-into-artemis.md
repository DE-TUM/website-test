---
title: "Improved Integration of Plagiarism Detection Into Artemis"
date: 2022-12-26T12:04:18+01:00
author: "Administrator"
targets:
  - bachelor
advisors:
  - krusche
supervisors:
  - bruegge

tags:
  - learning-platforms
  - deployment
  - devops

state: finished

student: Philipp Bauch
start_date: 2020-08-15T00:00:00+01:00
end_date: 2021-02-15
pdf: "https://ase.in.tum.de/lehrstuhl_1/research/thesis/bauch2021improved.pdf"
---

Exercises are an essential part of software engineering courses as students can apply the knowledge taught in class to
specific problems. When exercises are graded or even part of an exam, it is crucial to assure students have worked on
the assignments independently. Especially for large courses, com- paring submissions by hand is too time-consuming, and
instructors should use automated tools to detect plagiarism efficiently.

The current integration of plagiarism
detection in Artemis requires instructors to use external software to review plagiarism incidents and sort out false
positives manually. This process involves managing dozens of files and is error-prone as accidentally confounding
student submissions can cause false accusations. Differences in each instructor’s workflow might lead to inconsistent
assessment results.

This thesis improves the existing integration by processing the plagiarism results directly in
Artemis and highlighting similarities between submissions by color. Instructors can confirm or deny a plagiarism
incident and leave feedback to students whose submissions were confirmed as plagiarized. Artemis displays a
similarity distribution of detected results that helps instructors evaluate the plagiarism found. Instructors can
filter out submissions irrelevant for comparison to increase plagiarism detection performance. 
