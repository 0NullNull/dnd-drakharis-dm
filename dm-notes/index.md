---
layout: faction
title: "DM-Notes"
---

# DM-Notes

<div class="faction-list">
{% for character in site.pages %}
    {% if character.path contains 'dm-notes/' and character.title != page.title %}
        <div class="faction-item i-text">
            <a class="faction-link" href="{{ character.url | absolute_url}}">{{ character.title }}</a>
            <p>{{ character.description }}</p>
        </div>
    {% endif %}
{% endfor %}
</div>