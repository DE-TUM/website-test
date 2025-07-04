---
title: "Privacy-Friendly Notifications for the iOS TUM Campus App"
date: 2022-10-19T16:22:56+01:00
draft: false
author: "Administrator"
type: theses
targets:
  - bachelor
advisors:
  - zagar

tags:
  - ios
  - tca

year: 2022
state: finished
student: Anton Wyrowski
start_date: 2022-12-15T00:00:00+01:00
end_date: 2023-04-15T00:00:00+01:00
---
This thesis aims to enhance the TUM Campus iOS app by improving the user experience
and providing additional functionality. The thesis presents a privacy-friendly grade
notification system with smart scheduling and data-handling techniques, as well as
a feature to calculate an estimated average grade. These enhancements enable the
students to monitor their academic progress more conveniently and have the potential
to improve the overall user experience of the app.

To construct the grade notification system, several building blocks were introduced,
including a secure method of sending push notifications to the TUM Campus iOS app by
encrypting the notification payload with an asymmetric key pair and mechanisms to use
the student’s TUM API access token without storing it on the server. Subsequently, we
introduce three approaches for the smart grade notification scheduling system, which
we evaluated based on the number of network requests to the TUM API and the delay
in notifying students of new grades. The first approach involves checking grades for
each student individually. In contrast, the second and third approaches entail checking
grades for all students by checking one student for each lecture and subsequently
notifying all enrolled students. The third approach additionally introduces a new
algorithm based on the Set Cover Problem to minimize the number of students required
to check all lectures for new grades. The results indicate that all approaches are
practical, with the third approach being the most efficient regarding network requests.
However, the second approach may be the most efficient in terms of delay, which
requires further testing in a real-world scenario.

The implementation of the estimated average grade requires access to additional
information on TUM lectures, which is not provided by the TUM API. This thesis
presents the development of a web crawler to obtain the ECTS points and weight of
each lecture, from the TUM website, which are then stored in a database and updated
periodically. Utilizing this information, the estimated average grade can be calculated
for all student study programs. The evaluated results indicate that the estimated
average grade has an average error of 5.5%. However, it should be noted that there
can be deviations, especially for students who have taken special elective courses or
study programs with special weighting rules, due to missing information on the TUM
website. Furthermore, this thesis only considers a limited evaluation group of students,
which may lead to further deviations when applied in a real-world scenario.