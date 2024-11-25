---
layout: faction
title: "Factions"
---

# Factions

Welcome to the factions page! Below is a list of notable factions in the world:

<div class="faction-list">
{% for character in site.pages %}
    {% if character.path contains 'factions/' and character.title != page.title %}
        <div class="faction-item">
            <a class="faction-link" href="{{ character.url }}">{{ character.title }}</a>
            <p>{{ character.description }}</p>
        </div>
    {% endif %}
{% endfor %}
</div>