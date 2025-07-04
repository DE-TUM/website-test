---
title: Example Tutor Job
date: {{ .Date }}
description: "Description"
timespan:
    begin: {{ .Date }}
    end: {{ .Date }}
instructors:
  - alias: alias
    role: "role"
---
Example Tutor Job

See: {{< internal_link path="/teaching/23w/itp/" >}} Introduction to Programming {{</ internal_link >}}

#### Position Information
- **Language:**
- **Prerequisites:**
- **Mandatory Application**:
- **Hours per week**:
# {{< external_button href="/" >}}Apply here{{</ external_button >}}

#### Application instructions
To apply for this position, please submit your resume and a cover letter explaining your interest and relevant
experience. The application deadline is {{< internal/job_enddate >}}

#### Contact
For further questions, please contact us at [itp23.dse@xcit.tum.de](mailto:itp23.dse@xcit.tum.de).

{{< list_instructors type=instructors >}}
