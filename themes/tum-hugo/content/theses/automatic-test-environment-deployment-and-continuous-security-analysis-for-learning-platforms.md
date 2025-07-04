---
title: "Automatic Test Environment Deployment and Continuous Security Analysis for Learning Platforms"
date: 2022-09-05T16:45:38+01:00
author: "Administrator"
targets:
  - master
advisors:
  - linhuber
supervisors:
  - krusche

tags:
  - security
  - infrastructure
  - distributed-systems
  - software-engineering
  - agile-development
  - continuous-software-engineering
  - deployment
  - devops

link: 
state: finished

student: Ludwig Pusl
start_date: 2022-09-15T00:00:00+01:00
end_date: 2023-06-15T00:00:00+01:00

pdf: 
---
The Artemis open-source interactive learning platform has set a long-term goal of deploying its services using Kubernetes to enhance scalability and support courses with many students. However, setting up test environments, particularly for new and occasional developers, presents significant challenges. Furthermore, the manual data entry required during testing further prolongs the testing phase. This thesis focuses on optimizing the development workflow, resulting in a more efficient approach to developing and testing Artemis.

To address these challenges, the thesis aims to develop automated and streamlined test environment setups and tooling for data entry in Artemis. Regarding test environment setups, we explore using Docker Compose for managing these setups. This approach enables the creation of tailored setups that align with specific testing needs. The thesis includes debugging tools within the test environment setups to aid troubleshooting. Regarding automated data entry, the thesis proposes a solution that allows for programmable data entry, ensuring the availability of up-to-date Artemis data entities by generating a client from its OpenAPI specification. The main contribution of this document lies in providing practical approaches to enhance Artemis's testing and development processes.
