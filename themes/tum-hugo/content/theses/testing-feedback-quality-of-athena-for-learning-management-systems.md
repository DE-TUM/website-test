---
title: "Testing Feedback Quality of Athena for Learning Management Systems"
date: 2025-06-20T12:40:52+02:00
author: "Administrator"
targets:
  - bachelor
advisors:
  - soelch
supervisors:
  - krusche

tags:
  - automatic-assessment
  - learning-platforms
  - artificial-intelligence
  - generative-ai

link: 
state: in_progress

student: Aleks Petrov
start_date: 2025-05-30T00:00:00+01:00
end_date: 2025-09-30T00:00:00+01:00

---
Athena is a module-based system that supports (semi-)automated assessment of exercises in Artemis. It provides tutors with immediate feedback on student submissions for programming and text exercises. Some modules are powered by large language models (LLMs), while others rely on rule-based or machine learning techniques. However, there are currently no systematic test cases to verify whether these modules work as expected or whether the quality of feedback remains consistent over time - especially when dependencies like LLM versions change. This thesis focuses on designing and implementing testing strategies to ensure the correctness and reliability of Athena’s feedback modules, with a primary focus on LLM-based modules. The goal is to support long-term maintainability and confidence in feedback quality through systematic verification tests and regression monitoring.