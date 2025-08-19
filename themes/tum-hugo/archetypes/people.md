---
title: FIRSTNAME {{ replace .Name "-" " " | title }}
linkTitle: {{ replace .Name "-" " " | title }}, FIRSTNAME
weight: n
field: scientific_staff|professor|tech/admin|sysadmin|hiwi
firstname: FIRSTNAME
lastname: {{ replace .Name "-" " " | title }}
prefix: prefix
suffix: suffix
email: email
certificate: certificate
phone: phone_suffix
office: 01.07.0{office}
hours: A custom message to be displayed on the office hours page
portrait: "portrait.jpg"
social:
    web: website 
    github: github 
    twitter: twitter
    linkedin: in/linkedin
    mastodon: mastodon
    orcid: orcid
    googlescholar: googlescholar_id
    dblp: dplb
research:
- tag
- ...
aliases:
- {{ printf "/%s" .Name }}
---

Content can be written here in markdown. Check existing references for examples and have a look at the
[shortcode reference](https://github.com/ls1intum/ase.cit.tum.de#shortcode-reference) for adding shortcodes.

## Publications

{{< publications/by_author author={{ .Name }} >}}

## Teaching
{{< teaching instructor={{ .Name }} >}}

## Thesis

### Open 
{{< external_button margin="20px" href="https://thesis.aet.cit.tum.de/applications/thesis" >}}Thesis Management{{</ external_button >}}

### In Progress
{{< theses advisor={{ .Name }} state="in_progress" >}}

### Finished
{{< theses advisor={{ .Name }} state="finished" >}}
