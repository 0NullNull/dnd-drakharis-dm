---
layout: characters
title: "Lore"
---

# Lore

Welcome to the lore page! Below is a list of notable items in the world:

<div class="character-list">
{% for item in site.pages %}
    {% if item.path contains 'lore/' and item.title != page.title %}
        <div class="character-item">
            <a  class="character-link" href="/{{ item.url }}">{{ item.title }}</a>
        </div>
    {% endif %}
{% endfor %}
</div>