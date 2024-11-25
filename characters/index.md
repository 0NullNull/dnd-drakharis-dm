---
layout: characters
title: "Characters"
---

# Characters

Welcome to the characters page! Below is a list of notable characters in the world:

<div class="character-list">
{% for character in site.pages %}
    {% if character.path contains 'characters/' and character.title != page.title %}
        <div class="character-item">
            <a class="character-link" href="{{ character.url }}">{{ character.title }}</a>
        </div>
    {% endif %}
{% endfor %}
</div>