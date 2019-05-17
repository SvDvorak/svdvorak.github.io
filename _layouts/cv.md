---
layout: page
---

<div class="cv">
    <div class="main_body">
        {{ content }}
    </div>
    <div class="skills">
        {%- for skillLevel in page.skillLevels -%}
        <h3>{{ skillLevel.level }}</h3>
        <ul>
            {%- for skill in skillLevel.skills -%}
            <li>{{ skill }}</li>
            {%- endfor -%}
        </ul>
        <br />
        {%- endfor -%}
    </div>
</div>