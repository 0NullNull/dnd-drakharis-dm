---
layout: characters
title: "monsters"
---

# monsters

Welcome to the monsters page! Below is a list of notable monsters in the world:

<div class="character-list">
{% for monster in site.pages %}
    {% if monster.path contains 'monsters/' and monster.title != page.title %}
        <div class="character-item">
            <a class="character-link" href="{{ monster.url }}">{{ monster.title }}</a>
        </div>
    {% endif %}
{% endfor %}
</div>