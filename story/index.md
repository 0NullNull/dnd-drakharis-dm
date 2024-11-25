---
layout: characters
title: "Stories"
---

# Stories

Welcome to the **Stories** page! Below is a list of notable **stories** in the world:

<div class="character-list">
{% for story in site.pages %}
    {% if story.path contains 'story/' and story.title != page.title %}
        <div class="character-item">
            <a class="character-link" href="{{ story.url }}">{{ story.title }}</a>
        </div>
    {% endif %}
{% endfor %}
</div>