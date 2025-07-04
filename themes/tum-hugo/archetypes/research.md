---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
author: "Administrator"
description: "Optional: content displayed on the card, if not set, then .Summary is used"
image_path: "Optional: image displayed on the card, if not set, ignored."
---
Article contents