---
title:          "C #"
layout:         archive
permalink:      categories/ProgrammingLanguage/CSharp
author_profile: true
sidebar_main:   true
---

{% assign posts = site.categories['C Sharp'] %}
{% for post in posts %} {% include archive-single.html type = page.entries_layout %} {% endfor %}