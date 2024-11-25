---
layout: characters
title: "Artefacts"
---

# Artefacts

Welcome to the artefacts page! Below is a list of artefacts in the world:

<div class="character-list">
{% for character in site.pages %}
    {% if character.path contains 'artefact/' and character.title != page.title %}
        <div class="character-item">
            <a class="character-link" href="{{ character.url | absolute_url}}">{{ character.title }}</a>
        </div>
    {% endif %}
{% endfor %}
</div>