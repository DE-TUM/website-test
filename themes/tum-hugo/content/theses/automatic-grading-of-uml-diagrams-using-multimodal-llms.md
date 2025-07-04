---
title: "Automatic Grading of UML Diagrams using Multimodal LLMs"
date: 2024-11-12T00:06:35+01:00
author: "Administrator"
targets:
  - bachelor
advisors:
  - soelch
supervisors:
  - krusche

tags:
  - education-technologies
  - automatic-assessment
  - learning-platforms
  - machine-learning
  - software-engineering
  - agile-development
  - continuous-software-engineering
  - artificial-intelligence
  - generative-ai

link: 
state: finished

student: Leon Laurin Wehrhahn
start_date: 2024-08-09T00:00:00+01:00
end_date: 2025-01-09T00:00:00+01:00

---
Providing high-quality, personalized feedback on UML diagrams is challenging for large universities with limited tutoring resources. This often leads educators to reduce individual assignments, offer less frequent feedback, or rely on group submissions, which can dilute the learning experience and impede students' skill development. Scalable automated systems are essential to enhance the grading process without compromising feedback quality.

While learning management systems like Artemis offer semi-automated grading for UML, existing tools like Compass require substantial manual effort and lack context-sensitive guidance. Recent LLM-based approaches are limited to specific diagram types, lack accuracy, ignore layout, and only generate grading instructions, not direct student feedback.

This thesis presents a novel hybrid system integrated into Artemis that overcomes these limitations. By combining a concise textual representation of Apollon UML diagrams with visual layout analysis using a multimodal LLM, it delivers more accurate, context-sensitive feedback across various UML diagram types. The system benefits both students through targeted feedback and tutors with suggested grading feedback.

Initial implementation in a large-scale software engineering course demonstrates that the system is effective and beneficial for both students and tutors.
