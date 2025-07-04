---
title: "Global User-Centric In-App Search for the iOS TUM Campus App"
date: 2022-04-19T16:22:56+01:00
draft: false
author: "Administrator"
type: theses
targets:
  - bachelor
advisors:
  - zagar

tags:
  - ios

year: 2022
state: finished
student: David Lin
start_date: 2022-11-15T00:00:00+01:00
end_date: 2023-03-15T00:00:00+01:00
---
Using the TUM Campus iOS App (iTCA) students and employees of the Technical
University of Munich (TUM) have access to all day-to-day information concerning the
university. This includes a broad range of data about lectures as well as venues and
events of the TUM. Today, the app’s wide range of data consists of various types of
data presented in different views across the app. While there is a searching option in
some views included, this is limited to one type and one view at a time.

Since all the data processed by the iTCA is so diverse, this thesis introduces a Global
In-App Search (GIAS), which allows searching for any data type easily. Combining
the different types into a single view simplifies information access without the need to
navigate across different views. The GIAS relies on machine learning to identify the
most likely type of data, using a custom algorithm that compares individual strings.
Therefore various metrics were introduced and analyzed to find the best results for a
given search query.
Additionally, the app architecture was improved by refactoring the API implementations. The refactoring of the API enhances maintainability, increases implementation
efficiency and helps to add new features faster such as the GIAS.

For future work, the iTCA is expected to work offline reducing data consumption for
new features such as the GIAS. As a result, possible persistence storage frameworks
that enable local storage of data on the user’s device were analyzed. Furthermore, the
local data storage could accelerate the loading times and improve the user experience.
