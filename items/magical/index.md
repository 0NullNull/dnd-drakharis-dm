---
layout: characters
title: "Magical Items"
---

# Magical items

Welcome to the magical items page! Below is a list of magical items in the world:

<div class="character-list">
{% for character in site.pages %}
    {% if character.path contains 'magical/' and character.title != page.title %}
        <div class="character-item">
            <a class="character-link" href="{{ character.url | absolute_url}}">{{ character.title }}</a>
        </div>
    {% endif %}
{% endfor %}
</div>