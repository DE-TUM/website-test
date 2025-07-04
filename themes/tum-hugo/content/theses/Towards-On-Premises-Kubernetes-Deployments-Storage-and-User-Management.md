---
title: "Towards on Premises Kubernetes Deployments: Storage and User Management"
date: 2024-05-31T16:05:00+02:00
author: "linhuber"
targets:
  - bachelor
advisors:
  - linhuber
  - jandow
supervisors:
  - krusche

tags:
  - education-technologies
  - infrastructure
  - devops

link: 
state: finished

student: "Colin Wilk"
start_date: 2024-05-01T00:00:00+01:00
end_date: 2024-09-01T00:00:00+01:00
#pdf: /research/theses/FILENAME.pdf
---


The emergence of Kubernetes has transformed the practices surrounding the deployment and management of containerized applications by introducing advanced automation, scalability, and operational ease. This thesis focuses on enhancing the Kubernetes deployment at the Technical University of Munich.
We identify key issues within the current deployment architecture, including the lack of persistent storage in the Kubernetes cluster, making it unsuitable for stateful applications like Artemis, the cumbersome quality assurance workflow for Artemis, and lacking access control hindering educational use of the Kubernetes cluster.
To address these issues, we develop a containerized storage bench- marking tool to compare different storage solutions within Kubernetes environments, integrate multiple storage technologies, and evaluate their performance under various workloads. Furthermore, we implement user management and access control using Keycloak and Rancher, facilitating secure and structured access for students and developers. Lastly, the thesis aims to streamline Artemis’s quality assurance workflow by demonstrating the Kubernetes cluster’s capabilities to dynamically deploy review instances from GitHub pull requests.
Collectively, these enhancements seek to optimize the deployment architecture for Artemis and enrich the educational infrastructure by providing reliable, scalable, hands-on experience with cloud-native technologies. This work stands at the intersection of modern deployment practices and educational advancement, reflecting the evolving landscape of software engineering and the pivotal role of Kubernetes in shaping the future of application management.