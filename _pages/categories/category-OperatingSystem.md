---
title:          "운영체제"
layout:         archive
permalink:      categories/OperatingSystem
author_profile: true
sidebar_main:   true
---

{% assign posts = site.categories.OperatingSystem %}
{% for post in posts %} {% include archive-single.html type = page.entries_layout %} {% endfor %}