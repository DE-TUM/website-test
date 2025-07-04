---
title: "Towards a Declarative Definition of Network Configurations   Custom Terraform Provider for Rest Apis"
date: 2022-12-26T16:32:56+01:00
author: "Administrator"
targets:
  - bachelor
advisors:
  - linhuber
  - jandow
supervisors:
  - krusche

tags:
  - infrastructure
  - deployment
  - devops

state: finished
student: Kilian Warmuth
start_date: 2022-01-15T00:00:00+01:00
end_date: 2022-05-15T00:00:00+01:00

---

Infrastructure as Code (IaC) is the state-of-the-art method of managing resources both on-premise and in the cloud. It
is an approach to automate the complete lifecycle of any resource utilizing software development practices. The main
goal is a consistent and repeatable representation of the entire developed system. One of the most popular IaC tools is
Terraform. With Terraform, infrastructure requirements are formalized as declarative configuration files consisting of
providers and resources. A provider is a plugin that allows interaction with external entities like AWS or other APIs.
Each provider defines a set of data sources and resource types. A resource, on the other hand, describes some
infrastructure object like a virtual machine, DNS record, or Network.  

This thesis consists of two parts. First, you will develop and outline how REST APIs can be implemented in custom
Terraform providers. During the second part, you will design and implement a REST API for an existing network stack and
use your approach to implement the API in Terraform. 

## Goals

- Design a general approach how REST APIs can be implemented as Terraform Providers
- Design and implement a robust and secure REST API for an existing Python Library which controls DNS, DHCP, etc.
- Design and implement a Terraform Provider for this REST API

## Prerequisites
- Compulsory
  - Linux and networking knowledge
  - Comfortable with Python
  - Willing to learn Go and Terraform
- Preferred
  - Good Python Knowledge
  - Good Go Knowledge
  - Experience in API design
  - Experience with Terraform and its workflow

## Application
Email to matthias.linhuber@tum.de with

- A short motivation letter
- A summary of your projects/experience
- What ever you want to share with us 
