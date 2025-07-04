---
title: "Automatic Correction of Programming Exercises With Artemis and Gitlab Ci"
date: 2023-02-06T15:45:39+01:00
author: "Administrator"
targets:
  - seminar
advisors:
  - bernius
  - linhuber 
supervisors:
  - krusche

tags:
  - education-technologies
  - automatic-assessment
  - learning-platforms
  - k12/schools
  - infrastructure
  - interactive-technology
  - software-engineering
  - continuous-software-engineering
  - devops

link: 
state: finished

student: Benjamin Sebastian Schmitz
start_date: 2022-01-15T00:00:00+01:00
end_date: 2022-12-06T00:00:00+01:00
---
Artemis is a Learning Management System (LMS) that facilitates program- ming exercises using a Version Control System (VCS) and a Continuous Integration System (CIS). Since some VCSs include a Continuous Integration (CI) application, it is possible to reduce the effort required to maintain the servers and migrate the CIS from external applications to the integrated system.
In the existing implementation, programming exercises rely on a configuration stored in the CIS as part of build plans. These configurations are duplicated for every student participation, making it hard to update the configuration throughout the exercise lifecycle.
GitLab CI is the CIS provided by the GitLab VCS. This system supports provisioning build plans via the Artemis Application Programming Interface (API), which makes it possible to update the build plan retrospectively, as the build plan is fetched from the API on each run.
In this thesis, we show how Artemis can be extended to support an VCS with an in-built CIS. We analyze the underlying problem, formalize the requirements, and model the adapted system design. We implement the changes as part of the open-source Artemis system. We generalize the existing Jenkins Server Notification Plugin for usage with different CISs to notify Artemis. Artemis is now capable of conducting Java programming exercises with a single dependency on GitLab.
