---
layout: faction
title: "Lore"
---

<div class="faction-list">
{% for character in site.pages %}
    {% if character.path contains 'lore/' and character.title != page.title %}
        <div class="faction-item i-text">
            <a class="faction-link" href="{{ character.url | absolute_url}}"><h2>{{ character.title }}</h2></a>
            <p>{{ character.description }}</p>
        </div>
    {% endif %}
{% endfor %}
</div>